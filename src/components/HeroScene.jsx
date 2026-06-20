import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A distorted icosahedron with a flowing fresnel + noise shader in the
 * brand palette (cyan -> indigo -> amber rim). Rotates slowly and leans
 * toward the pointer. This is the single WebGL moment in the site.
 */

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uHover;
  varying vec3 vNormal;
  varying vec3 vPos;

  // classic simplex-ish 3d noise (Ashima)
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
    i=mod(i,289.0);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=1.0/7.0; vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vNormal = normal;
    float n = snoise(normal * 1.6 + uTime * 0.28);
    float displace = n * (0.28 + uHover * 0.18);
    vec3 newPos = position + normal * displace;
    vPos = newPos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPos;

  void main(){
    // fresnel-style rim based on view-space normal
    float rim = pow(1.0 - abs(vNormal.z), 2.4);
    float mixv = clamp(vPos.y * 0.5 + 0.5, 0.0, 1.0);

    // tighter, deeper brand band — indigo body, cyan highlights,
    // amber kept as a razor-thin rim so it never tints the whole mass green
    vec3 deepIndigo = vec3(0.157, 0.165, 0.451);
    vec3 indigo     = vec3(0.388, 0.400, 0.945);
    vec3 cyan       = vec3(0.133, 0.827, 0.933);
    vec3 amber      = vec3(0.984, 0.749, 0.290);

    vec3 base = mix(deepIndigo, indigo, mixv);
    base = mix(base, cyan, smoothstep(0.55, 1.0, mixv) * 0.7);
    base = mix(base, amber, smoothstep(0.85, 1.0, rim) * 0.45);

    // gentler glow so the body stays saturated instead of blowing out to green
    float glow = 0.55 + rim * 0.55;
    gl_FragColor = vec4(base * glow, 1.0);
  }
`;

function Blob({ pointer }) {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHover: { value: 0 },
    }),
    []
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    const m = mesh.current;
    if (!m) return;
    // ambient spin
    m.rotation.y += delta * 0.12;
    m.rotation.x += delta * 0.05;
    // ease position toward pointer for a subtle parallax lean
    m.position.x += (pointer.current.x * 0.4 - m.position.x) * 0.05;
    m.position.y += (pointer.current.y * 0.4 - m.position.y) * 0.05;
    // ramp displacement with pointer distance
    const target = Math.min(Math.hypot(pointer.current.x, pointer.current.y), 1);
    uniforms.uHover.value += (target - uniforms.uHover.value) * 0.06;
  });

  return (
    <mesh ref={mesh} scale={1.55}>
      <icosahedronGeometry args={[1, 64]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
}

export default function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        pointer.current.x = 0;
        pointer.current.y = 0;
      }}
    >
      <Blob pointer={pointer} />
    </Canvas>
  );
}

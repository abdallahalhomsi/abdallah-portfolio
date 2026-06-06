import React, { useState, useEffect, useRef, useCallback } from "react";

// ============================================================================
// Abdallah Al Homsi — Portfolio  (v3 · tech / neon gradient)
// Single-file React. Tailwind core utilities only. Default export.
//
// ADD PROJECTS:  push objects into PROJECTS.
// MARK CERT DONE: set done:true on a CERT_TRACKS item (adds ✓ badge).
// ============================================================================

const PROFILE = {
  name: "Abdallah Al Homsi",
  tagline:
    "Senior CS & Engineering student building full-stack products, mobile apps, and applied ML. Minor in Business Analytics.",
  location: "Istanbul, TR · Amman, JO",
  email: "homsiabdullah4@gmail.com",
  github: "https://github.com/abdallahalhomsi",
  linkedin: "https://www.linkedin.com/in/abdallah-al-homsi-817a7834b/",
};

const STATS = [
  { value: "2027", label: "Expected Graduation" },
  { value: "Dean's List", label: "High Honors" },
  { value: "50%", label: "Merit Scholarship" },
  { value: "4+", label: "Projects" },
];

const PROJECTS = [
  {
    name: "SneakerNest",
    type: "Full-Stack E-Commerce Platform",
    period: "Jan – May 2025",
    role: "Scrum Master",
    blurb:
      "A scalable e-commerce system with secure REST APIs and a relational schema designed from scratch. Led sprint planning across the team.",
    stack: ["React", "Node.js", "Express", "MySQL", "Docker"],
    c1: "#22d3ee", c2: "#0ea5e9",
  },
  {
    name: "SU Learning Companion",
    type: "Cross-Platform Mobile App",
    period: "Sep 2025 – Jan 2026",
    role: "Project Coordinator",
    blurb:
      "A productivity app helping students stay organized — course tracking, reminders, flashcards, and deadline management in one place.",
    stack: ["Flutter", "Dart", "Firebase"],
    c1: "#a855f7", c2: "#6366f1",
  },
  {
    name: "AI for Accessibility",
    type: "iOS Navigation App",
    period: "Jan – May 2025",
    role: "iOS / ML",
    blurb:
      "An iOS app for visually impaired users. Real-time object detection with audio feedback and gesture controls, running on-device.",
    stack: ["Swift", "CoreML", "YOLO", "Xcode"],
    c1: "#34d399", c2: "#10b981",
  },
  {
    name: "Unemployment & Crime in the U.S.",
    type: "Data Science Research",
    period: "Feb – May 2025",
    role: "ML / Stats",
    blurb:
      "EDA, hypothesis testing, and statistical modeling in Python. Selected as a reference sample for future course offerings.",
    stack: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    c1: "#f472b6", c2: "#ec4899",
  },
];

const EXPERIENCE = {
  company: "TechChef — SAP Analytics Cloud Team",
  location: "Amman, Jordan",
  period: "Jun – Aug 2025",
  title: "Data Analyst & Custom Widget Developer Intern",
  points: [
    "Built custom SAC widgets using JavaScript, HTML, and CSS.",
    "Delivered two production-ready widgets independently and earned a recommendation letter.",
  ],
};

const CERT_TRACKS = [
  {
    track: "AI Engineering", source: "Anthropic", hours: "30+ hrs",
    items: [
      { name: "Building with the Claude API", done: false },
      { name: "Claude with Amazon Bedrock", done: false },
      { name: "Claude with Google Cloud Vertex AI", done: false },
      { name: "Claude Code 101", done: false },
      { name: "Claude Code in Action", done: false },
      { name: "Introduction to MCP", done: false },
      { name: "MCP: Advanced Topics", done: false },
      { name: "Introduction to Agent Skills", done: false },
      { name: "Introduction to Subagents", done: false },
      { name: "Claude 101", done: false },
      { name: "Introduction to Claude Cowork", done: false },
      { name: "AI Capabilities & Limitations", done: false },
    ],
  },
  {
    track: "AI Fluency", source: "Anthropic", hours: "4+ hrs",
    items: [
      { name: "Framework & Foundations", done: false },
      { name: "AI Fluency for Students", done: false },
      { name: "AI Fluency for Small Businesses", done: false },
      { name: "Teaching AI Fluency", done: false },
    ],
  },
  {
    track: "Web Development", source: "Bootcamps", hours: "",
    items: [
      { name: "Complete Web Development Bootcamp — Angela Yu", done: true },
      { name: "JavaScript Mastery — JS Mastery", done: true },
    ],
  },
];

const SKILLS = {
  Languages: ["Python", "C++", "JavaScript", "SQL", "Java", "Dart", "Swift"],
  "Frontend & Mobile": ["React.js", "HTML", "CSS", "Flutter", "Figma"],
  "Backend & Data": ["Node.js", "Express.js", "MySQL", "Firebase", "Docker"],
  "ML & Analytics": ["PyTorch", "scikit-learn", "YOLO", "Pandas", "NumPy", "SAP Analytics Cloud"],
  Tooling: ["Git / GitHub", "JIRA", "Docker Compose"],
};

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [cursor, setCursor] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onMove); };
  }, []);

  const go = useCallback((id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="relative min-h-screen text-neutral-100 overflow-x-hidden selection:bg-cyan-400 selection:text-neutral-950"
         style={{ background: "#04060f" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Space+Mono:wght@400;700&family=Sora:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');
        .font-display{font-family:'Syne',sans-serif}
        .font-serif-d{font-family:'Fraunces',Georgia,serif}
        .font-body{font-family:'Sora',system-ui,sans-serif}
        .font-mono{font-family:'Space Mono',monospace}
        body,#root{background:#04060f}
        .grain::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:60;opacity:.06;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .gridbg::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;
          background-image:linear-gradient(rgba(56,189,248,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.06) 1px,transparent 1px);
          background-size:64px 64px;mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,#000 30%,transparent 75%)}
        @keyframes drift{0%{transform:translate(0,0) scale(1)}33%{transform:translate(10%,-8%) scale(1.2)}66%{transform:translate(-8%,10%) scale(.9)}100%{transform:translate(0,0) scale(1)}}
        @keyframes drift2{0%{transform:translate(0,0) scale(1)}50%{transform:translate(-12%,12%) scale(1.25)}100%{transform:translate(0,0) scale(1)}}
        @keyframes drift3{0%{transform:translate(0,0) scale(1)}50%{transform:translate(14%,8%) scale(1.1)}100%{transform:translate(0,0) scale(1)}}
        .b1{animation:drift 20s ease-in-out infinite}
        .b2{animation:drift2 26s ease-in-out infinite}
        .b3{animation:drift3 23s ease-in-out infinite}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .marquee{animation:marquee 24s linear infinite}
        @keyframes shimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .grad-text{background:linear-gradient(110deg,#22d3ee,#a855f7,#f472b6,#22d3ee);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 7s ease infinite}
        .glass{background:rgba(13,18,38,.5);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.08)}
        .neon-border{position:relative}
        .neon-border::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(130deg,rgba(34,211,238,.5),rgba(168,85,247,.3),transparent 60%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
      `}</style>

      <div className="grain" />
      <div className="gridbg" />

      {/* drifting gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="b1 absolute -top-40 right-[-10%] h-[65vh] w-[65vh] rounded-full blur-[130px]"
             style={{ background: "radial-gradient(circle,rgba(34,211,238,.4),transparent 70%)" }} />
        <div className="b2 absolute top-1/4 left-[-15%] h-[60vh] w-[60vh] rounded-full blur-[130px]"
             style={{ background: "radial-gradient(circle,rgba(168,85,247,.35),transparent 70%)" }} />
        <div className="b3 absolute bottom-[-10%] left-1/3 h-[55vh] w-[55vh] rounded-full blur-[130px]"
             style={{ background: "radial-gradient(circle,rgba(244,114,182,.28),transparent 70%)" }} />
      </div>

      {/* cursor glow */}
      <div className="pointer-events-none fixed z-0 h-96 w-96 rounded-full blur-3xl"
           style={{ left: cursor.x - 192, top: cursor.y - 192,
             background: "radial-gradient(circle,rgba(34,211,238,.1),transparent 70%)",
             transition: "left .2s ease-out, top .2s ease-out" }} />

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full glass border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" onClick={go("top")} className="font-mono text-sm grad-text font-bold">AH.</a>
          <div className="hidden gap-8 text-sm text-neutral-400 md:flex">
            {["Work", "Experience", "Skills", "Certificates", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={go(s.toLowerCase())} className="hover:text-cyan-300 transition-colors">{s}</a>
            ))}
          </div>
          <a href={`mailto:${PROFILE.email}`} className="font-mono text-xs rounded-full px-4 py-2 text-neutral-950 font-bold"
             style={{ background: "linear-gradient(110deg,#22d3ee,#a855f7)" }}>Get in touch</a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-52 md:pb-36">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80 mb-8"
             style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 mr-2 align-middle" style={{ boxShadow: "0 0 12px #22d3ee" }} />
          {PROFILE.location} · Available 2027
        </div>
        <h1 className="font-display font-extrabold text-[10vw] leading-[0.9] tracking-tight md:text-[7rem] lg:text-[9rem]">
          <span className="grad-text">ABDALLAH</span><br />
          <span className="text-neutral-600">AL HOMSI</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-neutral-300 font-body">{PROFILE.tagline}</p>
          <div className="flex gap-4 font-mono text-xs">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="border-b border-cyan-400/50 pb-1 hover:border-cyan-400 hover:text-cyan-300 transition">GitHub ↗</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="border-b border-cyan-400/50 pb-1 hover:border-cyan-400 hover:text-cyan-300 transition">LinkedIn ↗</a>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass neon-border md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="px-5 py-6 md:px-6 md:py-8">
                <div className="font-display font-bold text-2xl md:text-3xl grad-text">{s.value}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-neutral-500">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </header>

      {/* marquee */}
      <div className="relative z-10 border-y border-white/10 py-5 overflow-hidden">
        <div className="marquee flex whitespace-nowrap font-display font-bold text-2xl uppercase tracking-tight text-neutral-700">
          {Array(2).fill(0).map((_, k) => (
            <span key={k} className="flex">
              {["Full-Stack", "Mobile", "Machine Learning", "Data Science", "AI Engineering", "Cloud"].map((w) => (
                <span key={w} className="mx-8 flex items-center gap-8">{w}<span className="grad-text">✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionLabel n="01" title="Selected Work" />
        <div className="mt-10 md:mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass neon-border p-8 transition-all duration-500 hover:-translate-y-1.5"
                       onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 24px 70px -24px ${p.c1}aa`)}
                       onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-80"
                     style={{ background: `radial-gradient(circle,${p.c1},transparent 70%)` }} />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">{p.type}</div>
                    <h3 className="mt-2 font-display font-bold text-3xl">{p.name}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500 whitespace-nowrap">{p.period}</span>
                </div>
                <p className="relative mt-5 text-sm leading-relaxed text-neutral-300 font-body">{p.blurb}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border px-3 py-1 font-mono text-[11px]"
                          style={{ borderColor: `${p.c1}44`, color: p.c1, background: `${p.c1}11` }}>{t}</span>
                  ))}
                </div>
                <div className="relative mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
                     style={{ color: p.c1 }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.c1, boxShadow: `0 0 10px ${p.c1}` }} />{p.role}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-mono text-sm text-neutral-500">
          More on <a href={PROFILE.github} target="_blank" rel="noreferrer" className="grad-text border-b border-cyan-400/40">GitHub ↗</a>
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionLabel n="02" title="Experience" />
        <Reveal>
          <div className="mt-10 md:mt-16 rounded-3xl glass neon-border p-7 md:p-14">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-display font-bold text-3xl md:text-4xl">{EXPERIENCE.title}</h3>
              <span className="font-mono text-xs text-neutral-500">{EXPERIENCE.period}</span>
            </div>
            <div className="mt-2 font-mono text-sm text-cyan-300/80">{EXPERIENCE.company} · {EXPERIENCE.location}</div>
            <ul className="mt-8 space-y-4">
              {EXPERIENCE.points.map((pt) => (
                <li key={pt} className="flex gap-4 text-neutral-300 font-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 10px #22d3ee" }} />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionLabel n="03" title="Toolkit" />
        <div className="mt-10 md:mt-16 grid gap-px overflow-hidden rounded-3xl glass neon-border md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.06}>
              <div className="h-full p-8">
                <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/80">{group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 hover:border-cyan-400/50 hover:text-cyan-200 transition">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionLabel n="04" title="Certificates" />
        <p className="mt-6 max-w-2xl text-neutral-400 font-body">
          Sabancı University — BSc Computer Science & Engineering, Minor in Business Analytics. Dean's List High Honors, 50% merit scholarship. Plus a focused stack of Anthropic AI engineering certificates.
        </p>
        <div className="mt-10 md:mt-16 space-y-5">
          {CERT_TRACKS.map((tr, i) => (
            <Reveal key={tr.track} delay={i * 0.08}>
              <div className="rounded-3xl glass neon-border p-8 md:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display font-bold text-2xl md:text-3xl">{tr.track}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">{tr.source}{tr.hours && ` · ${tr.hours}`}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tr.items.map((c) => (
                    <span key={c.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                      {c.done && <span className="grad-text font-bold">✓</span>}{c.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">Let's build something</p>
          <h2 className="mt-6 font-display font-extrabold text-[13vw] leading-[0.9] uppercase md:text-[7.5rem]">
            Get in <span className="grad-text">touch</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl glass neon-border md:grid-cols-3">
            <a href={`mailto:${PROFILE.email}`} className="group p-8 hover:bg-white/5 transition">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">Email</div>
              <div className="mt-2 text-sm text-neutral-300 group-hover:text-cyan-300 transition break-all">{PROFILE.email}</div>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="group p-8 hover:bg-white/5 transition">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">GitHub</div>
              <div className="mt-2 text-sm text-neutral-300 group-hover:text-cyan-300 transition">@abdallahalhomsi ↗</div>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="group p-8 hover:bg-white/5 transition">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">LinkedIn</div>
              <div className="mt-2 text-sm text-neutral-300 group-hover:text-cyan-300 transition">Abdallah Al Homsi ↗</div>
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 font-mono text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Abdallah Al Homsi</span>
          <span>Designed & built from scratch · {PROFILE.location}</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ n, title }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="font-mono text-sm text-cyan-300/60">{n}</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase md:text-6xl">{title}</h2>
        <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(34,211,238,.4),transparent)" }} />
      </div>
    </Reveal>
  );
}

// ============================================================================
// CONTENT — edit everything here. The UI reads from these objects.
// Add a project: push an object onto PROJECTS.
// Mark a cert done: set done:true (adds a ✓ badge).
// ============================================================================

export const PROFILE = {
  name: "Abdallah Al Homsi",
  first: "Abdallah",
  last: "Al Homsi",
  role: "Software Engineer · ML",
  tagline:
    "Senior CS & Engineering student building full-stack products, mobile apps, and applied ML. Minor in Business Analytics.",
  // One sharp line for the hero — punchier than the tagline.
  hook: "I build full-stack products, mobile apps, and applied ML.",
  location: "Istanbul, TR · Amman, JO",
  email: "homsiabdullah4@gmail.com",
  github: "https://github.com/abdallahalhomsi",
  linkedin: "https://www.linkedin.com/in/abdallah-al-homsi-817a7834b/",
  photo: "/profile.jpg",
  photoPortrait: "/profile-portrait.jpg",
  cv: "/Abdallah_Al_Homsi_CV.pdf",
  university: "Sabancı University",
  degree: "BSc Computer Science & Engineering · Minor in Business Analytics",
};

export const STATS = [
  { value: 2027, suffix: "", label: "Expected Graduation", isYear: true },
  { value: 4, suffix: "+", label: "Shipped Projects" },
  { value: 50, suffix: "%", label: "Merit Scholarship" },
  { value: 12, suffix: "+", label: "Certifications" },
];

// Short, high-signal honors used as a row of "credibility chips".
export const HONORS = [
  "Dean's List · High Honors",
  "50% Merit Scholarship",
  "Recommendation Letter — TechChef",
];

export const PROJECTS = [
  {
    name: "SneakerNest",
    type: "Full-Stack E-Commerce Platform",
    period: "Jan – May 2025",
    role: "Scrum Master",
    blurb:
      "A scalable e-commerce system with secure REST APIs and a relational schema designed from scratch. Led sprint planning across the team.",
    stack: ["React", "Node.js", "Express", "MySQL", "Docker"],
    accent: "#22d3ee",
    accent2: "#6366f1",
  },
  {
    name: "SU Learning Companion",
    type: "Cross-Platform Mobile App",
    period: "Sep 2025 – Jan 2026",
    role: "Project Coordinator",
    blurb:
      "A productivity app helping students stay organized — course tracking, reminders, flashcards, and deadline management in one place.",
    stack: ["Flutter", "Dart", "Firebase"],
    accent: "#818cf8",
    accent2: "#22d3ee",
  },
  {
    name: "AI for Accessibility",
    type: "iOS Navigation App",
    period: "Jan – May 2025",
    role: "iOS / ML",
    blurb:
      "An iOS app for visually impaired users. Real-time object detection with audio feedback and gesture controls, running fully on-device.",
    stack: ["Swift", "CoreML", "YOLO", "Xcode"],
    accent: "#34d399",
    accent2: "#22d3ee",
  },
  {
    name: "Unemployment & Crime in the U.S.",
    type: "Data Science Research",
    period: "Feb – May 2025",
    role: "ML / Stats",
    blurb:
      "EDA, hypothesis testing, and statistical modeling in Python. Selected as a reference sample for future course offerings.",
    stack: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    accent: "#f59e0b",
    accent2: "#f472b6",
  },
];

export const EXPERIENCE = [
  {
    company: "EastNets",
    location: "Amman, Jordan",
    period: "Jun – Sep 2026",
    title: "Data Scientist Intern — AML Detection",
    tag: "Full-time · AML / ML",
    points: [
      "Working end-to-end on an Anti-Money Laundering detection model, from raw transaction data to a deployable classifier — the full A-Z build cycle.",
      "Owned data cleaning, preprocessing, and feature engineering in Python (Pandas, NumPy) on transactional datasets to surface suspicious-activity signals.",
      "Built and evaluated classification models for flagging high-risk transactions, iterating on precision/recall trade-offs that matter in a compliance setting.",
      "Working directly with a live financial compliance product, not a course project — model decisions have real regulatory weight.",
    ],
  },
  {
    company: "Freelance — AI Content & Software Development",
    location: "Remote",
    period: "Jun 2026 – Present",
    title: "AI Video, Social Content & App/Web Developer",
    tag: "Freelance · Content + Dev",
    points: [
      "Producing AI-generated video content, Instagram postcards, and carousels for business clients — currently running content for SIQ.Petra, a Jordanian company bringing local products to global markets.",
      "Full pipeline from concept to final export using Claude for scripting/direction and Higgsfield for AI video generation.",
      "Building and shipping websites, mobile apps, and chatbots for small business clients alongside the content work.",
      "Handles the full loop for clients who want both the product built and the marketing that sells it — deliverables are shipped assets used directly in client marketing, not concepts.",
    ],
  },
  {
    company: "TechChef — SAP Analytics Cloud Team",
    location: "Amman, Jordan",
    period: "Jun – Aug 2025",
    title: "Data Analyst & Custom Widget Developer Intern",
    tag: "Internship",
    points: [
      "Built custom SAC widgets using JavaScript, HTML, and CSS.",
      "Delivered two production-ready widgets independently and earned a recommendation letter.",
    ],
    doc: {
      label: "Recommendation Letter",
      href: "/certificates/recommendation-techchef.pdf",
    },
  },
];

// ============================================================================
// FREELANCE / CLIENT WORK — proof-of-work showcase for the content + dev side.
// ============================================================================
export const CLIENT_WORK = {
  client: "SIQ.Petra",
  clientBlurb:
    "A Jordanian company taking local Jordanian products to international markets. I run their AI-driven social content — video, postcards, and carousels — built to make the product feel premium enough for a global shelf.",
  video: {
    src: "/siq/siq-ai-video.mp4",
    poster: "/siq/siq-video-poster.jpg",
    label: "AI-generated product video · Claude + Higgsfield",
  },
  postcards: [
    { src: "/siq/postcard-01.jpg", alt: "SIQ.Petra Instagram postcard 1" },
    { src: "/siq/postcard-03.jpg", alt: "SIQ.Petra Instagram postcard 2" },
    { src: "/siq/postcard-05.jpg", alt: "SIQ.Petra Instagram postcard 3" },
    { src: "/siq/postcard-07.jpg", alt: "SIQ.Petra Instagram postcard 4" },
    { src: "/siq/postcard-09.jpg", alt: "SIQ.Petra Instagram postcard 5" },
    { src: "/siq/postcard-11.jpg", alt: "SIQ.Petra Instagram postcard 6" },
  ],
  offerings: [
    "AI video ads & reels (Claude + Higgsfield)",
    "Instagram postcards & carousels",
    "Websites & mobile apps",
    "Chatbots",
  ],
};

export const CERT_TRACKS = [
  {
    track: "AI Engineering",
    source: "Anthropic",
    hours: "30+ hrs",
    items: [
      { name: "Building with the Claude API", done: true, file: "/certificates/claude-api.pdf" },
      { name: "Claude with Amazon Bedrock", done: true, file: "/certificates/claude-bedrock.pdf" },
      { name: "Claude Code 101", done: true, file: "/certificates/claude-code-101.pdf" },
      { name: "Claude Code in Action", done: true, file: "/certificates/claude-code-in-action.pdf" },
      { name: "Introduction to MCP", done: true, file: "/certificates/mcp-intro.pdf" },
      { name: "MCP: Advanced Topics", done: true, file: "/certificates/mcp-advanced.pdf" },
      { name: "Introduction to Agent Skills", done: true, file: "/certificates/agent-skills.pdf" },
      { name: "Introduction to Subagents", done: true, file: "/certificates/subagents.pdf" },
      { name: "Claude 101", done: true, file: "/certificates/claude-101.pdf" },
      { name: "AI Fluency: Capabilities & Limitations", done: true, file: "/certificates/ai-capabilities.pdf" },
    ],
  },
  {
    track: "Web Development",
    source: "Bootcamps",
    hours: "",
    items: [
      { name: "Complete Web Development Bootcamp — Angela Yu", done: true, file: "/certificates/udemy-fullstack.pdf" },
      { name: "JavaScript Mastery — JS Mastery", done: true, file: "/certificates/js-mastery.pdf" },
    ],
  },
];

export const SKILLS = {
  Languages: ["Python", "C++", "JavaScript", "SQL", "Java", "Dart", "Swift"],
  "Frontend & Mobile": ["React.js", "HTML", "CSS", "Flutter", "Figma"],
  "Backend & Data": ["Node.js", "Express.js", "MySQL", "Firebase", "Docker"],
  "ML & Analytics": [
    "PyTorch",
    "scikit-learn",
    "YOLO",
    "Pandas",
    "NumPy",
    "SAP Analytics Cloud",
  ],
  Tooling: ["Git / GitHub", "JIRA", "Docker Compose"],
};

export const MARQUEE_WORDS = [
  "Full-Stack",
  "Mobile",
  "Machine Learning",
  "Data Science",
  "AI Engineering",
  "Cloud",
];

export const NAV = [
  "Work",
  "Experience",
  "Freelance",
  "Skills",
  "Certificates",
  "Contact",
];

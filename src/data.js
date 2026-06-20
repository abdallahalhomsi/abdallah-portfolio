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
  university: "Sabancı University",
  degree: "BSc Computer Science & Engineering · Minor in Business Analytics",
};

export const STATS = [
  { value: 2027, suffix: "", label: "Expected Graduation", isYear: true },
  { value: 4, suffix: "+", label: "Shipped Projects" },
  { value: 50, suffix: "%", label: "Merit Scholarship" },
  { value: 16, suffix: "+", label: "Certifications" },
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
    company: "TechChef — SAP Analytics Cloud Team",
    location: "Amman, Jordan",
    period: "Jun – Aug 2025",
    title: "Data Analyst & Custom Widget Developer Intern",
    points: [
      "Built custom SAC widgets using JavaScript, HTML, and CSS.",
      "Delivered two production-ready widgets independently and earned a recommendation letter.",
    ],
  },
];

export const CERT_TRACKS = [
  {
    track: "AI Engineering",
    source: "Anthropic",
    hours: "30+ hrs",
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
    track: "AI Fluency",
    source: "Anthropic",
    hours: "4+ hrs",
    items: [
      { name: "Framework & Foundations", done: false },
      { name: "AI Fluency for Students", done: false },
      { name: "AI Fluency for Small Businesses", done: false },
      { name: "Teaching AI Fluency", done: false },
    ],
  },
  {
    track: "Web Development",
    source: "Bootcamps",
    hours: "",
    items: [
      { name: "Complete Web Development Bootcamp — Angela Yu", done: true },
      { name: "JavaScript Mastery — JS Mastery", done: true },
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

export const NAV = ["Work", "Experience", "Skills", "Certificates", "Contact"];

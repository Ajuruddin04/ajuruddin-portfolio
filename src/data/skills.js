export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: "Code2",
    skills: [
      { name: "React", level: "UI Library", status: "Proficient", icon: "Atom" },
      { name: "JavaScript", level: "ES6+ / Modern JS", status: "Proficient", icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: "Web Standards", status: "Proficient", icon: "Layout" },
      { name: "Tailwind CSS", level: "Styling Framework", status: "Proficient", icon: "Palette" },
      { name: "Responsive UI", level: "Mobile-First", status: "Proficient", icon: "Smartphone" },
      { name: "State Management", level: "Context API / Redux", status: "Practicing", icon: "Layers" }
    ]
  },
  {
    title: "Backend & API Engineering",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Runtime Environment", status: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Web Framework", status: "Proficient", icon: "Cpu" },
      { name: "RESTful APIs", level: "API Design & Spec", status: "Proficient", icon: "Workflow" },
      { name: "Java", level: "OOP & Core Backend", status: "Proficient", icon: "Coffee" },
      { name: "Authentication", level: "JWT / Session", status: "Practicing", icon: "Lock" },
      { name: "JSON & Middleware", level: "Data Exchange", status: "Proficient", icon: "Code" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "NoSQL Database", status: "Practicing", icon: "Database" },
      // { name: "PostgreSQL", level: "Relational SQL", status: "Currently Learning", icon: "Database" },
      { name: "MySQL", level: "Relational DB", status: "Practicing", icon: "Database" },
      // { name: "Mongoose / Prisma", level: "ORM / ODM", status: "Practicing", icon: "Layers" }
    ]
  },
  {
    title: "DevOps & Cloud Deployment",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "Containerization", status: "Practicing", icon: "Box" },
      { name: "Docker Compose", level: "Multi-container Stack", status: "Practicing", icon: "Boxes" },
      { name: "Git & GitHub", level: "Version Control & Workflow", status: "Proficient", icon: "GitBranch" },
      { name: "AWS", level: "EC2 & S3 Basics", status: "Currently Learning", icon: "CloudSun" },
      { name: "Vercel / Netlify", level: "Web Hosting", status: "Proficient", icon: "Globe" },
      { name: "Linux", level: "Ubuntu / Bash", status: "Active User", icon: "Terminal" }
    ]
  },
  {
    title: "Development Tools & Environment",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: "Primary IDE", status: "Proficient", icon: "Laptop" },
      { name: "Postman", level: "API Testing & Docs", status: "Proficient", icon: "Send" },
      { name: "npm / Vite", level: "Build & Package Tools", status: "Proficient", icon: "Package" },
      { name: "Python", level: "Scripting & Data Basics", status: "Practicing", icon: "Code" }
    ]
  }
];

export const CURRENTLY_LEVELING_UP = [
  {
    topic: "Next.js & Full-Stack React Frameworks",
    icon: "⚡",
    badge: "Full-Stack",
    progress: 75,
    description: "Learning Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, and full-stack API routes."
  },
  // {
  //   topic: "PostgreSQL & Prisma ORM",
  //   icon: "🐘",
  //   badge: "Backend / DB",
  //   progress: 70,
  //   description: "Designing relational database schemas, complex SQL queries, indexes, and type-safe Prisma database access."
  // },
  {
    topic: "RESTful API Architecture & Authentication",
    icon: "🔐",
    badge: "API Design",
    progress: 85,
    description: "Building scalable Node.js/Express REST endpoints, JWT authentication middleware, rate limiting, and input validation."
  },
  {
    topic: "DSA & Algorithmic Problem Solving",
    icon: "🧠",
    badge: "Core CS",
    progress: 85,
    description: "Consistent practice in Data Structures, Algorithms, and Space/Time Complexity optimization in Java & JavaScript."
  },
  {
    topic: "Containerized Web Applications (Docker)",
    icon: "🐳",
    badge: "DevOps",
    progress: 80,
    description: "Containerizing React + Node.js + Database applications with multi-stage Dockerfiles and Docker Compose."
  },
  {
    topic: "Cloud Deployment & AWS Basics",
    icon: "☁️",
    badge: "Cloud",
    progress: 70,
    description: "Deploying full-stack web applications to AWS EC2, configuring S3 buckets, and setting up reverse proxies with Nginx."
  }
];


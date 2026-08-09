export const SKILL_CATEGORIES = [
  {
    title: "Development & Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Core", status: "Proficient", icon: "Coffee" },
      { name: "JavaScript", level: "ES6+", status: "Proficient", icon: "FileCode2" },
      { name: "React", level: "Frontend", status: "Practicing", icon: "Atom" },
      { name: "Node.js", level: "Backend", status: "Practicing", icon: "Server" },
      { name: "HTML5", level: "Web", status: "Proficient", icon: "Layout" },
      { name: "CSS3", level: "Styling", status: "Proficient", icon: "Palette" }
    ]
  },
  {
    title: "Cloud Computing",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "EC2, S3, IAM, VPC", status: "Currently Learning", icon: "CloudSun" },
      { name: "AWS CLI", level: "Automation", status: "Currently Learning", icon: "Terminal" },
      { name: "Cloud Architecture", level: "Core Concepts", status: "Currently Learning", icon: "Network" }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    icon: "Cpu",
    skills: [
      { name: "Docker", level: "Containerization", status: "Currently Learning", icon: "Box" },
      { name: "Docker Compose", level: "Multi-container", status: "Currently Learning", icon: "Boxes" },
      { name: "Git & GitHub", level: "Version Control", status: "Proficient", icon: "GitBranch" },
      { name: "CI/CD Pipelines", level: "Automation", status: "Currently Learning", icon: "Workflow" },
      { name: "Terraform", level: "IaC Basics", status: "Currently Learning", icon: "Layers" },
      { name: "Kubernetes", level: "Orchestration Intro", status: "Currently Learning", icon: "Ship" }
    ]
  },
  {
    title: "Systems & Networking",
    icon: "Terminal",
    skills: [
      { name: "Linux", level: "Ubuntu / Debian", status: "Active User", icon: "Terminal" },
      { name: "Bash / Shell", level: "Scripting", status: "Practicing", icon: "FileTerminal" },
      { name: "Networking", level: "DNS, HTTP, IP, Ports", status: "Fundamentals", icon: "Wifi" },
      { name: "SysAdmin", level: "Basic Admin", status: "Practicing", icon: "Sliders" }
    ]
  },
  {
    title: "Development Tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: "Primary IDE", status: "Proficient", icon: "Laptop" },
      { name: "GitHub", level: "Collaborate", status: "Proficient", icon: "GitCommit" },
      { name: "npm / Node Package Manager", level: "Build Tool", status: "Proficient", icon: "Package" },
      { name: "Python", level: "Scripting & Basics", status: "Practicing", icon: "Code" }
    ]
  }
];

export const CURRENTLY_LEVELING_UP = [
  {
    topic: "AWS & Cloud Infrastructure",
    icon: "☁️",
    badge: "Cloud",
    progress: 75,
    description: "Deep-diving into IAM policies, VPC subnetting, EC2 instance management, and S3 lifecycle rules."
  },
  {
    topic: "Docker & Containerization",
    icon: "🐳",
    badge: "DevOps",
    progress: 80,
    description: "Writing Dockerfiles, multi-stage builds, and orchestrating multi-container setups with Docker Compose."
  },
  {
    topic: "DevOps & CI/CD",
    icon: "⚙️",
    badge: "Automation",
    progress: 65,
    description: "Building automated test & deployment workflows using GitHub Actions and Linux shell scripts."
  },
  {
    topic: "Infrastructure as Code (Terraform)",
    icon: "🏗️",
    badge: "IaC",
    progress: 50,
    description: "Learning HCL syntax to declaratively provision AWS cloud resources predictably."
  },
  {
    topic: "Kubernetes Fundamentals",
    icon: "☸️",
    badge: "Orchestration",
    progress: 40,
    description: "Understanding pods, deployments, services, and local Minikube cluster management."
  },
  {
    topic: "DSA & Problem Solving",
    icon: "🧠",
    badge: "Core CS",
    progress: 85,
    description: "Consistent practice in Data Structures, Algorithms, and Space/Time Complexity optimization."
  },
  {
    topic: "Java Development",
    icon: "☕",
    badge: "Programming",
    progress: 80,
    description: "Object-oriented programming, Collections framework, and backend application fundamentals."
  }
];

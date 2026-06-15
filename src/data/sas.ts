export const personalInfo = {
name: "Harsh Gupta",
role: "Full Stack Engineer · Systems Thinker · Builder",

tagline: "Building systems that scale. Writing code that ships.",

email: "harsh30.work@gmail.com",
phone: "+91 9359177795",

location: "Punjab, India",

university: "Thapar Institute of Engineering & Technology",

bio: "Engineering student at Thapar Institute (Batch 2027) with experience across Full Stack Development, DevOps, Distributed Systems and AI. I enjoy building backend systems that don't break, APIs that don't leak and products that actually ship. Currently exploring large-scale system design, cloud infrastructure and AI-powered developer tooling.",

resumeLink: "/resume.pdf",

leetcode: "https://leetcode.com/u/hedgehoggg/",
};

export const socialLinks = {
github: "https://github.com/HARSHGUPTA3009",

linkedin:
"https://linkedin.com/in/harsh-gupta-200a47272",

codolio:
"https://codolio.com/profile/harshgupta",

leetcode:
"https://leetcode.com/u/hedgehoggg/",

email: "mailto.work@gmail.com",
};

export const achievements = [
"🏆 Smart India Hackathon 2025 National Runner-Up",
"🎓 University Scholarship worth ₹150,900",
"🔥 600+ DSA Problems Solved",
"👥 Mentored 300+ students through GDG",
"🚀 68+ Public GitHub Repositories",
"⚡ 500+ GitHub Contributions",
];

export const stats = [
{
value: "600+",
label: "DSA Problems",
},
{
value: "68+",
label: "Repositories",
},
{
value: "500+",
label: "Contributions",
},
{
value: "SIH",
label: "Runner-Up",
},
];

export const navLinks = [
{ label: "Projects", href: "#projects" },
{ label: "Experience", href: "#experience" },
{ label: "Skills", href: "#skills" },
{ label: "About", href: "#about" },
{ label: "Contact", href: "#contact" },
];
export const experience = [
{
company: "Xebia",

role: "DevOps Intern",

duration: "Jun 2026 – Jul 2026",

location: "Remote",

description: [
  "Containerized and deployed Xebia's internal LMS on AWS using Docker, reducing deployment setup time by 30%.",

  "Built multi-stage CI/CD pipelines using GitHub Actions, Docker and AWS EC2.",

  "Integrated CloudWatch monitoring and automated health-check based alerting.",

  "Improved deployment reliability and reduced release turnaround by 30%.",
],

},

{
company: "Hosmas",

role: "Full Stack Developer Intern",

duration: "Dec 2025 – Feb 2026",

location: "Remote",

description: [
  "Worked on an INR 1.5M funded hostel services platform using Django, PostgreSQL and Redis.",

  "Optimized PostgreSQL queries and implemented Redis caching to reduce latency.",

  "Designed and load-tested concurrent booking APIs.",

  "Dockerized services and streamlined CI/CD deployments on GCP.",
],

},
];
export const projects = [
{
id: "minicloud",
title: "MiniCloud",
description:
"Vercel-style PaaS enabling automated GitHub deployments using Docker, Redis, BullMQ and Cloudflare Tunnel.",

techStack: [
  "TypeScript",
  "Docker",
  "AWS",
  "Redis",
  "BullMQ",
  "PostgreSQL",
],

github:
  "https://github.com/HARSHGUPTA3009/minicloud",

live: "",

image: "/projects/minicloud.png",

highlights: [
  "Zero-touch deployments",
  "GitHub Actions CI/CD",
  "Cloudflare Tunnel HTTPS",
  "Microservice architecture",
],

},

{
id: "autojobflow",
title: "AutoJobFlow",

description:
  "AI-powered ATS scoring and job application automation platform.",

techStack: [
  "React",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Node.js",
  "WebSockets",
],

github:
  "https://github.com/HARSHGUPTA3009/job-flow-ai-automator",

live:
  "https://autojobflow.vercel.app",

image: "/projects/uniflow.png",

highlights: [
  "500+ concurrent ATS analyses",
  "WebSocket leaderboard",
  "Redis caching",
  "Async queue processing",
],

},

{
id: "alm",

title: "ALM Chatbot",

description:
  "Multimodal Audio Language Model built using Whisper, CLAP and LLaMA.",

techStack: [
  "Python",
  "Whisper",
  "LLaMA",
  "CLAP",
  "Docker",
],

github:
  "https://github.com/HARSHGUPTA3009/SIH25-NIRMAN-ALM",

live: "",

image: "/projects/sih.png",

highlights: [
  "Sub-10s inference",
  "40% efficiency improvement",
  "Multimodal reasoning",
  "SIH 2025 Runner-Up",
],

},

{
id: "hosmas",

title: "Hosmas",

description:
  "Production hostel services platform backed by PostgreSQL, Redis and Dockerized deployments on GCP.",

techStack: [
  "Django",
  "PostgreSQL",
  "Redis",
  "Docker",
  "GCP",
],

github: "",

live: "",

image: "/projects/hosmas.png",

highlights: [
  "₹1.5M funded platform",
  "Redis caching",
  "Concurrent booking APIs",
  "Docker CI/CD",
],

},

{
id: "hotel",

title: "Hotel Harsh Vilas",

description:
  "Production client website for a hospitality business.",

techStack: [
  "Next.js",
  "React",
  "Tailwind CSS",
],

github: "",

live:
  "https://hotelharshvilas.vercel.app/",

image: "/projects/hotel.png",

highlights: [
  "Client project",
  "Responsive design",
  "SEO optimized",
  "Production deployment",
],

},
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "Go", "SQL", "Bash"],
  Frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Mongoose"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Nginx"],
  Cloud: ["AWS (EC2, S3, RDS, VPC)", "Vercel", "Railway", "Cloudflare"],
  Tools: ["Git", "Linux", "BullMQ", "Socket.io", "Postman", "Figma"],
  "AI / ML": ["OpenAI API", "LangChain", "Prompt Engineering", "RAG", "Vector DBs"],
};



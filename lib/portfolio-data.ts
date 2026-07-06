import type { IconType } from "react-icons";
import {
  SiClaude,
  SiClickup,
  SiDocker,
  SiExpress,
  SiFigma,
  SiHermes,
  SiHono,
  SiJira,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPosthog,
  SiPrisma,
  SiReact,
  SiSentry,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const selectedWork = [
  {
    slug: "job-academy",
    company: "Job Academy",
    role: "Technical Lead",
    period: "Jun 2025 - Present",
    location: "Yangon, Myanmar (Remote)",
    summary:
      "Technical lead bridging business logic, system architecture, and hands-on feature development to deliver production-ready software.",
    projects: "Job Platform with AI Resume Builder, Online Learning Platform, Goodwill Advisory Website",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "ClickUp"],
    images: [
      {
        src: "/selected-work/ja.png",
        title: "Job Academy Platform",
        href: "https://www.jobacademyhub.com/",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "ClickUp"],
      },
      {
        src: "/selected-work/gw.png",
        title: "Goodwill Advisory Website",
        href: "https://goodwilladvisory.vercel.app/en",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    href: "https://www.jobacademyhub.com/",
  },
  {
    slug: "nexstack",
    company: "NexStack",
    role: "Full-Stack Developer",
    period: "Jan 2026 - Jun 2026",
    location: "Singapore (Remote)",
    summary:
      "Engineered scalable full-stack SaaS platforms and custom applications using modern web technologies. Built reusable frontend components, secure admin portals, and complex integrations including WhatsApp API automation and BIM-focused product experiences.",
    projects: "JHI Business Network, WhatsApp AI Integration, Vivata Revit Automation",
    stack: ["Next.js", "React", "TypeScript", "HonoJS", "Strapi", "PostgreSQL", "Prisma", "OAuth", "WebSocket", "Hermes", "Codex", "Block Storage", "Cloudinary", "GitNexus", "OpenSpec"],
    images: [
      {
        src: "/selected-work/jhi.png",
        title: "JHI Business Network",
        href: "https://web-jhi.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Strapi", "WebSocket", "Hermes", "Codex", "Cloudinary", "GitNexus", "OpenSpec"],
      },
      {
        src: "/selected-work/revit.png",
        title: "Vivata Revit Automation",
        href: "https://revit-web.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Strapi", "HonoJS", "WebSocket", "Hermes", "Codex", "Block Storage", "GitNexus", "OpenSpec"],
      },
    ],
    href: "https://web-jhi.singaporetestlab.com/",
  },
  {
    slug: "manifest-movies",
    company: "Manifest Movies",
    role: "AI-Assisted Software Engineer",
    period: "Jan 2026 - Apr 2026",
    location: "US (Remote)",
    summary:
      "Optimized customer-facing web platforms for an AI media product, aligning development updates with marketing strategy. Improved user engagement through email infrastructure, lifecycle automation, analytics, and monitoring workflows.",
    projects: "Manifest Movies",
    stack: ["Next.js", "React", "TypeScript", "Claude", "Klaviyo", "PostHog", "Sentry", "Playwright"],
    images: [
      {
        src: "/selected-work/manifest.png",
        title: "Manifest Movies",
        href: "https://manifestmovies.com/",
        stack: ["Next.js", "React", "TypeScript", "Claude", "Klaviyo", "PostHog", "Sentry"],
      },
    ],
    href: "https://manifestmovies.com/",
  },
  {
    slug: "village-link",
    company: "Village Link",
    role: "Junior Web Developer",
    period: "Apr 2024 - Feb 2025",
    location: "Yangon, Myanmar",
    summary:
      "Developed production-ready platform features for an agricultural technology network. Integrated third-party APIs, supported QA cycles, and authored product and technical documentation to improve delivery quality.",
    projects: "Htwet Toe Agricultural Social Platform",
    stack: ["Next.js", "React", "TypeScript", "Jira"],
    images: [
      {
        src: "/selected-work/htwat-toe.png",
        title: "Htwet Toe Agricultural Social Platform",
        href: "https://htwettoe.com/",
        stack: ["Next.js", "React", "TypeScript", "Jira"],
      },
    ],
    href: "https://htwettoe.com/",
  },
  {
    slug: "yoma",
    company: "Yoma Fleet",
    role: "Software Developer Intern",
    period: "2023",
    location: "Yangon, Myanmar",
    summary:
      "Developed onboarding and authentication flows and authored BRDs for the Yoma Fleet Careers intern project, while conducting QA testing for Yoma Plus across Agile teams.",
    projects: "Yoma Fleet Careers, Yoma Plus, Onboarding/Auth Flow, OTP Integration, QA Testing, BRD Documentation",
    stack: ["Next.js", "TypeScript", "GitHub", "ClickUp", "Odoo"],
    images: [
      {
        src: "/selected-work/yoma.png",
        title: "Yoma Fleet Careers Platform",
        href: "https://career.yomafleet.com/",
        stack: ["Next.js", "TypeScript", "ClickUp"],
      },
      {
        src: "/selected-work/yoma-plus.png",
        title: "Yoma Plus",
        href: "https://www.yomafleet.com/plus/",
        stack: ["QA Testing", "Agile", "BRD Documentation"],
      },
    ],
    href: "https://career.yomafleet.com/",
  },
];

export const techArsenal: {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}[] = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", description: "UI library" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", description: "React framework" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", description: "Typed JavaScript" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", description: "Styling framework" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]", description: "Backend runtime" },
  { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]", description: "API framework" },
  { name: "Express", icon: SiExpress, color: "text-white", description: "Backend framework" },
  { name: "Hono", icon: SiHono, color: "text-[#E36002]", description: "Web framework" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", description: "Relational database" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", description: "Document database" },
  { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]", description: "Database ORM" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", description: "Container platform" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", description: "Design tool" },
  { name: "ClickUp", icon: SiClickup, color: "text-[#7B68EE]", description: "Project management" },
  { name: "Jira", icon: SiJira, color: "text-[#0052CC]", description: "Issue tracking" },
  { name: "Sentry", icon: SiSentry, color: "text-[#FB4226]", description: "Error monitoring" },
  { name: "PostHog", icon: SiPosthog, color: "text-[#F54E00]", description: "Product analytics" },
  { name: "Claude", icon: SiClaude, color: "text-[#D97757]", description: "AI assistant" },
  { name: "Codex", icon: SiOpenai, color: "text-white", description: "AI coding agent" },
  { name: "Hermes", icon: SiHermes, color: "text-[#00AEEF]", description: "Developer tooling" },
];

export const heroTechSlots = techArsenal.slice(0, 5).map((item, index) => [
  item,
  techArsenal[index + 5] ?? item,
] as const);

export const education = [
  ["2016 - 2017", "Bachelor of Engineering (Electronic)"],
  ["2015 - 2016", "Bachelor of Technology (Electronic)"],
  ["2012 - 2014", "Associateship of Government Technical Institute (Electronic)"],
];

export const certifications = [
  {
    name: "Introduction to Software Engineering",
    issuer: "Coursera",
    credential: "SW3ZRVWYASIB",
    href: "https://coursera.org/share/3e5de2d37ee9fd9e9951048155962625",
  },
];

export const training = [
  "Diploma in Business English - MIB",
  "IELTS 4-Skills - MIB",
  "Professional Web Development - FairWay Technology (JS, PHP, Laravel, React, API)",
  "MERN Stack - WTC (PHP, JavaScript, Node.js, Next.js, MongoDB, Prisma)",
];

export const footerColumns = [
  {
    title: "Explore",
    links: [
      ["Work", "#work"],
      ["Stack", "#services"],
      ["Education", "#certifications"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["Email", "mailto:sushwesinw@gmail.com"],
      ["WhatsApp", "https://wa.me/6584078490"],
      ["LinkedIn", "https://www.linkedin.com/in/su-shwe-sin-win/"],
    ],
  },
  {
    title: "Profiles",
    links: [
      ["GitHub", "https://github.com/sushwesinwin"],
      ["daily.dev", "https://daily.dev/sssw"],
    ],
  },
];

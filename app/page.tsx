import { ArrowUpRight, Terminal } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiClickup,
  SiDocker,
  SiExpress,
  SiFigma,
  SiHono,
  SiJira,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPosthog,
  SiPrisma,
  SiReact,
  SiSentry,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import GlareHover from "@/components/GlareHover";
import { PortfolioNav } from "@/components/portfolio-nav";
import ScrollVelocity from "@/components/ScrollVelocity";
import { SelectedWorkSection } from "@/components/selected-work-section";
import TargetCursor from "@/components/TargetCursor";
import { Button } from "@/components/ui/button";

const pageContainer = "mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10";
const cursorTarget = "hero-cursor-target";
const cursorSelector = `.${cursorTarget}`;
const heroTitleClass = `${cursorTarget} hero-enter hero-enter-2 inline-block border border-dashed border-white/10 px-5 py-3 text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.86] tracking-normal`;
const statClass = `${cursorTarget} flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-2.5`;
const intro =
  "Full-Stack Developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.";
const techStack =
  "REACT NEXT.JS NODE.JS TYPESCRIPT NESTJS TAILWIND EXPRESS JS MONGODB PRISMA POSTGRESQL DOCKER";
const selectedWork = [
  {
    slug: "job-academy",
    company: "Job Academy",
    role: "Technical Lead",
    period: "Jun 2025 - Present",
    location: "Yangon, Myanmar (Remote)",
    summary:
      "Led development of a comprehensive job and online learning platform featuring an AI-powered resume builder. Translated stakeholder requirements into technical specifications and shipped responsive landing pages, authentication flows, and scalable core features from concept to production.",
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
    stack: ["Next.js", "React", "TypeScript", "HonoJS", "Strapi", "PostgreSQL", "Prisma", "OAuth"],
    images: [
      {
        src: "/selected-work/jhi.png",
        title: "JHI Business Network",
        href: "https://web-jhi.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Strapi"],
      },
      {
        src: "/selected-work/revit.png",
        title: "Vivata Revit Automation",
        href: "https://revit-web.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "JavaScript", "PostgreSQL", "Prisma", "Strapi", "HonoJS"],
      },
    ],
    href: "https://web-jhi.singaporetestlab.com/",
  },
  {
    slug: "manifest-movies",
    company: "Manifest Movies",
    role: "AI Developer",
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
      "Delivered full-cycle development for a core job application platform. Supported Agile workflows, QA testing, BRD documentation, and operational processes while coordinating across engineering, QA, product, and IT teams.",
    projects: "Job Application Platform, Onboarding/Auth Flow, OTP Integration, QA Testing, BRD Documentation",
    stack: ["Next.js", "TypeScript", "GitHub", "ClickUp", "Odoo"],
    images: [
      {
        src: "/selected-work/yoma.png",
        title: "Yoma Fleet Careers Platform",
        href: "https://career.yomafleet.com/",
        stack: ["Next.js", "TypeScript", "ClickUp"],
      },
    ],
    href: "https://career.yomafleet.com/",
  },
];
const techArsenal: {
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <GlareHover
        width="100%"
        height="100vh"
        background="transparent"
        borderColor="transparent"
        borderRadius="0"
        glareOpacity={0.12}
        glareSize={180}
      >
        <section className="w-full overflow-hidden">
          <TargetCursor targetSelector={cursorSelector} cursorColor="#ffffff" />
          <div className={`${pageContainer} relative flex min-h-screen flex-col pb-5 pt-28 sm:pt-24`}>
            <PortfolioNav />

            <div className="grid flex-1 w-full items-center gap-10 py-10 md:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="hero-enter hero-enter-1 mb-6 font-mono text-[clamp(1.25rem,3.5vw,2.75rem)] font-bold uppercase tracking-[0.22em] text-white/20">
                  Hello, I&apos;m
                </p>
                <h1 className={heroTitleClass}>
                  SU SHWE
                  <br />
                  SIN WIN
                </h1>
              </div>

              <div className="md:pt-11">
                <p className="hero-enter hero-enter-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  {intro}
                </p>
                <div className="hero-enter hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className={statClass}>
                    <Terminal className="size-4 text-white/50" />
                    <p className="text-xl font-semibold leading-none">3+</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-white/50">
                      Years Exp.
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none bg-white px-5 text-neutral-950 hover:bg-white/90"
                  >
                    <a href="#work" className={cursorTarget}>
                      VIEW PROJECTS
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 lg:inset-x-10">
              <ScrollVelocity
                texts={[techStack]}
                velocity={-52}
                numCopies={4}
                className="pr-8 font-mono text-xl text-white/10 [word-spacing:1.5rem] sm:text-3xl"
                parallaxClassName="py-3"
              />
            </div>
          </div>
        </section>
      </GlareHover>
      <SelectedWorkSection work={selectedWork} cursorTarget={cursorTarget} />
      <section id="services" className={`${pageContainer} py-20`}>
        <div>
          <div>
            <h2 className="font-mono text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-none tracking-[0.22em] text-white">
              Tech Arsenal
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {techArsenal.map(({ name, icon: Icon, color, description }) => (
            <div
              key={name}
              title={description}
              className={`${cursorTarget} group flex min-h-40 flex-col border-b border-r border-white/10 px-2 py-5 text-center text-white transition duration-300 hover:bg-white`}
            >
              <div className="flex flex-1 flex-col items-center justify-center">
                <span className={`flex size-10 items-center justify-center ${color} group-hover:text-neutral-950`}>
                  <Icon className="size-7" />
                </span>
                <span className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] group-hover:text-neutral-950">
                  {name}
                </span>
              </div>
              <span className="font-mono text-[9px] font-normal uppercase tracking-[0.18em] text-white/55 opacity-0 transition group-hover:text-neutral-950 group-hover:opacity-100">
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

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
    company: "Job Academy",
    role: "Technical Lead",
    period: "Jun 2025 - Present",
    location: "Yangon, Myanmar (Remote)",
    summary:
      "Led development of a job platform and online learning platform with AI-powered resume generation.",
    projects: "Job Platform, Online Learning Platform, AI Resume Builder",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AI/LLM", "Figma", "ClickUp"],
    href: "https://www.jobacademyhub.com/",
  },
  {
    company: "NexStack",
    role: "Full-Stack Developer",
    period: "Jan 2026 - Present",
    location: "Singapore (Remote)",
    summary:
      "Built client SaaS platforms including a business networking platform and WhatsApp AI integration.",
    projects: "JHI Business Network, WhatsApp AI Integration",
    stack: ["Next.js", "React", "TypeScript", "Hono", "Strapi", "PostgreSQL", "Prisma", "OAuth"],
    href: "https://web-jhi.singaporetestlab.com/",
  },
  {
    company: "Manifest Movies",
    role: "AI Developer",
    period: "Jan 2026 - Apr 2026",
    location: "US (Remote)",
    summary:
      "Built customer-facing web experiences, analytics, monitoring, and lifecycle marketing automation workflows.",
    projects: "Manifest Movies",
    stack: ["Next.js", "React", "TypeScript", "Klaviyo", "PostHog", "Sentry", "Playwright"],
    href: "https://manifestmovies.com/",
  },
  {
    company: "Village Link",
    role: "Junior Web Developer",
    period: "Apr 2024 - Feb 2025",
    location: "Yangon, Myanmar",
    summary:
      "Developed platform features, integrated APIs, supported QA, and wrote product and technical documentation.",
    projects: "Htwet Toe Agricultural Social Platform",
    stack: ["Next.js", "React", "TypeScript", "Jira"],
    href: "https://htwettoe.com/",
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
          <div className={`${pageContainer} relative flex min-h-screen flex-col py-5`}>
            <PortfolioNav />

            <div className="grid flex-1 w-full items-center gap-10 py-20 md:grid-cols-[1.15fr_0.85fr]">
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
      <section id="work" className={`${pageContainer} min-h-screen py-20`}>
        <h2 className="font-mono text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-none tracking-[0.22em] text-white">
          Selected Work
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {selectedWork.map((work) => (
            <article
              key={work.company}
              className="border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-[0_18px_60px_rgba(255,255,255,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{work.company}</h3>
                  <p className="mt-1 text-sm text-white/55">{work.location}</p>
                </div>
                {work.href && (
                  <a
                    aria-label={`Open ${work.company}`}
                    className="text-white/45 hover:text-white"
                    href={work.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                )}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <span className="font-medium text-white">{work.role}</span>
                <span className="text-white/25">/</span>
                <span className="text-white/55">{work.period}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">{work.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/35">
                {work.projects}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-2.5 py-1 text-xs text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
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

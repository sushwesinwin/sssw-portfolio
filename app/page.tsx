import { ArrowUpRight, Award } from "lucide-react";
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

import Ferrofluid from "@/components/Ferrofluid";
import GlareHover from "@/components/GlareHover";
import { PortfolioNav } from "@/components/portfolio-nav";
import { SelectedWorkSection } from "@/components/selected-work-section";
import TargetCursor from "@/components/TargetCursor";

const pageContainer = "mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10";
const cursorTarget = "hero-cursor-target";
const cursorSelector = `.${cursorTarget}`;
const heroTitleClass = `${cursorTarget} hero-enter hero-enter-2 inline-block text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-none tracking-normal text-white/85`;
const intro =
  "Full-Stack Developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.";
const selectedWork = [
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
    stack: ["Next.js", "React", "TypeScript", "HonoJS", "Strapi", "PostgreSQL", "Prisma", "OAuth", "Hermes", "Codex", "Block Storage", "Cloudinary", "GitNexus", "OpenSpec"],
    images: [
      {
        src: "/selected-work/jhi.png",
        title: "JHI Business Network",
        href: "https://web-jhi.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Strapi", "Hermes", "Codex", "Cloudinary", "GitNexus", "OpenSpec"],
      },
      {
        src: "/selected-work/revit.png",
        title: "Vivata Revit Automation",
        href: "https://revit-web.singaporetestlab.com/",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Strapi", "HonoJS", "Hermes", "Codex", "Block Storage", "GitNexus", "OpenSpec"],
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
const heroTechSlots = techArsenal.slice(0, 5).map((item, index) => [
  item,
  techArsenal[index + 5] ?? item,
] as const);
const certifications = [
  {
    name: "Introduction to Software Engineering",
    issuer: "Coursera",
    credential: "SW3ZRVWYASIB",
    href: "https://coursera.org/share/3e5de2d37ee9fd9e9951048155962625",
  },
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

            <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
              <div>
                <p className="hero-enter hero-enter-1 mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-white/30 sm:text-sm">
                  Hello, I&apos;m
                </p>
                <h1 className={heroTitleClass}>
                  SU SHWE SIN WIN
                </h1>
                <p className="hero-enter hero-enter-3 mx-auto mt-5 max-w-lg text-sm leading-6 text-white/52">
                  {intro}
                </p>
              </div>
            </div>
            <div className="scroll-line absolute bottom-24 left-1/2 h-20 w-px -translate-x-1/2 bg-white/15" />
            <div className="hero-logo-strip absolute inset-x-5 bottom-5 grid h-14 grid-cols-5 items-center gap-4 sm:inset-x-8 lg:inset-x-10">
              {heroTechSlots.map(([first, second], index) => {
                const FirstIcon = first.icon;
                const SecondIcon = second.icon;

                return (
                  <div
                    key={first.name}
                    className="hero-logo-slot relative flex h-full items-center justify-center"
                    style={{ "--delay": `${index * 0.16}s` } as React.CSSProperties}
                  >
                    <FirstIcon
                      aria-label={first.name}
                      className="hero-logo-face hero-logo-front absolute size-7 text-white/70 sm:size-9"
                    />
                    <SecondIcon
                      aria-label={second.name}
                      className="hero-logo-face hero-logo-back absolute size-7 text-white/70 sm:size-9"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </GlareHover>
      <SelectedWorkSection work={selectedWork} cursorTarget={cursorTarget} />
      <section id="services" className={`${pageContainer} py-20`}>
        <h2 className="text-center text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
          Tech Arsenal
        </h2>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {techArsenal.map(({ name, icon: Icon, color, description }) => (
            <div
              key={name}
              title={description}
              className={`${cursorTarget} group flex min-h-32 flex-col border-b border-r border-white/10 px-3 py-4 text-center text-white transition duration-300 hover:bg-white/[0.04]`}
            >
              <div className="flex flex-1 flex-col items-center justify-center">
                <span className={`flex size-9 items-center justify-center ${color}`}>
                  <Icon className="size-6" />
                </span>
                <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
                  {name}
                </span>
              </div>
              <span className="font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-white/35 opacity-0 transition group-hover:opacity-100">
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-35">
          <Ferrofluid
            className="h-full w-full"
            dpr={1}
            colors={["#ffffff", "#7c3aed", "#0A0A0A"]}
            speed={0.25}
            scale={1.9}
            turbulence={0.7}
            fluidity={0.08}
            opacity={0.45}
            mouseInteraction={false}
            mixBlendMode="screen"
          />
        </div>
        <div className={`${pageContainer} relative`}>
          <h2 className="text-center text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
            Certifications
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {certifications.map(({ name, issuer, credential, href }) => (
              <a
                key={credential}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`${cursorTarget} group flex min-h-72 flex-col justify-between border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md transition hover:bg-white/[0.04]`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      Certification
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center border border-white/10 text-white/55">
                      <Award className="size-4" />
                    </span>
                  </div>
                  <p className="mt-6 font-medium leading-6 text-white/85">{name}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {issuer}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Credential {credential}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/35 transition group-hover:text-white" />
                </div>
              </a>
            ))}
            <div className={`${cursorTarget} min-h-72 border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Education
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center border border-white/10 text-white/55">
                  <Award className="size-4" />
                </span>
              </div>
              <p className="mt-6 font-medium leading-6 text-white/85">
                Technological University (Thanlyin), Myanmar
              </p>
              <div className="mt-5 divide-y divide-white/10 border-t border-white/10">
                {[
                  ["2016 - 2017", "Bachelor of Engineering (Electronic)"],
                  ["2015 - 2016", "Bachelor of Technology (Electronic)"],
                  ["2012 - 2014", "Associateship of Government Technical Institute (Electronic)"],
                ].map(([period, degree]) => (
                  <div key={degree} className="py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{period}</p>
                    <p className="mt-1 text-sm leading-5 text-white/70">{degree}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${cursorTarget} min-h-72 border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Training
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center border border-white/10 text-white/55">
                  <Award className="size-4" />
                </span>
              </div>
              <p className="mt-6 font-medium leading-6 text-white/85">Additional Training</p>
              <div className="mt-5 divide-y divide-white/10 border-t border-white/10">
                {[
                  "Diploma in Business English - MIB",
                  "IELTS 4-Skills - MIB",
                  "Professional Web Development - FairWay Technology (JS, PHP, Laravel, React, API)",
                  "MERN Stack - WTC (PHP, JavaScript, Node.js, Next.js, MongoDB, Prisma)",
                ].map((item) => (
                  <p key={item} className="py-3 text-sm leading-6 text-white/65">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

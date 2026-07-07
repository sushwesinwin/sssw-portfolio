import { ArrowUpRight, Award, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import Ferrofluid from "@/components/Ferrofluid";
import GlareHover from "@/components/GlareHover";
import Lanyard from "@/components/Lanyard";
import { PortfolioNav } from "@/components/portfolio-nav";
import { SelectedWorkSection } from "@/components/selected-work-section";
import SpotlightCard from "@/components/SpotlightCard";
import TargetCursor from "@/components/TargetCursor";
import {
  certifications,
  education,
  footerColumns,
  heroTechSlots,
  selectedWork,
  techArsenal,
  training,
} from "@/lib/portfolio-data";

const pageContainer = "mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-10";
const cursorTarget = "hero-cursor-target";
const cursorSelector = `.${cursorTarget}`;

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
          <div className={`${pageContainer} relative flex min-h-screen flex-col pb-5 pt-24 sm:pt-24`}>
            <PortfolioNav />
            <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(4rem,18vw,13rem)] font-black leading-none tracking-normal text-white/[0.035]">
              DEVELOPER
            </p>
            <div className="absolute inset-0 z-20 flex items-center justify-center px-5 pt-16 text-center sm:pt-20 lg:text-left">
              <div className="mx-auto grid w-full max-w-5xl items-center gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                <div>
                  <p className="hero-enter hero-enter-1 mb-4 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-white/35 sm:text-sm">
                  Hello, I&apos;m
                  </p>
                  <h1 className="hero-enter hero-enter-2 text-[clamp(2.4rem,8vw,5rem)] font-black leading-[0.9] tracking-normal text-white/90">
                    Su Shwe Sin Win
                  </h1>
                  <p className="hero-enter hero-enter-3 mt-5 text-2xl font-semibold leading-tight text-white/85 sm:text-3xl">
                    Full Stack
                    <br />
                    <span className="text-white/35">Developer</span>
                  </p>
                  <p className="hero-enter hero-enter-4 mx-auto mt-6 max-w-xl text-base leading-7 text-white/52 sm:text-lg sm:leading-8 lg:mx-0">
                    Specialize in scalable SaaS applications, modern web technologies, and high-performance user experiences.
                  </p>
                </div>
                <div className="hero-enter hero-enter-1 h-[24rem] w-full min-w-0 sm:h-[30rem] lg:h-[34rem]">
                  <Lanyard
                    position={[0, 0, 22]}
                    gravity={[0, -35, 0]}
                    fov={22}
                    frontImage="/lanyard-card.png"
                    imageFit="contain"
                    lanyardWidth={0.9}
                    cardScale={3}
                  />
                </div>
                <h1 className="sr-only">Su Shwe Sin Win, Full-Stack Developer</h1>
              </div>
            </div>
            <div className="scroll-line absolute bottom-20 left-1/2 h-16 w-px -translate-x-1/2 bg-white/15 sm:bottom-24 sm:h-20" />
            <div className="hero-logo-strip absolute inset-x-4 bottom-5 grid h-12 grid-cols-5 items-center gap-3 sm:inset-x-8 sm:h-14 sm:gap-4 lg:inset-x-10">
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
      <section id="services" className={`${pageContainer} py-16 sm:py-20`}>
        <h2 className="text-center text-[clamp(1.6rem,8vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
          Tech <span className="text-white/35">Arsenal</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 border-l border-t border-white/10 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4">
          {techArsenal.map(({ name, icon: Icon, color, description }) => (
            <div
              key={name}
              title={description}
              className={`${cursorTarget} group flex min-h-28 flex-col border-b border-r border-white/10 px-3 py-4 text-center text-white transition duration-300 hover:bg-white/[0.04] sm:min-h-32`}
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

      <section id="certifications" className="relative overflow-hidden py-16 sm:py-20">
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
          <h2 className="text-center text-[clamp(1.6rem,8vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
            <span className="text-white/35">Education, Certifications &amp; </span>Training
          </h2>

          <div className="mt-8 grid items-stretch gap-4 sm:mt-10 md:grid-cols-3">
            <a
              href="https://tuthanlyin.edu.mm/department/electronic-engineering/#flipbook-df_979/3/"
              target="_blank"
              rel="noreferrer"
              className={`${cursorTarget} group flex min-h-0 flex-col border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md transition hover:bg-white/[0.04] sm:min-h-72`}
            >
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
              <div className="mt-5 flex-1 divide-y divide-white/10 border-t border-white/10">
                {education.map(([period, degree]) => (
                  <div key={degree} className="py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{period}</p>
                    <p className="mt-1 text-sm leading-5 text-white/70">{degree}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                  View Curriculum
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-white/35 transition group-hover:text-white" />
              </div>
            </a>
            {certifications.map(({ name, issuer, credential, href }) => (
              <a
                key={credential}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`${cursorTarget} group flex min-h-0 flex-col justify-between border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md transition hover:bg-white/[0.04] sm:min-h-72`}
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      Certification
                    </span>
                    <span className="flex size-9 shrink-0 items-center justify-center border border-white/10 text-white/55">
                      <Award className="size-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
                    <p className="font-medium leading-6 text-white/85">{name}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                      {issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Credential {credential}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white/35 transition group-hover:text-white" />
                </div>
              </a>
            ))}
            <div className={`${cursorTarget} flex min-h-0 flex-col border border-white/10 bg-[#0A0A0A]/70 p-5 text-white backdrop-blur-md sm:min-h-72`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Training
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center border border-white/10 text-white/55">
                  <Award className="size-4" />
                </span>
              </div>
              <p className="mt-6 font-medium leading-6 text-white/85">Additional Training</p>
              <div className="mt-5 flex-1 divide-y divide-white/10 border-t border-white/10">
                {training.map((item) => (
                  <p key={item} className="py-3 text-sm leading-6 text-white/65">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SpotlightCard
        as="footer"
        data-native-cursor
        spotlightColor="rgba(255, 255, 255, 0.08)"
        className="relative overflow-hidden bg-[#0A0A0A] px-4 pb-10 text-white sm:px-8 sm:pb-12 lg:px-10"
      >
        <div className="relative z-10 h-px w-full bg-white/10" />
        <p className="relative z-10 mx-auto mt-14 max-w-3xl text-center text-[clamp(1.6rem,8vw,3rem)] font-semibold leading-tight tracking-normal text-white/35 sm:mt-20">
          Enjoy <span className="text-white">exploring new tech</span> and <span className="text-white">keeping up with trends.</span>
        </p>
        <div className="relative z-10 mt-14 h-px w-full bg-white/10 sm:mt-20" />
        <div className="relative z-10 mx-auto mt-16 grid w-full max-w-5xl gap-10 text-center sm:mt-20 md:grid-cols-[1fr_2fr] md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-2xl font-black tracking-normal text-white">SU SHWE SIN WIN</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <span className="relative h-4 w-2 shrink-0" aria-hidden="true">
                <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full border border-white/75" />
                <span className="absolute left-1/2 top-1.5 h-2.5 w-px -translate-x-1/2 bg-white/75" />
              </span>
              Singapore
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
              {footerColumns.map(({ title, links }) => (
                <div key={title}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">{title}</p>
                  <div className="mt-4 grid gap-3">
                    {links.map(([label, href]) => (
                      <a key={label} href={href} className="cursor-pointer text-sm font-semibold text-white/65 transition hover:text-white">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mb-24 mt-10 flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center text-xs font-semibold text-white/45 sm:mb-32 sm:mt-14 sm:flex-row sm:justify-between sm:gap-6 sm:text-left lg:mb-40">
          <p className="max-w-[18rem] leading-5 sm:max-w-none">
            Built by SU SHWE SIN WIN. The source code is available on{" "}
            <a className="cursor-pointer text-sky-400 transition hover:text-sky-300" href="https://github.com/sushwesinwin/sssw-portfolio" target="_blank" rel="noreferrer">
              GitHub
            </a>.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a className="flex size-9 cursor-pointer items-center justify-center transition hover:text-white" href="mailto:sushwesinw@gmail.com" aria-label="Email">
              <Mail className="size-4" />
            </a>
            <a className="flex size-9 cursor-pointer items-center justify-center transition hover:text-white" href="https://github.com/sushwesinwin" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub className="size-4" />
            </a>
            <a className="flex size-9 cursor-pointer items-center justify-center transition hover:text-white" href="https://www.linkedin.com/in/su-shwe-sin-win/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="size-4" />
            </a>
          </div>
        </div>

        <p aria-hidden="true" className="absolute bottom-[-0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(3.2rem,13vw,14rem)] font-black leading-none tracking-normal text-white/[0.06]">
          PORTFOLIO
        </p>
      </SpotlightCard>
    </main>
  );
}

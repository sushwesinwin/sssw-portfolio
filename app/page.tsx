import { ArrowUpRight, Terminal } from "lucide-react";

import GlareHover from "@/components/GlareHover";
import { PortfolioNav } from "@/components/portfolio-nav";
import TargetCursor from "@/components/TargetCursor";
import { Button } from "@/components/ui/button";

const pageContainer = "mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10";
const cursorTarget = "hero-cursor-target";
const cursorSelector = `.${cursorTarget}`;
const heroTitleClass = `${cursorTarget} hero-enter hero-enter-2 inline-block border border-dashed border-white/10 px-5 py-3 text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.86] tracking-normal`;
const statClass = `${cursorTarget} flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-2.5`;
const intro =
  "Full-Stack Developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.";

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
        <section className={`${pageContainer} flex min-h-screen flex-col py-5`}>
          <TargetCursor targetSelector={cursorSelector} cursorColor="#ffffff" />
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
        </section>
      </GlareHover>
      <section id="work" className={`${pageContainer} min-h-screen py-20`} />
    </main>
  );
}

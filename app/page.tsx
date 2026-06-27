import { ArrowUpRight, Terminal } from "lucide-react";

import { PortfolioNav } from "@/components/portfolio-nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-800 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <PortfolioNav />

        <div className="grid flex-1 items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Hello, I&apos;m
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.06] tracking-normal">
              SU SHWE SIN WIN
            </h1>
          </div>

          <div className="md:pt-11">
            <p className="max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Full-Stack Developer specializing in scalable SaaS applications,
              modern web technologies, and high-performance user experiences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex w-fit items-center gap-3 rounded-full border border-white/25 bg-white/5 px-5 py-2.5">
                <Terminal className="size-4 text-white/50" />
                <p className="text-xl font-semibold leading-none">3+</p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">
                  Years Exp.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-5 text-neutral-950 hover:bg-white/90"
              >
                <a href="#work">
                  VIEW PROJECTS
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="work"
        className="mx-auto min-h-screen w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      />
    </main>
  );
}

"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Work = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  images: {
    src: string;
    title: string;
    href: string;
    stack?: string[];
  }[];
  href: string;
};

type Project = Work["images"][number];

export function SelectedWorkSection({
  work,
  cursorTarget,
}: {
  work: Work[];
  cursorTarget: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndexes, setActiveIndexes] = useState({ work: 0, project: 0 });
  const activeWorkIndex = activeIndexes.work;
  const activeProjectIndex = activeIndexes.project;
  const active = work[activeWorkIndex] ?? work[0];
  const activeProject: Project | undefined =
    active?.images[Math.min(activeProjectIndex, active.images.length - 1)] ??
    active?.images[0];
  const activeImageIndex = active ? Math.min(activeProjectIndex, active.images.length - 1) : 0;
  const activeProjectStack = activeProject?.stack ?? active?.stack ?? [];

  useEffect(() => {
    const updateActiveWork = () => {
      const section = sectionRef.current;
      if (!section || work.length < 2) return;

      const rect = section.getBoundingClientRect();
      const scrollRange = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollRange));
      section.style.setProperty("--work-progress", `${progress * 100}%`);
      const scaled = progress * work.length;
      const workIndex = Math.min(work.length - 1, Math.floor(scaled));
      const localProgress = Math.min(1, scaled - workIndex);
      const projectCount = work[workIndex].images.length;
      const projectIndex = Math.round(localProgress * (projectCount - 1));
      const next = { work: workIndex, project: projectIndex };

      setActiveIndexes((current) =>
        current.work === next.work && current.project === next.project
          ? current
          : next
      );
    };

    updateActiveWork();
    window.addEventListener("scroll", updateActiveWork, { passive: true });
    window.addEventListener("resize", updateActiveWork);

    return () => {
      window.removeEventListener("scroll", updateActiveWork);
      window.removeEventListener("resize", updateActiveWork);
    };
  }, [work]);

  if (!active || !activeProject) return null;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0A0A0A]"
      style={{ height: `${work.length * 100}svh` }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-5xl flex-col gap-4 px-4 pb-5 pt-24 sm:gap-7 sm:px-8 sm:pb-8 sm:pt-32 lg:gap-8 lg:px-10 lg:pb-10">
          <div className="shrink-0 text-center">
            <h2 className="text-[clamp(1.6rem,8vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
              3 Years of Experience
            </h2>
          </div>

          <div className="grid min-h-0 flex-1 items-center gap-4 sm:gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="relative h-[clamp(12rem,32svh,18rem)] overflow-hidden sm:h-[clamp(18rem,43svh,27rem)] lg:h-[clamp(22rem,52svh,31rem)] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]">
              {work.map((item, index) => {
                const offset = index - activeWorkIndex;
                const isActive = offset === 0;
                const canShowPreview = activeProjectIndex === 0 && Math.abs(offset) <= 1;

                return (
                  <div
                    key={item.slug}
                    className="absolute left-0 top-1/2 block w-full transition-all duration-700 ease-out"
                    style={{
                      opacity: isActive ? 1 : canShowPreview ? 0.18 : 0,
                      transform: `translateY(calc(-50% + ${offset * 24}rem))`,
                    }}
                  >
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                      {item.period}
                    </p>
                    <h3 className="text-xl font-semibold text-white sm:text-[1.7rem]">
                      {item.role}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/55">
                      {item.company} / {item.location}
                      <span className="size-1.5 rounded-full bg-red-500" />
                    </p>
                    {isActive && (
                      <p className="mt-4 max-w-lg text-sm leading-6 text-white/52 sm:mt-5">
                        {item.summary}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative pr-4 lg:pr-8">
              <div className="pointer-events-none absolute right-0 top-1/2 h-20 w-px -translate-y-1/2 bg-white/15">
                <span className="block h-[var(--work-progress,0%)] w-full bg-white/65" />
              </div>
              <div className="relative h-[clamp(9rem,25svh,13rem)] overflow-hidden bg-white/[0.02] p-2 shadow-[0_24px_70px_rgba(255,255,255,0.05)] sm:h-[clamp(12rem,30svh,18rem)] lg:h-[min(46svh,28rem)]">
                {active.images.map((project, index) => {
                  const isActiveProject = index === activeImageIndex;

                  return (
                    <a
                      key={project.href}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-hidden={!isActiveProject}
                      tabIndex={isActiveProject ? undefined : -1}
                      className={`${cursorTarget} group absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                        isActiveProject
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-6 opacity-0"
                      }`}
                    >
                      <span className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center border border-white/15 bg-black/30 text-white/0 opacity-0 backdrop-blur-sm transition group-hover:text-white group-hover:opacity-100">
                        <ArrowUpRight className="size-4" />
                      </span>
                      <Image
                        src={project.src}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 100vw"
                        className="object-contain object-center p-2"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 text-center sm:mt-5">
                <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                  {activeProject.title}
                </p>
              </div>
            </div>
          </div>

          <div className="flex max-h-20 shrink-0 flex-wrap items-center gap-2 overflow-hidden border-t border-white/10 pt-3 sm:max-h-none sm:pt-4">
            {activeProjectStack.map((stackItem) => (
              <span
                key={stackItem}
                className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/50"
              >
                {stackItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

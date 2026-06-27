import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function PortfolioNav() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-2.5rem)] max-w-7xl -translate-x-1/2 items-center justify-between gap-6 text-sm text-white/75 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href="#work" className="transition hover:text-white">
          Projects
        </a>
        <a href="#services" className="transition hover:text-white">
          Skills
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>

      <a href="#" className="text-lg font-bold tracking-[0.28em] text-white">
        sssw
      </a>

      <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
        <a
          href="https://github.com/sushwesinwin"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition hover:text-white"
        >
          <HugeiconsIcon icon={GithubIcon} size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/su-shwe-sin-win/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition hover:text-white"
        >
          <HugeiconsIcon icon={Linkedin02Icon} size={16} />
        </a>
      </div>
    </nav>
  );
}

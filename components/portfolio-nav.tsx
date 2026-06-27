"use client";

import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const navItems = [
  ["#work", "Projects"],
  ["#services", "Skills"],
  ["#contact", "Contact"],
];

export function PortfolioNav() {
  const [showMenubar, setShowMenubar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowMenubar(window.scrollY >= window.innerHeight * 0.8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-5 z-20 flex items-start justify-between text-sm">
      {showMenubar ? (
        <Menubar>
          {navItems.map(([href, label]) => (
            <MenubarMenu key={href}>
              <MenubarTrigger asChild>
                <a href={href}>{label}</a>
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </Menubar>
      ) : (
        <div className="flex flex-col gap-3 text-white/80">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
      )}

      <a href="#" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
        <span className="brand-cube" aria-hidden="true">
          <span className="brand-cube__face brand-cube__front">S</span>
          <span className="brand-cube__face brand-cube__right" />
          <span className="brand-cube__face brand-cube__top" />
        </span>
        <span className="text-lg font-bold tracking-[0.28em] sm:text-xl">
          sssw
        </span>
      </a>

      <div className="flex items-center gap-3 text-white/70">
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

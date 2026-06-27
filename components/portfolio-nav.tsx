"use client";

import { GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["#work", "Projects"],
  ["#services", "Skills"],
  ["#contact", "Contact"],
];

const socialItems = [
  {
    href: "https://github.com/sushwesinwin",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/su-shwe-sin-win/",
    label: "LinkedIn",
    icon: Linkedin02Icon,
  },
];

const linkButtonClass =
  "hero-cursor-target rounded-none border-white/10 bg-transparent px-5 text-white/75 hover:border-white/20 hover:bg-transparent hover:text-white";

const iconButtonClass =
  "hero-cursor-target h-8 w-12 rounded-none border-white/10 bg-white/[0.03] px-0 text-white/75 hover:border-white/20 hover:bg-white/[0.03] hover:text-white";

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 24);
      setHidden(currentY > lastY && currentY > 96);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-5 z-50 flex w-[calc(100%-2.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between gap-6 border border-transparent px-0 py-0 text-sm text-white/75 transition-all duration-300 sm:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)]",
        scrolled && "border-white/10 bg-[#0A0A0A]/80 px-4 py-3 backdrop-blur-md",
        hidden && "-translate-y-24 opacity-0"
      )}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {navItems.map(([href, label]) => (
          <Button
            key={href}
            asChild
            variant="outline"
            size="sm"
            className={linkButtonClass}
          >
            <a href={href}>{label}</a>
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
        {socialItems.map(({ href, label, icon }) => (
          <Button
            key={href}
            asChild
            variant="outline"
            size="sm"
            className={iconButtonClass}
          >
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <HugeiconsIcon icon={icon} size={16} />
            </a>
          </Button>
        ))}
      </div>
    </nav>
  );
}

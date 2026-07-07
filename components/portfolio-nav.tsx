"use client";

import {
  GithubIcon,
  Linkedin02Icon,
  TelegramIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Copy,
  Home,
  Layers,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiDailydotdev } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#", label: "Home", icon: Home },
  { href: "#work", label: "Experience", icon: BriefcaseBusiness },
  { href: "#services", label: "Stack", icon: Layers },
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
  {
    href: "https://daily.dev/sssw",
    label: "daily.dev",
    icon: null,
  },
];

const linkButtonClass =
  "hero-cursor-target group relative size-8 rounded-none border-transparent bg-transparent p-0 text-white/75 hover:border-transparent hover:bg-transparent hover:text-white sm:size-9";

const ctaButtonClass =
  "hero-cursor-target h-8 w-auto rounded-none border-transparent bg-white px-2 py-0 text-neutral-950 hover:border-transparent hover:bg-white/90 hover:text-neutral-950 sm:h-9 sm:px-3";

const resumeButtonClass =
  "hero-cursor-target h-8 w-auto rounded-none border-transparent bg-white/[0.08] px-2 py-0 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 hover:border-transparent hover:bg-white/[0.12] hover:text-white sm:h-9 sm:px-3 sm:text-[10px]";

const tooltipClass =
  "pointer-events-none absolute left-1/2 top-full z-50 mt-3 hidden -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg shadow-black/30 transition sm:block sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100";

const contactButtonClass =
  "hero-cursor-target flex items-center gap-3 border border-white/10 bg-white/[0.03] p-3 text-left transition hover:border-white/20 hover:bg-white/[0.06] sm:gap-4 sm:p-4";

const contactIconClass =
  "flex size-10 shrink-0 items-center justify-center bg-white/[0.06] text-white/70 sm:size-11";

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "sushwesinw@gmail.com";
  const phone = "+65 8407 8490";
  const telegram = "@sushwesinwin";
  const address = "Choa Chu Kang Drive, BLK687B#09-386, S682687";
  const mapUrl = "https://maps.app.goo.gl/Z5vVtD72bZUHWyH86";

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
        "fixed left-1/2 top-5 z-50 flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-1.5 rounded-[1.2rem] bg-white/[0.045] px-2 py-2 text-white/75 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 sm:top-7 sm:gap-3 sm:px-4 sm:py-2.5",
        scrolled && "bg-[#0A0A0A]/65",
        hidden && "-translate-y-24 opacity-0"
      )}
    >
      {navItems.map(({ href, label, icon: Icon }) => (
        <Button
          key={label}
          asChild
          variant="outline"
          size="sm"
          className={linkButtonClass}
        >
          <a href={href} aria-label={label}>
            <Icon className="size-4 stroke-[1.8] sm:size-5" />
            <span aria-hidden="true" className={tooltipClass}>{label}</span>
          </a>
        </Button>
      ))}

      <Button
        asChild
        variant="outline"
        size="sm"
        className={resumeButtonClass}
      >
        <a href="/Su_Shwe_Sin_Win_resume.pdf" download aria-label="Download resume">
          Resume
        </a>
      </Button>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={ctaButtonClass}
            aria-label="Contact"
          >
            <span className="hidden whitespace-nowrap font-mono text-[9px] font-semibold uppercase tracking-[0.12em] min-[390px]:inline sm:text-[10px]">
              Get in touch
            </span>
            <ArrowRight className="size-4 animate-[cta-arrow_1.2s_ease-in-out_infinite] stroke-[1.8] text-orange-500" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[calc(100svh-0.75rem)] overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-[#151515] p-0 text-white before:hidden sm:h-auto sm:min-h-[68svh] sm:max-h-[92svh]">
            <DrawerClose asChild>
              <button
                type="button"
                aria-label="Close contact drawer"
                onClick={() => setCopied(false)}
                className="hero-cursor-target absolute right-7 top-7 z-10 flex size-11 touch-manipulation items-center justify-center text-white/45 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 active:scale-95"
              >
                <X className="size-6 stroke-[1.5]" />
              </button>
            </DrawerClose>

            <div className="mx-auto grid h-full w-full max-w-5xl gap-3 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-8 sm:min-h-[68svh] sm:gap-5 sm:px-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8 lg:px-10 lg:py-16">
              <DrawerHeader className="items-start gap-3 p-0 text-left group-data-[vaul-drawer-direction=bottom]/drawer-content:text-left lg:gap-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/35">
                  Available for work
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <DrawerTitle className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
                    Get in touch
                  </DrawerTitle>
                  <DrawerDescription className="hidden max-w-md text-sm leading-6 text-white/50 sm:block sm:text-base sm:leading-7">
                    Open to full-stack roles, freelance builds, and product engineering work.
                  </DrawerDescription>
                  <div className="flex w-24 items-center justify-between pt-1">
                    {socialItems.map(({ href, label, icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="hero-cursor-target group relative flex size-6 items-center justify-center text-orange-500 transition hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                      >
                        {icon ? (
                          <HugeiconsIcon icon={icon} size={21} strokeWidth={1.35} />
                        ) : (
                          <SiDailydotdev className="size-4" />
                        )}
                        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap border border-white/10 bg-neutral-950 px-2.5 py-1.5 text-[10px] font-semibold text-white opacity-0 shadow-xl shadow-black/30 transition duration-150 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100">
                          {label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </DrawerHeader>

              <div className="grid gap-3">
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                  <a
                    href={`mailto:${email}`}
                    className="hero-cursor-target flex min-w-0 items-center gap-3 text-left transition hover:text-white/80 sm:gap-4"
                  >
                    <span className={contactIconClass}>
                      <Mail className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Email</span>
                      <span className="block break-all font-mono text-sm text-white/75">{email}</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    aria-label={copied ? "Email copied" : "Copy email"}
                    onClick={() => {
                      navigator.clipboard?.writeText(email);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1500);
                    }}
                    className="hero-cursor-target flex h-10 items-center justify-center gap-1.5 bg-white/[0.06] px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/[0.1] hover:text-white sm:h-11 sm:w-32 sm:gap-2 sm:px-4 sm:text-xs"
                  >
                    {copied ? (
                      "Copied"
                    ) : (
                      <>
                        <Copy className="size-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="grid gap-3">
                  <a href="tel:+6584078490" className={contactButtonClass}>
                    <span className={contactIconClass}>
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Phone</span>
                      <span className="block font-mono text-sm text-white/75">{phone}</span>
                    </span>
                  </a>
                  <a
                    href="https://wa.me/6584078490"
                    target="_blank"
                    rel="noreferrer"
                    className={contactButtonClass}
                  >
                    <span className={contactIconClass}>
                      <HugeiconsIcon icon={WhatsappIcon} size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">WhatsApp</span>
                      <span className="block text-sm text-white/75">Message directly</span>
                    </span>
                  </a>
                  <a
                    href="https://t.me/sushwesinwin"
                    target="_blank"
                    rel="noreferrer"
                    className={contactButtonClass}
                  >
                    <span className={contactIconClass}>
                      <HugeiconsIcon icon={TelegramIcon} size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Telegram</span>
                      <span className="block font-mono text-sm text-white/75">{telegram}</span>
                    </span>
                  </a>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={contactButtonClass}
                  >
                    <span className={contactIconClass}>
                      <MapPin className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Address</span>
                      <span className="block text-sm leading-6 text-white/65">{address}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </DrawerContent>
      </Drawer>
    </nav>
  );
}

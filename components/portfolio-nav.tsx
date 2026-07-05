"use client";

import {
  GithubIcon,
  Linkedin02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight, CodeXml, Copy, Mail, MapPin, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  ["#work", "WORK"],
  ["#services", "STACK"],
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
  "hero-cursor-target rounded-none border-transparent bg-transparent px-5 text-white/75 hover:border-transparent hover:bg-transparent hover:text-white";

const ctaButtonClass =
  "hero-cursor-target h-9 rounded-none border-transparent bg-white px-3 font-mono text-xs uppercase tracking-[0.14em] text-neutral-950 shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:border-transparent hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] sm:px-4";

const contactButtonClass =
  "hero-cursor-target flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-white/20 hover:bg-white/[0.06]";

const contactIconClass =
  "flex size-11 shrink-0 items-center justify-center bg-white/[0.06] text-white/70";

export function PortfolioNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "sushwesinw@gmail.com";
  const phone = "+65 8407 8490";
  const address = "Choa Chu Kang Drive, BLK687B#09-386, S682687";

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
        "fixed left-1/2 top-5 z-50 flex w-[calc(100%-2.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between gap-6 bg-[#0A0A0A]/30 px-3 py-2 text-sm text-white/75 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 sm:w-[calc(100%-4rem)] sm:px-4 lg:w-[calc(100%-5rem)]",
        scrolled && "bg-[#0A0A0A]/65",
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
        <Drawer direction="bottom">
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm" className={ctaButtonClass}>
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in touch</span>
              <ArrowRight className="size-4 animate-[cta-arrow_1.2s_ease-in-out_infinite] transition-transform group-hover/button:translate-x-0.5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="min-h-[68vh] p-0 text-white before:inset-x-0 before:top-0 before:rounded-b-none before:rounded-t-2xl before:border-white/10 before:bg-[#151515] sm:before:inset-x-0">
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

            <div className="mx-auto grid min-h-[68vh] w-full max-w-5xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8 lg:px-10 lg:py-16">
              <DrawerHeader className="items-start gap-4 p-0 text-left group-data-[vaul-drawer-direction=bottom]/drawer-content:text-left lg:gap-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/35">
                  Available for work
                </p>
                <div className="space-y-4">
                  <DrawerTitle className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-none tracking-normal text-white/85">
                    Get in touch
                  </DrawerTitle>
                  <DrawerDescription className="max-w-md text-base leading-7 text-white/50">
                    Open to full-stack roles, freelance builds, and product engineering work.
                  </DrawerDescription>
                </div>
              </DrawerHeader>

              <div className="grid gap-3">
                <div className="grid gap-3 border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <a
                    href={`mailto:${email}`}
                    className="hero-cursor-target flex min-w-0 items-center gap-4 text-left transition hover:text-white/80"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center bg-white text-neutral-950">
                      <Mail className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Email</span>
                      <span className="block break-all font-mono text-base text-white sm:text-xl">{email}</span>
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
                    className="hero-cursor-target flex h-11 items-center justify-center gap-2 bg-white/[0.06] px-4 font-mono text-xs uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/[0.1] hover:text-white sm:w-32"
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
                  <div className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 text-left">
                    <span className={contactIconClass}>
                      <MapPin className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/35">Address</span>
                      <span className="block text-sm leading-6 text-white/65">{address}</span>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {socialItems.map(({ href, label, icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="hero-cursor-target flex h-12 items-center justify-center border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                    >
                      {icon ? <HugeiconsIcon icon={icon} size={18} /> : <CodeXml className="size-[18px]" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

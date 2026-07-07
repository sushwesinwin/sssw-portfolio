import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PwaRegister } from "@/components/pwa-register";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ssswdev-portfolio.vercel.app"),
  title: "Su Shwe Sin Win | Full-Stack Developer",
  description:
    "Su Shwe Sin Win is a full-stack developer specializing in scalable SaaS applications, modern web platforms, API integrations, frontend engineering, backend systems, and production-ready user experiences.",
  authors: [{ name: "Su Shwe Sin Win" }],
  openGraph: {
    title: "Su Shwe Sin Win | Full-Stack Developer",
    description:
      "Full-stack developer specializing in scalable SaaS applications, modern web platforms, API integrations, frontend engineering, backend systems, and production-ready user experiences.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Su Shwe Sin Win | Full-Stack Developer",
    description:
      "Full-stack developer specializing in scalable SaaS applications, modern web platforms, API integrations, frontend engineering, backend systems, and production-ready user experiences.",
  },
  appleWebApp: {
    capable: true,
    title: "SSSW",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}

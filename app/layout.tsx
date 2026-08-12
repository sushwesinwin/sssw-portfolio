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

const extensionAttributeCleaner = `
(() => {
  const clean = (node) => {
    if (node.nodeType !== 1) return;
    for (const attr of [...node.attributes]) {
      if (attr.name.startsWith("bis_") || attr.name.startsWith("__processed_")) {
        node.removeAttribute(attr.name);
      }
    }
  };
  const cleanTree = (root) => {
    clean(root);
    root.querySelectorAll?.("*").forEach(clean);
  };
  cleanTree(document.documentElement);
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") clean(mutation.target);
      mutation.addedNodes.forEach(cleanTree);
    }
  });
  observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 10000);
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://ssswdev-portfolio.vercel.app"),
  title: "Su Shwe Sin Win | Full-Stack Developer",
  description:
    "Full-stack developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.",
  authors: [{ name: "Su Shwe Sin Win" }],
  openGraph: {
    title: "Su Shwe Sin Win | Full-Stack Developer",
    description:
      "Full-stack developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.",
    type: "website",
    images: [{ url: "/share-preview.png", width: 1, height: 1 }],
  },
  twitter: {
    card: "summary",
    title: "Su Shwe Sin Win | Full-Stack Developer",
    description:
      "Full-stack developer specializing in scalable SaaS applications, modern web technologies, and high-performance user experiences.",
    images: ["/share-preview.png"],
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
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: extensionAttributeCleaner }} />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}

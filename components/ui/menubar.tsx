"use client";

import * as React from "react";
import { Menubar as MenubarPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 text-white/80 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(
        "rounded-full px-3 py-1.5 text-sm outline-none transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
        className
      )}
      {...props}
    />
  );
}

export { Menubar, MenubarMenu, MenubarTrigger };

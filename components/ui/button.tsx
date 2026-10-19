import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#d4af37] text-slate-950 hover:bg-[#e4c65e]",
        outline: "border border-current/20 bg-transparent hover:bg-white/10",
        ghost: "hover:bg-white/10",
      },
      size: { default: "h-12 px-6", sm: "h-10 px-4", icon: "size-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--skyway-gold)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[var(--skyway-gold)] to-[var(--skyway-gold-end)] text-white shadow-lg shadow-[var(--skyway-gold)]/40 hover:from-[var(--skyway-gold-hover)] hover:to-[var(--skyway-gold-hover-end)]",
        outline: "border border-current/20 bg-transparent hover:bg-white/10",
        ghost: "hover:bg-white/10",
      },
      size: { default: "h-12 px-6", sm: "h-10 px-4", icon: "size-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

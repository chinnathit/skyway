"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#fleet", label: "Our cabins" },
  { href: "#destinations", label: "Destinations" },
  { href: "#book", label: "Plan a journey" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="sw-mobile-navigation">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav id={menuId} aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

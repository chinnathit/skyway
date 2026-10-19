"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./animated-text.css";

function getText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number")
        return String(child);
      if (!isValidElement<{ children?: ReactNode }>(child)) return "";
      return child.type === "br" ? " " : getText(child.props.children);
    })
    .join("");
}

// Split React text nodes, preserving emphasis, line breaks, and normal word wrapping.
function splitWords(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      return String(child)
        .split(/(\s+)/)
        .map((word, index) =>
          /^\s*$/.test(word) ? (
            word
          ) : (
            <span className="sw-word-mask" key={index}>
              <span className="sw-reveal-word">{word}</span>
            </span>
          ),
        );
    }
    if (!isValidElement<{ children?: ReactNode }>(child) || child.type === "br")
      return child;
    return cloneElement(child, { children: splitWords(child.props.children) });
  });
}

type RevealTextProps = {
  children: ReactNode;
  as?: "h2" | "h3" | "p";
  className?: string;
  id?: string;
  effect?: "reveal" | "read";
  delay?: number;
};

export function RevealText({
  children,
  as = "h2",
  className,
  id,
  effect = "reveal",
  delay = 0,
}: RevealTextProps) {
  const rootRef = useRef<HTMLElement>(null);
  const text = getText(children);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const words = rootRef.current?.querySelectorAll(".sw-reveal-word");
        if (!words?.length) return;

        if (effect === "read") {
          gsap.fromTo(
            words,
            { opacity: 0.25 },
            {
              opacity: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 88%",
                end: "bottom 60%",
                scrub: 0.4,
              },
            },
          );
        } else {
          gsap.fromTo(
            words,
            { yPercent: 110, rotate: 3, opacity: 0 },
            {
              yPercent: 0,
              rotate: 0,
              opacity: 1,
              duration: 0.85,
              stagger: as === "p" ? 0.018 : 0.065,
              ease: "power3.out",
              delay,
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 90%",
                once: true,
              },
            },
          );
        }
      });
      return () => media.revert();
    },
    {
      scope: rootRef,
      dependencies: [text, effect, delay, as],
      revertOnUpdate: true,
    },
  );

  const Tag = as;
  return (
    <Tag
      ref={(element: HTMLElement | null) => {
        rootRef.current = element;
      }}
      id={id}
      className={className}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{splitWords(children)}</span>
    </Tag>
  );
}

export function RollingText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`sw-rolling-text ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((letter, index) => (
          <span className="sw-rolling-letter" key={index}>
            <span
              className="sw-rolling-track"
              style={{ "--letter-index": index } as CSSProperties}
            >
              <span>{letter === " " ? "\u00a0" : letter}</span>
              <span className="sw-rolling-copy">
                {letter === " " ? "\u00a0" : letter}
              </span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

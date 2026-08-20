"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  stagger?: boolean;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  stagger = false,
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const style = { animationDelay: `${delayMs}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      style={stagger ? style : undefined}
      className={`${stagger ? "reveal-stagger" : "reveal-section"} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
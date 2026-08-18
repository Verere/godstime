"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ImpactMetric } from "@/types";

type ImpactStatsProps = {
  metrics: ImpactMetric[];
};

export default function ImpactStats({ metrics }: ImpactStatsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const targets = useMemo(() => metrics.map((metric) => metric.value), [metrics]);

  useEffect(() => {
    if (!started) {
      return;
    }

    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(targets.map((target) => Math.floor(target * progress)));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, targets]);

  return (
    <section ref={ref} className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#166534] p-6 text-white sm:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Impact Statistics</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="rounded-2xl border border-emerald-300/35 bg-white/10 p-4">
              <p className="text-3xl font-bold">
                {counts[index]}
                {metric.suffix ?? ""}
              </p>
              <p className="mt-1 text-sm text-emerald-100">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

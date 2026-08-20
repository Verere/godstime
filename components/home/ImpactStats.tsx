"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ImpactMetric } from "@/types";
import { publicContent } from "@/lib/public-content";

type ImpactStatsProps = {
  metrics: ImpactMetric[];
};

export default function ImpactStats({ metrics }: ImpactStatsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>([]);

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

  const safeMetrics = useMemo(
    () => metrics.filter((metric) => Number.isFinite(metric.value) && metric.value > 0),
    [metrics]
  );

  const targets = useMemo(() => safeMetrics.map((metric) => metric.value), [safeMetrics]);

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
    <section ref={ref} className="px-4 py-18 sm:px-6">
      <div className="section-shell relative overflow-hidden rounded-[2rem] bg-[#153d28] p-7 text-[#f6efde] sm:p-12">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#d8a13d]/20 blur-2xl" />
        <div className="absolute -bottom-16 left-16 h-44 w-44 rounded-full bg-[#295d44]/45 blur-2xl" />
        <p className="section-label !text-[#c9ddb8]">Impact</p>
        <h2 className="editorial-title mt-2 text-[#f9f3e6]">Our Current Impact Focus</h2>
        {safeMetrics.length ? (
          <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safeMetrics.map((metric, index) => (
              <div key={metric.label} className="rounded-2xl border border-[#8eb19a]/45 bg-[#204d35]/60 p-5">
                <p className="font-serif text-5xl leading-none text-[#f8f1e3]">
                  {counts[index] ?? 0}
                  {metric.suffix ?? ""}
                </p>
                <p className="mt-2 text-sm text-[#dbe9d8]">{metric.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="mt-3 max-w-3xl text-sm text-[#dbe8d9]">
              Verified numerical impact figures are being prepared for publication.
            </p>
            <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {publicContent.qualitativeImpactAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-[#8eb19a]/45 bg-[#204d35]/60 p-5">
                  <p className="text-xl font-semibold">{area}</p>
                  <p className="mt-1 text-sm text-[#dbe8d9]">Sustained support for children and caregivers.</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#c9ddb8]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
          </>
        )}
      </div>
    </section>
  );
}

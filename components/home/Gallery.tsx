"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/types";

type GalleryProps = {
  items: GalleryItem[];
  previewCount?: number;
  showViewAllLink?: boolean;
};

export default function Gallery({ items, previewCount, showViewAllLink = false }: GalleryProps) {
  const published = useMemo(() => items.filter((item) => item.isPublished), [items]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [brokenImageIds, setBrokenImageIds] = useState<string[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const categories = useMemo(() => {
    const values = new Set<string>();
    published.forEach((item) => {
      if (item.category) {
        values.add(item.category);
      }
    });

    return ["All", ...Array.from(values)];
  }, [published]);

  const filtered = useMemo(() => {
    const base = activeCategory === "All"
      ? published
      : published.filter((item) => item.category === activeCategory);

    return typeof previewCount === "number" ? base.slice(0, previewCount) : base;
  }, [activeCategory, previewCount, published]);

  const active = activeIndex === null ? null : filtered[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + filtered.length) % filtered.length));
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % filtered.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filtered.length]);

  return (
    <section id="gallery" className="bg-[#f5f8f2] px-4 py-18 sm:px-6">
      <div className="section-shell">
        <p className="section-label">Photography & Stories</p>
        <h2 className="editorial-title mt-2 text-[#17201A]">Gallery</h2>
        <p className="mt-2 max-w-2xl text-[#2f3d34]">
          Moments from activities and daily life. Personal identifying details of children are intentionally limited.
        </p>

        {categories.length > 1 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(null);
                }}
                className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  activeCategory === category
                    ? "bg-[#18492f] text-white"
                    : "bg-white text-[#18492f] hover:bg-[#ecfdf3]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#e5eee3] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image: ${item.title}`}
            >
              {brokenImageIds.includes(item.id) ? (
                <div className="flex h-full items-center justify-center p-3 text-center text-xs font-medium text-[#2f3d34]">
                  Image unavailable
                </div>
              ) : (
                <Image
                  src={item.imageUrl}
                  alt={item.description ? `${item.title}. ${item.description}` : item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  onError={() => setBrokenImageIds((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]))}
                />
              )}
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-[#0d1b13]/75 via-[#0d1b13]/14 to-transparent" />
              <div className="gallery-caption absolute inset-x-0 bottom-0 p-4 text-left text-white">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#f5e7c2]">
                  {item.category ?? "Gallery"}
                </p>
                <p className="mt-1 text-sm font-semibold">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        {showViewAllLink ? (
          <div className="mt-8">
            <Link href="/gallery" className="btn-base btn-secondary">
              View Full Gallery
            </Link>
          </div>
        ) : null}
      </div>

      {active ? (
        <div className="page-transition fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-[0_30px_70px_-35px_rgba(0,0,0,0.65)]">
            <div className="relative h-[min(65dvh,560px)] w-full bg-[#17201A]">
              <Image
                src={active.imageUrl}
                alt={active.description ? `${active.title}. ${active.description}` : active.title}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain"
              />
            </div>
            <div className="p-4">
              <h3 id="gallery-dialog-title" className="font-semibold text-[#17201A]">{active.title}</h3>
              {active.description ? <p className="mt-1 text-sm text-[#2f3d34]">{active.description}</p> : null}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              ref={closeButtonRef}
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#17201A] shadow-md transition hover:scale-105"
              aria-label="Close image modal"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + filtered.length) % filtered.length))}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#17201A] shadow-md transition hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % filtered.length))}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#17201A] shadow-md transition hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

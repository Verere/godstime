"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/types";

type GalleryProps = {
  items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  const published = useMemo(() => items.filter((item) => item.isPublished), [items]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex === null ? null : published[activeIndex];

  return (
    <section id="gallery" className="bg-[#F0FDF4] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Gallery</h2>
        <div className="mt-8 columns-2 gap-3 space-y-3 md:columns-3">
          {published.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="group relative block w-full overflow-hidden rounded-2xl"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image: ${item.title}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1200}
                height={900}
                className="h-auto w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white">
            <Image
              src={active.imageUrl}
              alt={active.title}
              width={1600}
              height={1000}
              className="h-[320px] w-full object-cover sm:h-[560px]"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[#17201A]">{active.title}</h3>
              {active.description ? <p className="mt-1 text-sm text-[#2f3d34]">{active.description}</p> : null}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#17201A]"
              aria-label="Close image modal"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + published.length) % published.length))}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#17201A]"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % published.length))}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#17201A]"
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

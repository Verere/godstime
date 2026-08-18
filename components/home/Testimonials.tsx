"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/types";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const published = testimonials.filter((item) => item.isPublished);
  const [index, setIndex] = useState(0);

  if (!published.length) {
    return null;
  }

  const active = published[index];

  return (
    <section className="bg-[#F0FDF4] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Testimonials</h2>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <Quote className="mx-auto h-8 w-8 text-[#16A34A]" />
          <p className="mt-4 text-lg text-[#17201A]">&ldquo;{active.quote}&rdquo;</p>
          <p className="mt-4 font-semibold text-[#166534]">{active.name}</p>
          <p className="text-sm text-[#2f3d34]">{active.role}</p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              className="rounded-full border border-[#bbf7d0] p-2 text-[#166534]"
              aria-label="Previous testimonial"
              onClick={() => setIndex((prev) => (prev - 1 + published.length) % published.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded-full border border-[#bbf7d0] p-2 text-[#166534]"
              aria-label="Next testimonial"
              onClick={() => setIndex((prev) => (prev + 1) % published.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

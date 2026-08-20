import { Eye, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function MissionVision() {
  return (
    <section className="px-4 py-18 sm:px-6">
      <Reveal className="section-shell">
        <div className="mb-8">
          <p className="section-label">Direction</p>
          <h2 className="editorial-title mt-2 text-[#17201A]">Mission and Vision</h2>
          <p className="mt-2 text-[#2f3d34]">Our direction is rooted in long-term care, opportunity and dignity for every child.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal stagger delayMs={0}>
            <article className="surface-card p-7">
              <Target className="mb-3 h-8 w-8 text-[#16A34A] transition duration-300 group-hover:scale-105" />
              <h3 className="text-2xl font-semibold text-[#17201A]">Mission</h3>
              <p className="mt-2 text-[#2f3d34]">
                To provide children with love, care, education and opportunities that empower them to build meaningful and independent lives.
              </p>
            </article>
          </Reveal>
          <Reveal stagger delayMs={120}>
            <article className="surface-card border-[#eadfc3] bg-[#fff9ef] p-7">
              <Eye className="mb-3 h-8 w-8 text-[#b7633a] transition duration-300 group-hover:scale-105" />
              <h3 className="text-2xl font-semibold text-[#17201A]">Vision</h3>
              <p className="mt-2 text-[#2f3d34]">
                A world where every child has the opportunity to grow in a safe, loving and supportive environment.
              </p>
            </article>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

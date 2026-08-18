import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Mission and Vision</h2>
          <p className="mt-2 text-[#2f3d34]">Our direction is rooted in long-term care, opportunity and dignity for every child.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#dcfce7] bg-white p-6 shadow-sm">
            <Target className="mb-3 h-8 w-8 text-[#16A34A]" />
            <h3 className="text-xl font-semibold text-[#17201A]">Mission</h3>
            <p className="mt-2 text-[#2f3d34]">
              To provide children with love, care, education and opportunities that empower them to build meaningful and independent lives.
            </p>
          </article>
          <article className="rounded-3xl border border-[#fde68a] bg-[#fffdf2] p-6 shadow-sm">
            <Eye className="mb-3 h-8 w-8 text-[#d97706]" />
            <h3 className="text-xl font-semibold text-[#17201A]">Vision</h3>
            <p className="mt-2 text-[#2f3d34]">
              A world where every child has the opportunity to grow in a safe, loving and supportive environment.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

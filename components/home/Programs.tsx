import type { Program } from "@/types";
import ProgramIcon from "@/components/home/ProgramIcon";

type ProgramsProps = {
  programs: Program[];
};

export default function Programs({ programs }: ProgramsProps) {
  return (
    <section id="programs" className="bg-[#F0FDF4] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">What We Do</h2>
        <p className="mt-2 max-w-2xl text-[#2f3d34]">Helping Children Today. Building Futures Tomorrow.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.filter((program) => program.isPublished).map((program) => (
            <article key={program.id} className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <ProgramIcon icon={program.icon} />
              <h3 className="mt-3 text-lg font-semibold text-[#17201A]">{program.title}</h3>
              <p className="mt-2 text-sm text-[#2f3d34]">{program.description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-[#166534] hover:text-[#15803d]">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

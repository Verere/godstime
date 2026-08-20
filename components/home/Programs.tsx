import Link from "next/link";
import type { Program } from "@/types";
import ProgramIcon from "@/components/home/ProgramIcon";
import Reveal from "@/components/ui/Reveal";

type ProgramsProps = {
  programs: Program[];
};

export default function Programs({ programs }: ProgramsProps) {
  const published = programs.filter((program) => program.isPublished);

  return (
    <section id="programs" className="bg-[#fbf6ec] px-4 py-18 sm:px-6">
      <Reveal className="section-shell">
        <p className="section-label">Programs</p>
        <h2 className="editorial-title mt-2 text-[#17201A]">What We Do</h2>
        <p className="mt-3 max-w-2xl text-[#2f3d34]">
          Our programs combine immediate care with long-term development so children can thrive today and prepare for tomorrow.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((program, index) => (
            <Reveal key={program.id} stagger delayMs={index * 80}>
              <article className="surface-card group p-6 transition duration-300 hover:-translate-y-1">
                <p className="text-xs font-bold tracking-[0.18em] text-[#7b8f82]">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#1f7a46]">Program Area</p>
                <div className="transition duration-300 group-hover:translate-y-[-2px] group-hover:scale-[1.04]">
                  <ProgramIcon icon={program.icon} />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[#17201A]">{program.title}</h3>
                <p className="mt-3 text-[0.98rem] text-[#2f3d34]">{program.description}</p>
                <Link
                  href="/get-involved"
                  className="mt-5 inline-block text-sm font-semibold text-[#18492f] underline decoration-[#9fc5a5] underline-offset-4 transition group-hover:decoration-[#18492f]"
                >
                  Support This Work
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

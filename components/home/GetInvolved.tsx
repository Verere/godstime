import Link from "next/link";
import { HandCoins, Handshake, HelpingHand, PackageOpen } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const options = [
  {
    title: "Donate",
    description: "Help provide food, education, healthcare and daily essentials.",
    icon: HandCoins,
    cta: "Donate Today",
    href: "/donate",
  },
  {
    title: "Volunteer",
    description: "Share your time, skills and experience with children in need.",
    icon: HelpingHand,
    cta: "Join Volunteers",
    href: "/get-involved#volunteer",
  },
  {
    title: "Sponsor",
    description: "Support a specific program or area of need with focused impact.",
    icon: PackageOpen,
    cta: "Become a Sponsor",
    href: "/get-involved#sponsor",
  },
  {
    title: "Partner",
    description: "Create long-term impact through organizational collaboration.",
    icon: Handshake,
    cta: "Partner With Us",
    href: "/get-involved#partner",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="px-4 py-18 sm:px-6">
      <Reveal className="section-shell">
        <p className="section-label">Take Action</p>
        <h2 className="editorial-title mt-2 text-[#17201A]">How You Can Help</h2>
        <p className="mt-2 max-w-2xl text-[#2f3d34]">
          Choose the support path that matches your capacity. Every action below strengthens care for children.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {options.map(({ title, description, icon: Icon, cta, href }, index) => (
            <article key={title} className="surface-card group p-6 transition duration-300 hover:-translate-y-1">
              <p className="text-xs font-bold tracking-[0.18em] text-[#7b8f82]">{String(index + 1).padStart(2, "0")}</p>
              <Icon className="mt-3 h-6 w-6 text-[#1f7a46]" />
              <h3 className="mt-4 text-xl font-semibold text-[#17201A]">{title}</h3>
              <p className="mt-2 text-sm text-[#2f3d34]">{description}</p>
              <Link href={href} className="mt-4 inline-block text-sm font-semibold text-[#18492f] underline decoration-[#9fc5a5] underline-offset-4 group-hover:decoration-[#18492f]">
                {cta}
              </Link>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

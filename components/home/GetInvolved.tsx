import { HandCoins, Handshake, HelpingHand, PackageOpen } from "lucide-react";

const options = [
  {
    title: "Donate",
    description: "Help provide food, education, healthcare and daily essentials.",
    icon: HandCoins,
    cta: "Donate Today",
  },
  {
    title: "Volunteer",
    description: "Share your time, skills and experience with children in need.",
    icon: HelpingHand,
    cta: "Join Volunteers",
  },
  {
    title: "Sponsor",
    description: "Support a specific program or area of need with focused impact.",
    icon: PackageOpen,
    cta: "Become a Sponsor",
  },
  {
    title: "Partner",
    description: "Create long-term impact through organizational collaboration.",
    icon: Handshake,
    cta: "Partner With Us",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">How You Can Help</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {options.map(({ title, description, icon: Icon, cta }) => (
            <article key={title} className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-[#16A34A]" />
              <h3 className="mt-3 text-lg font-semibold text-[#17201A]">{title}</h3>
              <p className="mt-2 text-sm text-[#2f3d34]">{description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-[#166534]">
                {cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

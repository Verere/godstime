import Image from "next/image";
import { Heart, Apple, BookOpen, HandHeart, ShieldCheck, Stethoscope } from "lucide-react";

const highlights = [
  { label: "Safe environment", icon: ShieldCheck },
  { label: "Education", icon: BookOpen },
  { label: "Healthcare", icon: Stethoscope },
  { label: "Nutrition", icon: Apple },
  { label: "Emotional support", icon: Heart },
  { label: "Personal development", icon: HandHeart },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F0FDF4] px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="relative">
          <Image
            src="/gdst.png"
            alt="Care team supporting children"
            width={1400}
            height={1000}
            className="h-[360px] w-full rounded-3xl object-cover shadow-lg sm:h-[460px]"
          />
          <div className="absolute -right-3 -top-3 rounded-2xl bg-white p-4 shadow-lg sm:-right-6 sm:top-6">
            <p className="text-xs uppercase tracking-wide text-[#16A34A]">Impact</p>
            <p className="text-xl font-bold text-[#166534]">8+ years</p>
            <p className="text-sm text-[#2f3d34]">of consistent child support</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Creating a Place to Call Home</h2>
          <p className="mt-4 text-[#2f3d34]">
            We are committed to nurturing vulnerable children with dignity, safety and opportunity. Every program is designed
            to support whole-child development and a future of independence.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                <Icon className="h-4 w-4 text-[#16A34A]" />
                <span className="text-sm font-medium text-[#17201A]">{label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-6 inline-block rounded-full bg-[#166534] px-5 py-3 text-sm font-semibold text-white hover:bg-[#15803d]">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}

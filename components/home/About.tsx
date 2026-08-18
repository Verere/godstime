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
            <p className="text-xl font-bold text-[#166534]">3+ years</p>
            <p className="text-sm text-[#2f3d34]">of consistent child support</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Creating a Place to Call Home</h2>
          <p className="mt-4 text-[#2f3d34]">
           Godstime Orphanage Home is committed to providing a safe, loving, and nurturing home for children who have lost parental care or are in vulnerable circumstances.
We believe that every child deserves to feel loved, valued, protected, and given an opportunity to build a brighter future.
Through the support of compassionate individuals, families, churches, organisations, and partners, we provide essential care while helping the children develop academically, emotionally, spiritually, and socially.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                <Icon className="h-4 w-4 text-[#16A34A]" />
                <span className="text-sm font-medium text-[#17201A]">{label}</span>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Heart, Apple, BookOpen, HandHeart, ShieldCheck, Stethoscope } from "lucide-react";
import { publicContent } from "@/lib/public-content";
import Reveal from "@/components/ui/Reveal";

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
    <section id="about" className="bg-[#f5f8f2] px-4 py-18 sm:px-6">
      <Reveal className="section-shell grid items-center gap-10 lg:grid-cols-[1.04fr_1fr]">
        <div className="relative">
          <Image
            src="/gdst.png"
            alt="Care team supporting children"
            width={1400}
            height={1000}
            className="h-[360px] w-full rounded-[1.8rem] object-cover shadow-[0_28px_56px_-38px_rgba(23,32,26,0.5)] sm:h-[500px]"
          />
          <div className="absolute -right-3 -top-3 rounded-2xl border border-[#dce8d8] bg-white p-4 shadow-lg sm:-right-6 sm:top-6">
            <p className="section-label">Where We Operate</p>
            <p className="text-sm font-semibold text-[#166534]">{publicContent.locationSummary}</p>
            <p className="text-xs text-[#2f3d34]">Community-based support for vulnerable children.</p>
          </div>
        </div>

        <div>
          <p className="section-label">About Us</p>
          <h2 className="editorial-title mt-2 text-[#17201A]">A Safe Home, Daily Care, and Future Opportunity</h2>
          <p className="mt-4 text-[#2f3d34]">
            God&apos;stime Orphanage Home serves children in vulnerable situations by providing shelter, care, guidance, and practical support.
            We focus on stable daily care and long-term development so every child can grow with dignity, confidence, and hope.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-[#2f3d34] sm:grid-cols-2">
            <p className="surface-card p-3"><span className="font-semibold text-[#17201A]">Who we serve:</span> children without stable parental care and children in vulnerable circumstances.</p>
            <p className="surface-card p-3"><span className="font-semibold text-[#17201A]">What we provide:</span> daily care, nutrition, learning support, and emotional wellbeing support.</p>
            <p className="surface-card p-3"><span className="font-semibold text-[#17201A]">Where we operate:</span> {publicContent.contact.address}</p>
            <p className="surface-card p-3"><span className="font-semibold text-[#17201A]">Why support matters:</span> reliable support creates stability children can build their future on.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="surface-card flex items-center gap-3 p-3">
                <Icon className="h-4 w-4 text-[#16A34A]" />
                <span className="text-sm font-medium text-[#17201A]">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/about" className="btn-base btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

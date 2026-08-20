import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type DonationCTAProps = {
  donationUrl: string;
};

export default function DonationCTA({ donationUrl }: DonationCTAProps) {
  const donateHref = donationUrl && donationUrl !== "https://example.org/donate" ? donationUrl : "/donate";

  return (
    <section className="relative overflow-hidden bg-[#18492f] px-4 py-20 sm:px-6" aria-label="Final call to action">
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#d8a13d]/15 blur-3xl" />
      <div className="absolute -bottom-16 right-10 h-44 w-44 rounded-full bg-[#fff]/8 blur-3xl" />
      <Reveal className="section-shell">
        <div className="relative rounded-[2rem] border border-[#97b39e]/35 bg-[#1d5436] p-8 text-center text-white sm:p-12">
          <p className="hero-entrance text-xs font-semibold uppercase tracking-[0.16em] text-[#dce9d8]" style={{ animationDelay: "80ms" }}>Your Support Can Change A Future</p>
          <h2 className="editorial-title hero-entrance mt-3 text-[#f8f3e8]" style={{ animationDelay: "180ms" }}>Help Us Give Every Child a Brighter Future</h2>
          <p className="hero-entrance mx-auto mt-4 max-w-2xl text-sm text-[#e6efe3] sm:text-base" style={{ animationDelay: "280ms" }}>
            Your support helps provide daily care, education support, nutrition, and a safer path to adulthood for children in need.
          </p>

          <div className="hero-entrance mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "380ms" }}>
            <Link href={donateHref} className="btn-base btn-donate">
              Donate Today
            </Link>
            <Link href="/get-involved" className="btn-base border border-[#bdd0c2] bg-transparent text-white hover:bg-white/10">
              Get Involved
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { publicContent } from "@/lib/public-content";

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 sm:pt-14 lg:pb-24">
      <div className="absolute inset-0 -z-20 bg-[#fffef8]" />
      <div className="absolute right-0 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[#f6edda] blur-2xl" />
      <div className="absolute -bottom-16 -left-20 -z-10 h-[260px] w-[260px] rounded-full bg-[#eaf2e7] blur-3xl" />

      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
        <div className="order-2 space-y-7 lg:order-1">
          <p className="section-label hero-entrance" style={{ animationDelay: "120ms" }}>Creating Brighter Futures</p>
          <h1 className="display-title hero-entrance max-w-[18ch] text-[#17201A]" style={{ animationDelay: "240ms" }}>{title}</h1>
          <p className="narrow-copy hero-entrance max-w-[54ch] text-[1.02rem] text-[#2f3d34] sm:text-[1.1rem]" style={{ animationDelay: "340ms" }}>{subtitle}</p>
          <p className="hero-entrance max-w-[54ch] text-[0.98rem] text-[#44584d] sm:text-[1.02rem]" style={{ animationDelay: "420ms" }}>{publicContent.supportingStatement}</p>
          <div className="hero-entrance flex flex-wrap gap-3 pt-1" style={{ animationDelay: "520ms" }}>
            <Link href="/donate" className="btn-base btn-primary">
              Donate Now
            </Link>
            <Link href="/about" className="btn-base btn-secondary">
              Discover Our Story
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 hero-entrance" style={{ animationDelay: "180ms" }}>
          <div className="absolute -right-4 top-10 hidden h-28 w-28 rounded-3xl border border-[#d8a13d]/35 bg-[#fff8e5] md:block" />
          <Image
            src="/image1.png"
            alt="Children learning together"
            width={1400}
            height={900}
            className="hero-image-reveal h-[350px] w-full rounded-[2rem] object-cover object-center shadow-[0_26px_55px_-36px_rgba(23,32,26,0.5)] sm:h-[460px]"
            priority
          />
          <div className="absolute -bottom-7 left-5 max-w-sm rounded-2xl border border-[#e4efe1] bg-white/95 p-4 shadow-[0_20px_45px_-35px_rgba(23,32,26,0.6)] backdrop-blur hero-entrance" style={{ animationDelay: "560ms" }}>
            <p className="section-label">Who We Serve</p>
            <p className="mt-1.5 text-sm text-[#1f2d26]">
              Children in vulnerable situations across {publicContent.locationSummary}.
            </p>
          </div>
          <div className="absolute -left-5 top-10 hidden h-16 w-16 rounded-full bg-[#e6f3e7] lg:block" />
        </div>
      </div>
    </section>
  );
}

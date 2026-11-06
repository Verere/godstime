import Image from "next/image";
import Link from "next/link";
import { publicContent } from "@/lib/public-content";

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  donationUrl: string;
};

export default function Hero({ badge, title, subtitle, donationUrl }: HeroProps) {
  const donateHref = donationUrl && donationUrl !== "https://example.org/donate" ? donationUrl : "/donate";
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 sm:pt-14 lg:pb-24">
      <div className="absolute inset-0 -z-20 bg-[#fffef8]" />
      <div className="absolute right-0 top-0 -z-10 h-[280px] w-[280px] rounded-full bg-[#f6edda] blur-2xl" />
      <div className="absolute -bottom-16 -left-20 -z-10 h-[260px] w-[260px] rounded-full bg-[#eaf2e7] blur-3xl" />

      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
        <div className="order-2 space-y-7 lg:order-1">
          <p className="section-label hero-entrance" style={{ animationDelay: "120ms" }}>{badge || "Creating Brighter Futures"}</p>
          <h1 className="display-title hero-entrance max-w-[18ch] text-[#17201A]" style={{ animationDelay: "240ms" }}>{title}</h1>
          <p className="narrow-copy hero-entrance max-w-[54ch] text-[1.02rem] text-[#2f3d34] sm:text-[1.1rem]" style={{ animationDelay: "340ms" }}>{subtitle}</p>
          {/* <p className="hero-entrance max-w-[54ch] text-[0.98rem] text-[#44584d] sm:text-[1.02rem]" style={{ animationDelay: "420ms" }}>{publicContent.supportingStatement}</p> */}
          <div className="hero-entrance flex flex-col gap-3 pt-1 sm:flex-row" style={{ animationDelay: "520ms" }}>
            <Link href={donateHref} className="btn-base btn-primary">
              Make a Difference
            </Link>
            <Link href="/about" className="btn-base btn-secondary">
              Discover Our Story
            </Link>
          </div>
        </div>

        <div className="hero-entrance relative order-1 mx-auto w-full max-w-[36rem] isolate lg:order-2" style={{ animationDelay: "180ms" }}>
          <div aria-hidden="true" className="absolute -right-4 top-10 z-0 hidden h-24 w-24 rounded-[1.75rem] border border-[#d8a13d]/35 bg-[#fff8e5] md:block" />
          <div aria-hidden="true" className="absolute -left-4 top-16 z-0 hidden h-16 w-16 rounded-full bg-[#e6f3e7] sm:block" />
          <div className="relative z-10 aspect-[5/4] overflow-hidden rounded-[2rem] bg-[#f4ecdf] shadow-[0_26px_55px_-36px_rgba(23,32,26,0.5)]">
            <Image
              src="/hero.png"
              alt="A young child wearing a blue outfit and pink knit hat"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="hero-image-reveal object-cover object-top"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f4ecdf]/90 via-[#f4ecdf]/55 to-transparent sm:h-44" />
            <div className="hero-entrance absolute bottom-4 left-4 z-20 w-[calc(100%-2rem)] max-w-[19rem] rounded-2xl border border-[#e4efe1] bg-white/95 p-3.5 shadow-[0_20px_45px_-35px_rgba(23,32,26,0.6)] backdrop-blur sm:bottom-5 sm:left-5 sm:p-4" style={{ animationDelay: "560ms" }}>
              <p className="section-label">Who We Serve</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#1f2d26]">
                Children in vulnerable situations across Delta State.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

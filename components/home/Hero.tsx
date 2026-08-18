import Image from "next/image";

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function Hero({ badge, title, subtitle }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#dcfce7_0%,_transparent_48%),radial-gradient(circle_at_bottom_left,_#fde68a_0%,_transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#166534]">
            {badge}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-[#17201A] sm:text-5xl">{title}</h1>
          <p className="max-w-xl text-base text-[#2f3d34] sm:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#get-involved" className="rounded-full bg-[#166534] px-5 py-3 text-sm font-semibold text-white hover:bg-[#15803d]">
              Support Our Mission
            </a>
            <a href="#about" className="rounded-full border border-[#86efac] bg-white px-5 py-3 text-sm font-semibold text-[#166534] hover:bg-[#f0fdf4]">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/image1.png"
            alt="Children learning together"
            width={1400}
            height={900}
            className="h-[320px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px]"
            priority
          />
          <div className="absolute -bottom-6 left-4 max-w-xs rounded-2xl border border-[#dcfce7] bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#16A34A]">Making a Difference</p>
            <p className="mt-1 text-sm text-[#17201A]">Children supported, lives transformed, futures empowered.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

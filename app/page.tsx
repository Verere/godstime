import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import DonationCTA from "@/components/home/DonationCTA";
import Events from "@/components/home/Events";
import Gallery from "@/components/home/Gallery";
import GetInvolved from "@/components/home/GetInvolved";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import MissionVision from "@/components/home/MissionVision";
import Programs from "@/components/home/Programs";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Reveal from "@/components/ui/Reveal";
import { publicContent } from "@/lib/public-content";
import { events, galleryItems, programs, siteSettings } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main>
        <Hero
          badge={siteSettings.hero.badge}
          title={siteSettings.hero.title}
          subtitle={siteSettings.hero.subtitle}
        />

        <Reveal className="px-4 py-16 sm:px-6" aria-labelledby="mission-statement-title">
          <div className="section-shell rounded-[1.8rem] border border-[#e3ecdf] bg-[#fffdf7] px-6 py-10 shadow-[0_24px_45px_-38px_rgba(23,32,26,0.5)] sm:px-12">
            <p className="section-label">Our Mission In Practice</p>
            <h2 id="mission-statement-title" className="display-title mt-3 max-w-4xl text-[#17201A]">
              We believe every child deserves more than survival. They deserve the opportunity to thrive.
            </h2>
            <p className="narrow-copy mt-5 max-w-3xl text-[1.02rem] text-[#2f3d34]">
              Through daily care, education support, emotional guidance, and community partnership, we create a safer and more hopeful path for children in vulnerable situations.
            </p>
          </div>
        </Reveal>

        <About />
        <MissionVision />
        <ImpactStats metrics={siteSettings.impactMetrics} />
        <Programs programs={programs} />

        <Reveal className="px-4 py-18 sm:px-6" aria-labelledby="support-matters-title">
          <div className="section-shell grid items-center gap-8 lg:grid-cols-[1.02fr_1fr]">
            <div className="relative order-2 overflow-hidden rounded-[1.8rem] lg:order-1">
              <Image
                src="/mm.png"
                alt="Community care and support activities"
                width={1400}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="section-label">Why It Matters</p>
              <h2 id="support-matters-title" className="editorial-title mt-2 text-[#17201A]">
                Why Your Support Matters
              </h2>
              <p className="mt-2 text-xl font-medium leading-relaxed text-[#20382b]">
                Every act of support creates another possibility.
              </p>
              <p className="mt-3 max-w-2xl text-[#2f3d34]">
                Consistent community support helps us maintain stable care and improve opportunities for children over time.
                Your contribution helps create dependable, everyday support children can rely on.
              </p>

              <div className="surface-card mt-6 p-5">
                <h3 className="text-lg font-semibold text-[#17201A]">How support is used</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#2f3d34]">
                {publicContent.supportUses.map((item) => (
                    <li key={item} className="rounded-lg bg-[#f7fdf9] px-3 py-2">{item}</li>
                ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link href="/donate" className="btn-base btn-primary">
                  Support A Child Today
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <GetInvolved />
        <Gallery items={galleryItems} previewCount={6} showViewAllLink />
        <Events events={events} />
        <DonationCTA donationUrl={siteSettings.donationUrl} />
        <Contact />
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

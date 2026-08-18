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
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { events, galleryItems, programs, siteSettings, testimonials } from "@/lib/site-data";

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
        <About />
        <MissionVision />
        <ImpactStats metrics={siteSettings.impactMetrics} />
        <Programs programs={programs} />
        <GetInvolved />
        <Gallery items={galleryItems} />
        <Events events={events} />
        <Testimonials testimonials={testimonials} />
        <DonationCTA donationUrl={siteSettings.donationUrl} />
        <Contact />
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

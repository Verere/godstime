import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { publicContent } from "@/lib/public-content";
import { siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Contact Us", description: "Contact God'stime Orphanage Home in Ekete, Delta State about donations, volunteering, visits, and partnerships.", path: "/contact" });

export default function ContactPage() {
  const mapQuery = encodeURIComponent(publicContent.contact.address);

  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main id="main-content">
        <section className="px-4 pb-4 pt-10 sm:px-6 sm:pt-14">
          <div className="page-hero mx-auto max-w-7xl">
            <p className="section-label">We&apos;re here to help</p>
            <h1 className="display-title mt-2 text-[#17201A]">Contact our team</h1>
            <p className="mt-3 max-w-3xl text-lg text-[#2f3d34]">Visit us, call us, email us, or send a message through the form below.</p>
            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              <a href={`tel:${publicContent.contact.phoneRaw}`} className="btn-base btn-secondary w-full sm:w-auto">Call Us</a>
              <a href={`mailto:${publicContent.contact.email}`} className="btn-base btn-secondary w-full sm:w-auto">Email Us</a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-primary w-full sm:w-auto"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

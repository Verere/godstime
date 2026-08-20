import type { Metadata } from "next";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { publicContent } from "@/lib/public-content";
import { siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with God'stime Orphanage Home for donations, volunteering, and partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(publicContent.contact.address);

  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main>
        <section className="px-4 pb-4 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-7xl rounded-2xl border border-[#d8eedf] bg-[#f7fdf9] p-6">
            <h1 className="text-3xl font-bold sm:text-4xl">Contact God&apos;stime Orphanage Home</h1>
            <p className="mt-2 text-[#2f3d34]">Visit us, call us, email us, or send a message through the form below.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`tel:${publicContent.contact.phoneRaw}`} className="rounded-full border border-[#86efac] bg-white px-4 py-2 text-sm font-semibold text-[#166534]">Call Us</a>
              <a href={`mailto:${publicContent.contact.email}`} className="rounded-full border border-[#86efac] bg-white px-4 py-2 text-sm font-semibold text-[#166534]">Email Us</a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

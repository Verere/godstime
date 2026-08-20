import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Gallery from "@/components/home/Gallery";
import { galleryItems, siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of activities and moments from God'stime Orphanage Home.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main>
        <section className="px-4 pb-6 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Gallery</h1>
            <p className="mt-2 max-w-3xl text-[#2f3d34]">
              A visual glimpse of learning, care, and community life. We avoid sharing sensitive personal information about children.
            </p>
          </div>
        </section>
        <Gallery items={galleryItems} />
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

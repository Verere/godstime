import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Gallery from "@/components/home/Gallery";
import { galleryItems, siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Gallery", description: "View learning, care, and community activities at God'stime Orphanage Home in Delta State, Nigeria.", path: "/gallery" });

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main id="main-content">
        <section className="px-4 pb-6 pt-10 sm:px-6 sm:pt-14">
          <div className="page-hero mx-auto max-w-7xl">
            <p className="section-label">Life in our community</p>
            <h1 className="display-title mt-2 text-[#17201A]">Gallery</h1>
            <p className="mt-3 max-w-3xl text-lg text-[#2f3d34]">
              A visual glimpse of learning, care, and community life. We avoid sharing sensitive personal information about children.
            </p>
          </div>
        </section>
        <Gallery items={galleryItems} />
      </main>
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

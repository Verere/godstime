import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Terms of Use", description: "Terms for responsible use of the God'stime Orphanage Home website.", path: "/terms", noIndex: true });

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main id="main-content" className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="page-hero mx-auto max-w-4xl">
          <p className="section-label">Using this website</p>
          <h1 className="display-title mt-2">Terms of Use</h1>
          <p className="mt-3 text-[#2f3d34]">
            These terms will explain how visitors can use this site, contact channels, and content responsibly.
          </p>
          <p className="mt-2 text-sm text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
        </div>
      </main>
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

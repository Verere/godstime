import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Privacy Policy", description: "Privacy information for visitors to the God'stime Orphanage Home website.", path: "/privacy", noIndex: true });

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main id="main-content" className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="page-hero mx-auto max-w-4xl">
          <p className="section-label">Your information</p>
          <h1 className="display-title mt-2">Privacy Policy</h1>
          <p className="mt-3 text-[#2f3d34]">
            This policy will describe what information is collected, why it is collected, and how it is protected.
          </p>
          <p className="mt-2 text-sm text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
        </div>
      </main>
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

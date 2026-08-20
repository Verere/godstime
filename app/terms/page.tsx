import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for God'stime Orphanage Home website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Terms of Use</h1>
          <p className="mt-3 text-[#2f3d34]">
            These terms will explain how visitors can use this site, contact channels, and content responsibly.
          </p>
          <p className="mt-2 text-sm text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
        </div>
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

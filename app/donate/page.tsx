import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import DonationPageContent from "@/components/donate/DonationPageContent";
import { siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support God'stime Orphanage Home through a clear and transparent donation process.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <DonationPageContent />
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

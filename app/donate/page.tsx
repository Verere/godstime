import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import DonationPageContent from "@/components/donate/DonationPageContent";
import { siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Donate", description: "Find donation details and ways to support daily care, education, health, and wellbeing for children at God'stime Orphanage Home.", path: "/donate" });

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <DonationPageContent />
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

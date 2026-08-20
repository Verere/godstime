import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { publicContent } from "@/lib/public-content";
import { siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Trust & Transparency",
  description:
    "Trust and transparency details for God'stime Orphanage Home, including contact and verification placeholders.",
  alternates: { canonical: "/transparency" },
};

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="rounded-3xl border border-[#d8eedf] bg-[#f7fdf9] p-6 sm:p-8">
            <h1 className="text-3xl font-bold sm:text-4xl">Trust & Transparency</h1>
            <p className="mt-3 max-w-3xl text-[#2f3d34]">
              We are committed to clear communication so supporters can verify who we are and how to engage responsibly.
            </p>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Legal Organization Name</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">{publicContent.transparency.legalName}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Registration Information</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">Status: {publicContent.transparency.registrationStatus}</p>
              <p className="text-sm text-[#2f3d34]">Number: {publicContent.transparency.registrationNumber}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Physical Location</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">{publicContent.contact.address}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Official Contact Details</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">Phone: {publicContent.contact.phone}</p>
              <p className="text-sm text-[#2f3d34]">Email: {publicContent.contact.email}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Leadership Information</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">{publicContent.transparency.leadership}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Donation Information</h2>
              <p className="mt-2 text-sm text-[#2f3d34]">Bank: {publicContent.donation.bankName}</p>
              <p className="text-sm text-[#2f3d34]">Account Name: {publicContent.donation.accountName}</p>
              <p className="text-sm text-[#2f3d34]">Account Number: {publicContent.donation.accountNumber}</p>
            </article>
          </section>

          <section className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 shadow-sm">
            <h2 className="text-xl font-bold">Policies & Reports</h2>
            <p className="mt-2 text-sm text-[#2f3d34]">Annual reports: {publicContent.transparency.annualReports}</p>
            <p className="text-sm text-[#2f3d34]">Safeguarding policy: {publicContent.transparency.safeguardingPolicy}</p>
            <p className="mt-2 text-sm text-[#2f3d34]">Privacy policy and terms are available below.</p>
          </section>
        </div>
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

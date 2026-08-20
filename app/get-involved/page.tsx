import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { siteSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, sponsor, partner, or donate to support children through God'stime Orphanage Home.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="rounded-3xl border border-[#d8eedf] bg-[#f7fdf9] p-6 sm:p-8">
            <h1 className="text-3xl font-bold sm:text-4xl">How You Can Help</h1>
            <p className="mt-3 max-w-3xl text-[#2f3d34]">
              Whether you have time, resources, or expertise, there is a meaningful way to support children through God&apos;stime Orphanage Home.
            </p>
          </section>

          <section id="volunteer" className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Volunteer</h2>
            <p className="mt-2 text-[#2f3d34]">
              Volunteering may involve mentoring, educational support, admin help, or event support.
            </p>
            <p className="mt-2 text-sm text-[#2f3d34]">
              Suitable for: individuals, youth groups, and professionals willing to serve responsibly.
            </p>
            <Link href="/contact" className="mt-4 inline-flex rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
              Apply to Volunteer
            </Link>
          </section>

          <section id="sponsor" className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Sponsor a Child / Child Sponsorship</h2>
            <p className="mt-2 text-[#2f3d34]">
              Sponsorship supports priority care areas such as learning support, meals, and wellbeing.
            </p>
            <p className="mt-2 text-sm text-[#2f3d34]">Sponsorship plans are discussed directly to match current needs.</p>
            <p className="mt-1 text-xs text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
            <Link href="/contact" className="mt-4 inline-flex rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
              Ask About Sponsorship
            </Link>
          </section>

          <section id="partner" className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Partner With Us</h2>
            <p className="mt-2 text-[#2f3d34]">
              Organizations can partner through services, capacity support, in-kind donations, and long-term collaboration.
            </p>
            <p className="mt-2 text-sm text-[#2f3d34]">
              Suitable for: companies, foundations, faith communities, and social impact teams.
            </p>
            <Link href="/contact" className="mt-4 inline-flex rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
              Start a Partnership Conversation
            </Link>
          </section>

          <section id="donate" className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Donate</h2>
            <p className="mt-2 text-[#2f3d34]">Financial donations help support ongoing care and operational needs.</p>
            <Link href="/donate" className="mt-4 inline-flex rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#17201A]">
              Go to Donation Page
            </Link>
          </section>
        </div>
      </main>
      <Footer year={2026} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

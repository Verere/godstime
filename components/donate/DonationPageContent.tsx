"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleCheck, Copy, ShieldAlert } from "lucide-react";
import { publicContent } from "@/lib/public-content";

export default function DonationPageContent() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(publicContent.donation.accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main id="main-content" className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="page-hero">
          <p className="section-label">Your support matters</p>
          <h1 className="display-title mt-2 max-w-4xl text-[#17201A]">Support care, safety, and opportunity</h1>
          <p className="mt-4 max-w-3xl text-lg text-[#2f3d34]">
            Donations help sustain daily care, learning support, health support, and practical needs for children in vulnerable situations.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-[#17201A]">Why your support matters</h2>
            <p className="mt-3 text-sm text-[#2f3d34]">
              Consistent support helps us plan responsibly and provide stable day-to-day care that children can rely on.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#2f3d34]">
              {publicContent.supportUses.map((item) => (
                <li key={item} className="rounded-lg bg-[#f8fff9] px-3 py-2">{item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-[#17201A]">How to donate</h2>
            <p className="mt-3 text-sm text-[#2f3d34]">Use the bank transfer details below and share confirmation with our team for acknowledgement.</p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-[#e3f5e7] bg-[#f9fffb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#4b6658]">Account Number</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <p className="font-sans text-2xl font-extrabold tracking-[0.08em] text-[#17201A]">{publicContent.donation.accountNumber}</p>
                  <button
                    type="button"
                    onClick={copyAccountNumber}
                    className="inline-flex min-h-10 items-center gap-1 rounded-full border border-[#bbf7d0] px-3 py-1 text-xs font-semibold text-[#166534] hover:bg-[#ecfdf3]"
                  >
                    <Copy className="h-3.5 w-3.5" /> Copy Account Number
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-[#e3f5e7] bg-[#f9fffb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#4b6658]">Bank</p>
                <p className="mt-1 text-base font-semibold text-[#17201A]">{publicContent.donation.bankName}</p>
              </div>

              <div className="rounded-xl border border-[#e3f5e7] bg-[#f9fffb] p-4">
                <p className="text-xs uppercase tracking-wide text-[#4b6658]">Account Name</p>
                <p className="mt-1 text-base font-semibold text-[#17201A]">{publicContent.donation.accountName}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
              <p className="inline-flex items-center gap-2 font-semibold"><ShieldAlert className="h-4 w-4" /> Verify recipient details before transfer</p>
              <p className="mt-1 leading-relaxed">{publicContent.donation.notice}</p>
            </div>

            {copied ? (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#ecfdf3] px-3 py-1 text-xs font-semibold text-[#166534]" role="status" aria-live="polite">
                <CircleCheck className="h-3.5 w-3.5" /> Account number copied.
              </p>
            ) : null}
          </article>
        </section>

        <section className="surface-card p-6 sm:p-7">
          <h2 className="text-2xl font-bold text-[#17201A]">Donation confirmation</h2>
          <p className="mt-3 text-sm text-[#2f3d34]">
            After transfer, send your confirmation by email or WhatsApp so we can acknowledge receipt.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${publicContent.contact.email}`} className="rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
              Email Confirmation
            </a>
            <a
              href={`https://wa.me/${publicContent.contact.phoneRaw.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#86efac] bg-white px-4 py-2 text-sm font-semibold text-[#166534]"
            >
              WhatsApp Confirmation
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 sm:p-7">
          <h2 className="text-xl font-bold text-[#17201A]">Need help with your donation?</h2>
          <p className="mt-2 text-sm text-[#2f3d34]">Our team can guide you through transfer confirmation and provide support information.</p>
          <div className="mt-3 space-y-1 text-sm text-[#17201A]">
            <p><span className="font-semibold">Phone:</span> {publicContent.contact.phone}</p>
            <p><span className="font-semibold">Email:</span> {publicContent.contact.email}</p>
          </div>
          <div className="mt-4">
            <Link href="/contact" className="rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

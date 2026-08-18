"use client";

import { useState } from "react";

type DonationCTAProps = {
  donationUrl: string;
};

export default function DonationCTA({ donationUrl }: DonationCTAProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              🏦
            </div>

            <h3 className="text-center text-xl font-bold text-gray-800">Bank Transfer Details</h3>
            <p className="mt-1 text-center text-sm text-gray-500">Make your transfer to the account below</p>

            <div className="mt-6 space-y-3">
              {[
                { label: "Account Number", value: "4091765920" },
                { label: "Bank", value: "Polaris Bank" },
                { label: "Account Name", value: "God\u2019stime Orphanage Home" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                  <span className="text-xs font-medium text-gray-500">{label}</span>
                  <span className="text-sm font-bold text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            <a
              href={donationUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-full rounded-full bg-[#F59E0B] py-3 text-center text-sm font-semibold text-[#17201A] hover:bg-[#fbbf24]"
              onClick={() => setOpen(false)}
            >
              Continue to Online Donation
            </a>

            <p className="mt-3 text-center text-xs text-gray-400">
              Every contribution — big or small — changes a life. Thank you! 💚
            </p>
          </div>
        </div>
      )}

      {/* ── Section ── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#14532d,#166534,#15803d)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.35),transparent_50%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.25),transparent_50%)]" />

        {/* Decorative circles */}
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-emerald-700/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center text-white">
          {/* Badge */}
          <span className="bg-amber-400/10 px-4 py-1 text-2xl font-semibold uppercase tracking-widest text-[#F59E0B]">
            Make a Difference
          </span>

          
          <p className="mx-auto mt-4  max-w-2xl text-base text-emerald-500">
            Your support helps us provide care, education, nutrition and opportunities
            for children who need them most. Every contribution counts.
          </p>

        
          

          {/* Bank details card */}
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-amber-300/40 bg-[#0f3d20] p-6 text-left shadow-xl">
            <div className="mb-4 flex items-center gap-2 border-b border-amber-300/20 pb-3">
              <span className="text-2xl">🏦</span>
              <p className="text-base font-bold text-amber-300">Bank Account Details</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Account Number", value: "4091765920" },
                { label: "Bank", value: "Polaris Bank" },
                { label: "Account Name", value: "God\u2019stime Orphanage Home" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col rounded-xl bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-300 sm:mb-0">{label}</span>
                  <span className="text-sm font-extrabold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={donationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 text-sm font-bold text-[#17201A] shadow-lg shadow-amber-500/30 transition hover:bg-[#fbbf24] hover:shadow-amber-400/40 active:scale-95"
            >
              <span>💛</span> Donate Online
            </a>
            
          </div> */}
        </div>
      </section>
    </>
  );
}

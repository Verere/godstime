type DonationCTAProps = {
  donationUrl: string;
};

export default function DonationCTA({ donationUrl }: DonationCTAProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,#166534,#15803d,#14532d)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.3),transparent_40%)]" />
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Together, We Can Change a Child&apos;s Tomorrow</h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-100">
          Your support helps us provide care, education, nutrition and opportunities for children who need them most.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={donationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-[#17201A] hover:bg-[#fbbf24]"
          >
            Donate Now
          </a>
          <a href="#contact" className="rounded-full border border-emerald-200 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}

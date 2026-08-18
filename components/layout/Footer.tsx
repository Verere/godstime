import { HeartHandshake } from "lucide-react";

type FooterProps = {
  year: number;
  donationUrl: string;
};

export default function Footer({ year, donationUrl }: FooterProps) {
  return (
    <footer className="bg-[#0f2316] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <HeartHandshake className="h-5 w-5 text-[#F59E0B]" />
            <span className="font-semibold">God&apos;stime Orphanage</span>
          </div>
          <p className="text-sm text-emerald-100/90">
            A safe and nurturing home where children can learn, heal and grow.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-200">Navigate</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#programs" className="hover:text-white">Programs</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-200">Programs</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li>Education</li>
            <li>Healthcare</li>
            <li>Nutrition</li>
            <li>Skills Development</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-200">Support</h3>
          <a
            href={donationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#17201A] transition hover:bg-[#fbbf24]"
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="border-t border-emerald-900/70 px-4 py-4 text-center text-xs text-emerald-200 sm:px-6">
        Copyright {year} God&apos;stime Orphanage. All rights reserved.
      </div>
    </footer>
  );
}

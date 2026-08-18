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
            href="#donate"
                       className="inline-block rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#17201A] transition hover:bg-[#fbbf24]"
          >
            Donate Now
          </a>

          <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-200">Follow Us</h3>
          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-80"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.988A10.002 10.002 0 0 0 22 12Z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348154255357"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:opacity-80"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-900/70 px-4 py-4 text-center text-xs text-emerald-200 sm:px-6">
        Copyright {year} God&apos;stime Orphanage. All rights reserved.
      </div>
    </footer>
  );
}

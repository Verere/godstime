import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { publicContent } from "@/lib/public-content";
import Image from "next/image";

type FooterProps = {
  year: number;
  donationUrl: string;
};

export default function Footer({ year, donationUrl }: FooterProps) {
  const donateHref = donationUrl && donationUrl !== "https://example.org/donate" ? donationUrl : "/donate";

  return (
    <footer className="bg-[#10281a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image src="/logo.jpeg" alt="God'stime Orphanage Home Logo" width={32} height={32} className="h-12 w-12" />
                      
            <span className="font-semibold">God&apos;stime Orphanage Home</span>
          </div>
          <p className="max-w-xs font-serif text-xl leading-relaxed text-[#f3f0e5]">
            Creating brighter futures, one child at a time.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Navigate</h3>
          <ul className="space-y-2 text-sm text-emerald-100/95">
            <li><Link href="/about" className="transition hover:translate-x-0.5 hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="transition hover:translate-x-0.5 hover:text-white">Gallery</Link></li>
            <li><Link href="/get-involved" className="transition hover:translate-x-0.5 hover:text-white">Get Involved</Link></li>
            <li><Link href="/contact" className="transition hover:translate-x-0.5 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Contact</h3>
          <ul className="space-y-2 text-sm text-emerald-100/95">
            <li>{publicContent.contact.phone}</li>
            <li>{publicContent.contact.email}</li>
            <li>{publicContent.contact.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Support</h3>
          <Link
            href={donateHref}
            className="btn-base btn-donate"
          >
            Donate Now
          </Link>

          <div className="mt-5 space-y-2 text-sm text-emerald-100/95">
            <p><Link href="/transparency" className="transition hover:translate-x-0.5 hover:text-white">Trust & Transparency</Link></p>
            <p><Link href="/privacy" className="transition hover:translate-x-0.5 hover:text-white">Privacy Policy</Link></p>
            <p><Link href="/terms" className="transition hover:translate-x-0.5 hover:text-white">Terms</Link></p>
          </div>

          <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${publicContent.contact.phoneRaw.replace(/\D/g, "")}`}
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
        © {year} God&apos;stime Orphanage Home. All rights reserved.
      </div>
    </footer>
  );
}

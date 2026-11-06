import Link from "next/link";
import Image from "next/image";
import { publicContent } from "@/lib/public-content";

type FooterProps = { year: number; donationUrl: string };

export default function Footer({ year, donationUrl }: FooterProps) {
  const donateHref = donationUrl && donationUrl !== "https://example.org/donate" ? donationUrl : "/donate";

  return (
    <footer className="bg-[#10281a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_.8fr_1.1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/logo.jpeg" alt="" aria-hidden="true" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-1 ring-white/30" />
            <span className="max-w-[14rem] font-semibold leading-tight">God&apos;stime Orphanage Home</span>
          </div>
          <p className="max-w-xs font-serif text-xl leading-relaxed text-[#f3f0e5]">Creating brighter futures, one child at a time.</p>
          <p className="mt-3 max-w-xs text-sm text-emerald-100/75">Care, learning, and opportunity for children in vulnerable situations.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Explore</h3>
          <ul className="space-y-3 text-sm text-emerald-100/95">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Get in touch</h3>
          <ul className="space-y-3 break-words text-sm text-emerald-100/95">
            <li><a className="hover:text-white" href={`tel:${publicContent.contact.phoneRaw}`}>{publicContent.contact.phone}</a></li>
            <li><a className="hover:text-white" href={`mailto:${publicContent.contact.email}`}>{publicContent.contact.email}</a></li>
            <li>{publicContent.contact.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Support our work</h3>
          <Link href={donateHref} className="btn-base btn-donate">Donate Now</Link>
          <div className="mt-5 space-y-3 text-sm text-emerald-100/95">
            <p><Link href="/transparency" className="hover:text-white">Trust &amp; Transparency</Link></p>
            <p><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></p>
            <p><Link href="/terms" className="hover:text-white">Terms</Link></p>
          </div>
          <a href={`https://wa.me/${publicContent.contact.phoneRaw.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#25D366] px-4 text-sm font-bold text-white hover:bg-[#1fb85a]">WhatsApp us</a>
        </div>
      </div>
      <div className="border-t border-emerald-900/70 px-4 py-4 text-center text-xs text-emerald-200 sm:px-6">
        © {year} God&apos;stime Orphanage Home. All rights reserved.
      </div>
    </footer>
  );
}

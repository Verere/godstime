"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
  { href: "/transparency", label: "Transparency" },
];

export default function Navbar({ donationUrl }: { donationUrl: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [open]);

  const donateHref = donationUrl && donationUrl !== "https://example.org/donate" ? donationUrl : "/donate";
  const isHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent transition-all duration-300 ${
        scrolled || !isHome ? "bg-[#fffef8]/92 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-[#18492f] transition-transform duration-300 hover:translate-y-[-1px]">
          <Image src="/logo.jpeg" alt="" aria-hidden="true" width={40} height={40} loading="eager" className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-[#dbe7d8]" />
          <span className="max-w-[14rem] text-sm font-extrabold leading-tight tracking-[0.01em] sm:max-w-none sm:text-base">God&apos;stime Orphanage Home</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative text-sm font-semibold transition hover:text-[#18492f] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#18492f] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === link.href ? "text-[#18492f] after:scale-x-100" : "text-[#20382b]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={donateHref}
            className="btn-base btn-donate"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#cfe1d1] bg-white/90 text-[#18492f] shadow-sm backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-main-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-main-menu"
        aria-hidden={!open}
        inert={!open}
        className={`grid overflow-y-auto border-t border-[#dce9dd] bg-[#fffef8] px-4 transition-all duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-4rem)] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2 pb-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-base font-semibold hover:bg-[#f2f8ef] ${
                pathname === link.href ? "bg-[#eef6eb] text-[#18492f]" : "text-[#1f3329]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={donateHref}
            className="btn-base btn-donate mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ donationUrl }: { donationUrl: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-white/70"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#home" className="flex items-center gap-2 text-[#166534]">
          <HeartHandshake className="h-6 w-6" aria-hidden="true" />
          <span className="text-sm font-bold tracking-wide sm:text-base">God&apos;stime Orphanage</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#17201A] transition hover:text-[#166534]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={donationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15803d]"
          >
            Donate
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[#dcfce7] p-2 text-[#166534] lg:hidden"
          aria-expanded={open}
          aria-label="Toggle mobile menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-[#dcfce7] bg-white px-4 transition-all duration-300 lg:hidden ${
          open ? "max-h-[320px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-[#17201A] hover:bg-[#f0fdf4]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={donationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 rounded-full bg-[#166534] px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  );
}

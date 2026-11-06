"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, GalleryHorizontal, LayoutDashboard, MessageSquare, Settings, Shapes, Quote } from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/programs", label: "Programs", icon: Shapes },
  { href: "/admin/gallery", label: "Gallery", icon: GalleryHorizontal },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
  { href: "/admin/settings", label: "Site Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-full border-b border-[#dcfce7] bg-white p-4 lg:min-h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5">
      <Link href="/admin" className="mb-4 flex items-center gap-3 rounded-2xl bg-[#f3f8f1] p-3 lg:mb-7">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18492f] text-sm font-extrabold text-white">G</span>
        <span><span className="block text-sm font-bold text-[#17201A]">Admin workspace</span><span className="block text-xs text-[#5c6d63]">God&apos;stime Orphanage</span></span>
      </Link>
      <nav aria-label="Admin navigation" className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:overflow-visible">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={`flex min-h-11 shrink-0 items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold transition lg:w-full ${pathname === href ? "bg-[#18492f] text-white shadow-sm" : "text-[#34483b] hover:bg-[#f0f7f0] hover:text-[#18492f]"}`}
          >
            <Icon className={`h-4 w-4 ${pathname === href ? "text-[#f2d99e]" : "text-[#1f7a46]"}`} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

import Link from "next/link";
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
  return (
    <aside className="w-full border-r border-[#dcfce7] bg-white p-4 lg:w-64">
      <h2 className="mb-4 text-lg font-bold text-[#166534]">Admin Panel</h2>
      <nav className="grid gap-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#17201A] hover:bg-[#f0fdf4]"
          >
            <Icon className="h-4 w-4 text-[#16A34A]" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

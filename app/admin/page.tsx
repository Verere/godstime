import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DashboardCard from "@/components/admin/DashboardCard";
import { connectToDatabase } from "@/lib/mongodb";
import { EventModel } from "@/models/Event";
import { GalleryModel } from "@/models/Gallery";
import { ContactModel } from "@/models/Contact";
import { ProgramModel } from "@/models/Program";

export default async function AdminDashboardPage() {
  await connectToDatabase();

  const [programs, gallery, upcomingEvents, unreadMessages] = await Promise.all([
    ProgramModel.countDocuments(),
    GalleryModel.countDocuments(),
    EventModel.countDocuments({ date: { $gte: new Date() } }),
    ContactModel.countDocuments({ isRead: false }),
  ]);

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="section-label">Overview</p>
          <h2 className="editorial-title mt-1 text-[#17201A]">Dashboard</h2>
          <p className="mt-1 text-sm text-[#607064]">A quick view of your site activity and content.</p>
        </div>
        <Link href="/" target="_blank" className="btn-base btn-secondary self-start sm:self-auto">View public website <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Programs" value={programs} />
        <DashboardCard title="Gallery Images" value={gallery} />
        <DashboardCard title="Upcoming Events" value={upcomingEvents} />
        <DashboardCard title="Unread Messages" value={unreadMessages} />
      </div>
      <section className="mt-8 rounded-2xl border border-[#e0e9dd] bg-white p-5 sm:p-6">
        <h3 className="font-sans text-base font-bold text-[#17201A]">Keep your site up to date</h3>
        <p className="mt-1 max-w-2xl text-sm text-[#607064]">Review messages regularly and make sure published stories, events, and images are current and approved.</p>
        <Link href="/admin/messages" className="mt-4 inline-flex min-h-10 items-center rounded-full bg-[#eef6eb] px-4 text-sm font-bold text-[#18492f] hover:bg-[#e2efdf]">Review messages</Link>
      </section>
    </main>
  );
}

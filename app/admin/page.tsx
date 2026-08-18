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
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Dashboard</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Programs" value={programs} />
        <DashboardCard title="Gallery Images" value={gallery} />
        <DashboardCard title="Upcoming Events" value={upcomingEvents} />
        <DashboardCard title="Unread Messages" value={unreadMessages} />
      </div>
    </main>
  );
}

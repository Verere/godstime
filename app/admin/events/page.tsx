import { connectToDatabase } from "@/lib/mongodb";
import { EventModel } from "@/models/Event";

export default async function AdminEventsPage() {
  await connectToDatabase();
  const events = await EventModel.find().sort({ date: 1 }).lean();

  return (
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Events</h2>
      <p className="mt-1 text-sm text-[#2f3d34]">Manage via API endpoints: GET/POST/PATCH/DELETE at /api/events.</p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-[#dcfce7] bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f0fdf4] text-[#17201A]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={String(event._id)} className="border-t border-[#ecfdf3]">
                <td className="px-4 py-3">{event.title}</td>
                <td className="px-4 py-3">{new Date(event.date).toLocaleDateString()}</td>
                <td className="px-4 py-3">{event.isPublished ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

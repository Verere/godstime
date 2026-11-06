import { connectToDatabase } from "@/lib/mongodb";
import { EventModel } from "@/models/Event";

export default async function AdminEventsPage() {
  await connectToDatabase();
  const events = await EventModel.find().sort({ date: 1 }).lean();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Content library</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Events</h2>
      <p className="mt-2 text-sm text-[#607064]">Review scheduled activities and their publication status.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e0e9dd] bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f3f8f1] text-[#526257]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? <tr><td colSpan={3} className="px-4 py-10 text-center text-sm text-[#607064]">No events have been added yet.</td></tr> : null}
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

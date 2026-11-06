import { connectToDatabase } from "@/lib/mongodb";
import { GalleryModel } from "@/models/Gallery";

export default async function AdminGalleryPage() {
  await connectToDatabase();
  const items = await GalleryModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Content library</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Gallery</h2>
      <p className="mt-2 text-sm text-[#607064]">Review photos, consent status, and what is currently published.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e0e9dd] bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f3f8f1] text-[#526257]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Consent</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? <tr><td colSpan={3} className="px-4 py-10 text-center text-sm text-[#607064]">No gallery items have been added yet.</td></tr> : null}
            {items.map((item) => (
              <tr key={String(item._id)} className="border-t border-[#ecfdf3]">
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3">{item.consentStatus}</td>
                <td className="px-4 py-3">{item.isPublished ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

import { connectToDatabase } from "@/lib/mongodb";
import { GalleryModel } from "@/models/Gallery";

export default async function AdminGalleryPage() {
  await connectToDatabase();
  const items = await GalleryModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Gallery</h2>
      <p className="mt-1 text-sm text-[#2f3d34]">Manage via API endpoints: GET/POST/PATCH/DELETE at /api/gallery.</p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-[#dcfce7] bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f0fdf4] text-[#17201A]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Consent</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
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

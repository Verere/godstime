import { connectToDatabase } from "@/lib/mongodb";
import { TestimonialModel } from "@/models/Testimonial";

export default async function AdminTestimonialsPage() {
  await connectToDatabase();
  const testimonials = await TestimonialModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Content library</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Testimonials</h2>
      <p className="mt-2 text-sm text-[#607064]">Review submitted stories and their publication status.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e0e9dd] bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f3f8f1] text-[#526257]">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length === 0 ? <tr><td colSpan={3} className="px-4 py-10 text-center text-sm text-[#607064]">No testimonials have been added yet.</td></tr> : null}
            {testimonials.map((item) => (
              <tr key={String(item._id)} className="border-t border-[#ecfdf3]">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.role}</td>
                <td className="px-4 py-3">{item.isPublished ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

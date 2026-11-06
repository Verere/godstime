import { connectToDatabase } from "@/lib/mongodb";
import { ProgramModel } from "@/models/Program";

export default async function AdminProgramsPage() {
  await connectToDatabase();
  const programs = await ProgramModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Content library</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Programs</h2>
      <p className="mt-2 text-sm text-[#607064]">Review the program areas currently stored for the website.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e0e9dd] bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f3f8f1] text-[#526257]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
            {programs.length === 0 ? <tr><td colSpan={2} className="px-4 py-10 text-center text-sm text-[#607064]">No programs have been added yet.</td></tr> : null}
            {programs.map((program) => (
              <tr key={String(program._id)} className="border-t border-[#ecfdf3]">
                <td className="px-4 py-3">{program.title}</td>
                <td className="px-4 py-3">{program.isPublished ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

import { connectToDatabase } from "@/lib/mongodb";
import { ProgramModel } from "@/models/Program";

export default async function AdminProgramsPage() {
  await connectToDatabase();
  const programs = await ProgramModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Programs</h2>
      <p className="mt-1 text-sm text-[#2f3d34]">Manage via API endpoints: GET/POST/PATCH/DELETE at /api/programs.</p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-[#dcfce7] bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f0fdf4] text-[#17201A]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody>
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

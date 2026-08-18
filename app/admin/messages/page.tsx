import { connectToDatabase } from "@/lib/mongodb";
import { ContactModel } from "@/models/Contact";

export default async function AdminMessagesPage() {
  await connectToDatabase();
  const messages = await ContactModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Messages</h2>
      <p className="mt-1 text-sm text-[#2f3d34]">Manage via API endpoints: GET/PATCH/DELETE at /api/contact.</p>
      <div className="mt-4 grid gap-3">
        {messages.map((message) => (
          <article key={String(message._id)} className="rounded-2xl border border-[#dcfce7] bg-white p-4">
            <p className="font-semibold text-[#17201A]">{message.name}</p>
            <p className="text-sm text-[#2f3d34]">{message.email}</p>
            <p className="mt-2 text-sm text-[#17201A]">{message.message}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

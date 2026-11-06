import { connectToDatabase } from "@/lib/mongodb";
import { ContactModel } from "@/models/Contact";

export default async function AdminMessagesPage() {
  await connectToDatabase();
  const messages = await ContactModel.find().sort({ createdAt: -1 }).lean();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Inbox</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Messages</h2>
      <p className="mt-2 text-sm text-[#607064]">Messages submitted through the website contact form.</p>
      <div className="mt-6 grid gap-3">
        {messages.length === 0 ? <div className="rounded-2xl border border-dashed border-[#cbdccb] bg-white p-10 text-center"><p className="font-semibold text-[#34483b]">Your inbox is clear</p><p className="mt-1 text-sm text-[#607064]">New messages will appear here.</p></div> : null}
        {messages.map((message) => (
          <article key={String(message._id)} className="rounded-2xl border border-[#e0e9dd] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div><p className="font-bold text-[#17201A]">{message.name}</p><a className="text-sm text-[#1f7a46] underline underline-offset-2" href={`mailto:${message.email}`}>{message.email}</a></div>
              <div className="flex items-center gap-2 text-xs text-[#607064]"><span className={`rounded-full px-2.5 py-1 font-bold ${message.isRead ? "bg-[#f1f4f0] text-[#607064]" : "bg-[#fff4d6] text-[#775314]"}`}>{message.isRead ? "Read" : "Unread"}</span>{new Date(message.createdAt).toLocaleDateString()}</div>
            </div>
            {message.subject ? <p className="mt-4 text-sm font-semibold text-[#34483b]">{message.subject}</p> : null}
            <p className="mt-2 whitespace-pre-wrap text-sm text-[#34483b]">{message.message}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const WHATSAPP_PHONE = "2348154255357";

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const whatsappText = [
      "Hello God'stime Orphanage,",
      "",
      `Full Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "N/A"}`,
      `Subject: ${form.subject || "N/A"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappText)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      setStatus("error");
      setMessage("Unable to open WhatsApp. Please allow pop-ups and try again.");
      return;
    }

    setStatus("success");
    setMessage("WhatsApp opened successfully. Please press send in WhatsApp to complete.");
    setForm(initialState);
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Contact Us</h2>
          <p className="mt-3 text-[#2f3d34]">Reach out to support, volunteer or partner with God&apos;stime Orphanage.</p>
          <div className="mt-6 space-y-2 text-sm text-[#17201A]">
            <p><span className="font-semibold">Address:</span> 6 Alfred Molade Street Kotokoto, Ekete, Delta, Nigeria</p>
            <p><span className="font-semibold">Phone:</span> +234 8154255357</p>
            <p><span className="font-semibold">Email:</span> godstimeorphanagehomedsc@gmail.com</p>
            <p><span className="font-semibold">Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#17201A]">
              Full Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2 outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </label>
            <label className="text-sm font-medium text-[#17201A]">
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2 outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </label>
            <label className="text-sm font-medium text-[#17201A]">
              Phone
              <input
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2 outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </label>
            <label className="text-sm font-medium text-[#17201A]">
              Subject
              <input
                value={form.subject}
                onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2 outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-[#17201A]">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2 outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </label>
          <button
            disabled={status === "sending"}
            className="mt-4 rounded-full bg-[#166534] px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {message ? (
            <p className={`mt-3 text-sm ${status === "success" ? "text-[#166534]" : "text-red-600"}`}>{message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

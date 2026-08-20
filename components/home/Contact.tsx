"use client";

import { useState } from "react";
import Link from "next/link";
import { publicContent } from "@/lib/public-content";
import Reveal from "@/components/ui/Reveal";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  companyName: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.companyName) {
      setStatus("success");
      setFeedback("Thank you. Your message has been received.");
      setForm(initialState);
      return;
    }

    try {
      setStatus("sending");
      setFeedback("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to send message right now.");
      }

      setStatus("success");
      setFeedback("Message sent successfully. Our team will follow up as soon as possible.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send message right now.");
    }
  };

  return (
    <section id="contact" className="bg-[#f5f8f2] px-4 py-18 sm:px-6">
      <Reveal className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="editorial-title mt-2 text-[#17201A]">Contact Us</h2>
          <p className="mt-3 text-[#2f3d34]">
            Reach out to donate, volunteer, sponsor, or discuss partnership opportunities.
          </p>

          <div className="surface-card mt-6 space-y-2 p-5 text-sm text-[#17201A]">
            <p><span className="font-semibold">Visit Us:</span> {publicContent.contact.address}</p>
            <p><span className="font-semibold">Call Us:</span> <a href={`tel:${publicContent.contact.phoneRaw}`} className="text-[#18492f] underline underline-offset-2">{publicContent.contact.phone}</a></p>
            <p><span className="font-semibold">Email Us:</span> <a href={`mailto:${publicContent.contact.email}`} className="text-[#18492f] underline underline-offset-2">{publicContent.contact.email}</a></p>
            <p><span className="font-semibold">Opening Hours:</span> {publicContent.contact.openingHours}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-base btn-secondary">
              Contact Page
            </Link>
            <a
              href={`https://wa.me/${publicContent.contact.phoneRaw.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-primary"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-7" noValidate>
          <input
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.companyName}
            onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))}
            className="hidden"
            name="companyName"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-[#17201A]">
              Full Name
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-1 w-full rounded-xl border border-[#cfe1d1] px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1f7a46]"
              />
            </label>

            <label htmlFor="contact-email" className="text-sm font-semibold text-[#17201A]">
              Email
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="mt-1 w-full rounded-xl border border-[#cfe1d1] px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1f7a46]"
              />
            </label>

            <label htmlFor="contact-phone" className="text-sm font-semibold text-[#17201A]">
              Phone
              <input
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="mt-1 w-full rounded-xl border border-[#cfe1d1] px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1f7a46]"
              />
            </label>

            <label htmlFor="contact-subject" className="text-sm font-semibold text-[#17201A]">
              Subject
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                className="mt-1 w-full rounded-xl border border-[#cfe1d1] px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1f7a46]"
              />
            </label>
          </div>

          <label htmlFor="contact-message" className="mt-4 block text-sm font-semibold text-[#17201A]">
            Message
            <textarea
              id="contact-message"
              required
              name="message"
              rows={5}
              minLength={10}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="mt-1 w-full rounded-xl border border-[#cfe1d1] px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1f7a46]"
            />
          </label>

          <button
            disabled={status === "sending"}
            className="btn-base btn-primary mt-4 disabled:cursor-not-allowed disabled:opacity-70"
            aria-busy={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {feedback ? (
            <p className={`mt-3 text-sm ${status === "success" ? "text-[#166534]" : "text-red-700"}`}>{feedback}</p>
          ) : null}
          <p className="mt-2 text-xs text-[#2f3d34]">
            Messages from this form are sent to our internal contact API for follow-up.
          </p>
        </form>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/types";
import Reveal from "@/components/ui/Reveal";

type EventsProps = {
  events: EventItem[];
};

export default function Events({ events }: EventsProps) {
  const published = events.filter((event) => event.isPublished);

  return (
    <section id="events" className="px-4 py-18 sm:px-6">
      <Reveal className="section-shell">
        <p className="section-label">Community</p>
        <h2 className="editorial-title mt-2 text-[#17201A]">Upcoming Events</h2>
        <p className="mt-2 max-w-2xl text-[#2f3d34]">Only confirmed events are published here.</p>
        {published.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {published.map((event) => (
              <article key={event.id} className="surface-card overflow-hidden transition duration-300 hover:-translate-y-1">
                <Image
                  src={event.imageUrl ?? "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"}
                  alt={event.title}
                  width={1200}
                  height={800}
                  className="h-46 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f7a46]">{new Date(event.date).toLocaleDateString()}</p>
                  <h3 className="mt-1 text-xl font-semibold text-[#17201A]">{event.title}</h3>
                  <p className="mt-2 text-sm text-[#2f3d34]">{event.description}</p>
                  <p className="mt-2 text-xs font-medium text-[#18492f]">{event.location}</p>
                  <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-[#18492f] underline decoration-[#9fc5a5] underline-offset-4">Request Details</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-[#a4c7ad] bg-[#f7fbf5] p-8 text-center">
            <p className="font-semibold text-[#18492f]">No confirmed upcoming events published yet</p>
            <p className="mt-1 text-sm text-[#2f3d34]">Please contact us directly for current outreach opportunities and visits.</p>
            <Link href="/contact" className="btn-base btn-primary mt-4 inline-flex">
              Contact the Team
            </Link>
          </div>
        )}
      </Reveal>
    </section>
  );
}

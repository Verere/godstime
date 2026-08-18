import Image from "next/image";
import type { EventItem } from "@/types";

type EventsProps = {
  events: EventItem[];
};

export default function Events({ events }: EventsProps) {
  const published = events.filter((event) => event.isPublished);

  return (
    <section id="events" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#17201A] sm:text-4xl">Upcoming Events</h2>
        {published.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {published.map((event) => (
              <article key={event.id} className="overflow-hidden rounded-2xl border border-[#dcfce7] bg-white shadow-sm">
                <Image
                  src={event.imageUrl ?? "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"}
                  alt={event.title}
                  width={1200}
                  height={800}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">{new Date(event.date).toLocaleDateString()}</p>
                  <h3 className="mt-1 text-lg font-semibold text-[#17201A]">{event.title}</h3>
                  <p className="mt-2 text-sm text-[#2f3d34]">{event.description}</p>
                  <p className="mt-2 text-xs font-medium text-[#166534]">{event.location}</p>
                  <a href="#contact" className="mt-3 inline-block text-sm font-semibold text-[#166534]">View Details</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-[#86efac] bg-[#f0fdf4] p-8 text-center">
            <p className="font-semibold text-[#166534]">No upcoming events yet</p>
            <p className="mt-1 text-sm text-[#2f3d34]">Check back soon for new community activities and outreach programs.</p>
          </div>
        )}
      </div>
    </section>
  );
}

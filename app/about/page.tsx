import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { publicContent } from "@/lib/public-content";
import { siteSettings } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "About Us", description: "Learn about God'stime Orphanage Home's mission, care approach, and community work in Ekete, Delta State, Nigeria.", path: "/about" });

const valueDescriptions: Record<string, string> = {
  Dignity: "Every child deserves respect and the chance to grow with confidence.",
  Compassion: "Care is delivered with empathy, patience, and consistency.",
  Accountability: "We are committed to transparent communication with supporters.",
  "Child Safety": "Child protection and wellbeing are non-negotiable in our work.",
  Community: "Sustainable care grows when families, volunteers, and partners work together.",
  Stewardship: "Support received is treated as a responsibility to deliver meaningful care.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8] text-[#17201A]">
      <Navbar donationUrl={siteSettings.donationUrl} />
      <main id="main-content" className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl space-y-10">
          <section className="page-hero">
            <p className="section-label">Who we are</p>
            <h1 className="display-title mt-2 max-w-4xl text-[#17201A]">About God&apos;stime Orphanage Home</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#2f3d34]">
              We exist to care for children in vulnerable situations through safe shelter, daily support, and practical opportunities for growth.
            </p>
          </section>

          <section className="content-section">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-3 text-[#2f3d34]">
              God&apos;stime Orphanage Home was established to respond to the needs of children who require stable care and protection.
              Additional historical details are being prepared for publication.
            </p>
            <p className="mt-2 text-xs text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-2 text-[#2f3d34]">{publicContent.mission}</p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-2 text-[#2f3d34]">{publicContent.vision}</p>
            </article>
          </section>

          <section className="content-section">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {publicContent.values.map((value) => (
                <article key={value} className="rounded-xl border border-[#dcfce7] bg-white p-4 shadow-sm">
                  <h3 className="font-semibold">{value}</h3>
                  <p className="mt-1 text-sm text-[#2f3d34]">{valueDescriptions[value]}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="text-2xl font-bold">What We Do</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {publicContent.programAreas.map((program) => (
                <article key={program.key} className="rounded-xl border border-[#dcfce7] bg-white p-4 shadow-sm">
                  <h3 className="font-semibold">{program.title}</h3>
                  <p className="mt-1 text-sm text-[#2f3d34]">{program.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Who We Serve</h2>
              <p className="mt-2 text-[#2f3d34]">
                We serve children without stable parental care and children facing vulnerable life circumstances.
              </p>
            </article>
            <article className="rounded-2xl border border-[#dcfce7] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Our Approach</h2>
              <p className="mt-2 text-[#2f3d34]">
                Our approach combines daily care, emotional support, education support, and collaboration with trusted partners.
              </p>
            </article>
          </section>

          <section className="content-section">
            <h2 className="text-2xl font-bold">Our Future Goals</h2>
            <p className="mt-2 text-[#2f3d34]">
              We aim to strengthen child care quality, expand learning support, and grow responsible community partnerships.
            </p>
            <p className="mt-2 text-xs text-[#5c6d63]">TODO: VERIFY WITH GOD&apos;S TIME ORPHANAGE</p>
          </section>

          <section className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Transparency & Trust</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <p><span className="font-semibold">Official Organization Name:</span> {publicContent.organizationName}</p>
              <p><span className="font-semibold">Registration Status:</span> {publicContent.transparency.registrationStatus}</p>
              <p><span className="font-semibold">Registration Number:</span> {publicContent.transparency.registrationNumber}</p>
              <p><span className="font-semibold">Operating Location:</span> {publicContent.transparency.operatingLocation}</p>
              <p><span className="font-semibold">Contact:</span> {publicContent.contact.phone}, {publicContent.contact.email}</p>
              <p><span className="font-semibold">Leadership:</span> {publicContent.transparency.leadership}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer year={new Date().getFullYear()} donationUrl={siteSettings.donationUrl} />
    </div>
  );
}

import { connectToDatabase } from "@/lib/mongodb";
import { SiteSettingsModel } from "@/models/SiteSettings";

type SettingsView = {
  organizationName?: string;
  email?: string;
  phone?: string;
  donationUrl?: string;
};

export default async function AdminSettingsPage() {
  await connectToDatabase();
  const settings = await SiteSettingsModel.findOne()
    .sort({ updatedAt: -1 })
    .lean<SettingsView | null>();

  return (
    <main id="main-content" className="mx-auto max-w-7xl">
      <p className="section-label">Configuration</p>
      <h2 className="editorial-title mt-1 text-[#17201A]">Site settings</h2>
      <p className="mt-2 text-sm text-[#607064]">Current organization details saved for the website.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Organization", settings?.organizationName],
          ["Contact email", settings?.email],
          ["Phone", settings?.phone],
          ["Donation link", settings?.donationUrl],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-[#e0e9dd] bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#718075]">{label}</p>
            <p className="mt-3 break-words text-sm font-semibold text-[#17201A]">{value || "Not set"}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

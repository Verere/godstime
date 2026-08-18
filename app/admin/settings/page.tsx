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
    <main>
      <h2 className="text-2xl font-bold text-[#17201A]">Site Settings</h2>
      <p className="mt-1 text-sm text-[#2f3d34]">Update settings via PUT /api/settings.</p>

      <div className="mt-4 rounded-2xl border border-[#dcfce7] bg-white p-4 text-sm">
        <p><span className="font-semibold">Organization:</span> {settings?.organizationName ?? "Not set"}</p>
        <p><span className="font-semibold">Email:</span> {settings?.email ?? "Not set"}</p>
        <p><span className="font-semibold">Phone:</span> {settings?.phone ?? "Not set"}</p>
        <p><span className="font-semibold">Donation URL:</span> {settings?.donationUrl ?? "Not set"}</p>
      </div>
    </main>
  );
}

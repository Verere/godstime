import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { siteSettingsSchema } from "@/lib/validation";
import { SiteSettingsModel } from "@/models/SiteSettings";

export async function GET() {
  await connectToDatabase();
  const settings = await SiteSettingsModel.findOne().sort({ updatedAt: -1 }).lean();
  return ok(settings);
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const json = await request.json();
  const parsed = siteSettingsSchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const settings = await SiteSettingsModel.findOneAndUpdate({}, parsed.data, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  }).lean();

  return ok(settings);
}

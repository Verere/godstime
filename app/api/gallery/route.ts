import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { gallerySchema } from "@/lib/validation";
import { GalleryModel } from "@/models/Gallery";

export async function GET() {
  await connectToDatabase();
  const items = await GalleryModel.find({ isPublished: true }).sort({ createdAt: -1 }).lean();
  return ok(items);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const json = await request.json();
  const parsed = gallerySchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const created = await GalleryModel.create(parsed.data);
  return ok(created, 201);
}

import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { gallerySchema } from "@/lib/validation";
import { GalleryModel } from "@/models/Gallery";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  const json = await request.json();
  const parsed = gallerySchema.partial().safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const updated = await GalleryModel.findByIdAndUpdate(id, parsed.data, { new: true }).lean();
  if (!updated) {
    return fail("Gallery item not found", 404);
  }

  return ok(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  await connectToDatabase();
  const deleted = await GalleryModel.findByIdAndDelete(id).lean();
  if (!deleted) {
    return fail("Gallery item not found", 404);
  }

  return ok({ success: true });
}

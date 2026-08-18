import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { deleteImage } from "@/lib/cloudinary";

type Params = { params: Promise<{ publicId: string }> };

export async function DELETE(_: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { publicId } = await params;
  const decoded = decodeURIComponent(publicId);
  await deleteImage(decoded);
  return ok({ success: true });
}

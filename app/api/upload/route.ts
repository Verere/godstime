import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { uploadImage } from "@/lib/cloudinary";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const body = (await request.json()) as { file?: string; folder?: string };

  if (!body.file) {
    return fail("File is required", 422);
  }

  const uploaded = await uploadImage(body.file, body.folder ?? "godstime");

  return ok({
    publicId: uploaded.public_id,
    imageUrl: uploaded.secure_url,
  });
}

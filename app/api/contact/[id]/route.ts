import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { ContactModel } from "@/models/Contact";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  const body = (await request.json()) as { isRead?: boolean };

  await connectToDatabase();
  const updated = await ContactModel.findByIdAndUpdate(
    id,
    { isRead: Boolean(body.isRead) },
    { new: true }
  ).lean();

  if (!updated) {
    return fail("Message not found", 404);
  }

  return ok(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  await connectToDatabase();
  const deleted = await ContactModel.findByIdAndDelete(id).lean();
  if (!deleted) {
    return fail("Message not found", 404);
  }

  return ok({ success: true });
}

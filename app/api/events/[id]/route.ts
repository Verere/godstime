import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { eventSchema } from "@/lib/validation";
import { EventModel } from "@/models/Event";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  const json = await request.json();
  const parsed = eventSchema.partial().safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const updated = await EventModel.findByIdAndUpdate(id, parsed.data, { new: true }).lean();
  if (!updated) {
    return fail("Event not found", 404);
  }

  return ok(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const { id } = await params;
  await connectToDatabase();
  const deleted = await EventModel.findByIdAndDelete(id).lean();
  if (!deleted) {
    return fail("Event not found", 404);
  }

  return ok({ success: true });
}

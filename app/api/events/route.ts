import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { eventSchema } from "@/lib/validation";
import { EventModel } from "@/models/Event";

export async function GET() {
  await connectToDatabase();
  const events = await EventModel.find({ isPublished: true }).sort({ date: 1 }).lean();
  return ok(events);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const json = await request.json();
  const parsed = eventSchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const created = await EventModel.create(parsed.data);
  return ok(created, 201);
}

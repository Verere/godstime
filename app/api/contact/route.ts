import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { contactSchema } from "@/lib/validation";
import { ContactModel } from "@/models/Contact";

export async function GET() {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  await connectToDatabase();
  const messages = await ContactModel.find().sort({ createdAt: -1 }).lean();
  return ok(messages);
}

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const created = await ContactModel.create(parsed.data);
  return ok({ id: created._id.toString(), success: true }, 201);
}

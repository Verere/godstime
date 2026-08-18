import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { programSchema } from "@/lib/validation";
import { ProgramModel } from "@/models/Program";

export async function GET() {
  await connectToDatabase();
  const programs = await ProgramModel.find({ isPublished: true }).sort({ createdAt: -1 }).lean();
  return ok(programs);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const json = await request.json();
  const parsed = programSchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const program = await ProgramModel.create(parsed.data);
  return ok(program, 201);
}

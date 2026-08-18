import { connectToDatabase } from "@/lib/mongodb";
import { fail, ok } from "@/lib/api";
import { isAdmin } from "@/lib/require-admin";
import { testimonialSchema } from "@/lib/validation";
import { TestimonialModel } from "@/models/Testimonial";

export async function GET() {
  await connectToDatabase();
  const testimonials = await TestimonialModel.find({ isPublished: true }).sort({ createdAt: -1 }).lean();
  return ok(testimonials);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return fail("Unauthorized", 401);
  }

  const json = await request.json();
  const parsed = testimonialSchema.safeParse(json);
  if (!parsed.success) {
    return fail(parsed.error.issues[0]?.message ?? "Invalid input", 422);
  }

  await connectToDatabase();
  const created = await TestimonialModel.create(parsed.data);
  return ok(created, 201);
}

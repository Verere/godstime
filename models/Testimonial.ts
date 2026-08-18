import { model, models, Schema, type InferSchemaType } from "mongoose";

const testimonialSchema = new Schema(
  {
    quote: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export type TestimonialDocument = InferSchemaType<typeof testimonialSchema>;

export const TestimonialModel =
  models.Testimonial || model("Testimonial", testimonialSchema);

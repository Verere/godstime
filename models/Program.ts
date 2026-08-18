import { model, models, Schema, type InferSchemaType } from "mongoose";

const programSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    icon: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export type ProgramDocument = InferSchemaType<typeof programSchema>;

export const ProgramModel = models.Program || model("Program", programSchema);

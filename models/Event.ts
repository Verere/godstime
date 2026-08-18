import { model, models, Schema, type InferSchemaType } from "mongoose";

const eventSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    location: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    cloudinaryPublicId: { type: String, trim: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export type EventDocument = InferSchemaType<typeof eventSchema>;

export const EventModel = models.Event || model("Event", eventSchema);

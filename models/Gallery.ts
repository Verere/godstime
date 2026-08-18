import { model, models, Schema, type InferSchemaType } from "mongoose";

const gallerySchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    cloudinaryPublicId: { type: String, required: true, trim: true },
    category: { type: String, trim: true },
    consentStatus: { type: String, trim: true, default: "pending" },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export type GalleryDocument = InferSchemaType<typeof gallerySchema>;

export const GalleryModel = models.Gallery || model("Gallery", gallerySchema);

import { model, models, Schema, type InferSchemaType } from "mongoose";

const siteSettingsSchema = new Schema(
  {
    organizationName: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, trim: true },
    address: { type: String, trim: true },
    donationUrl: { type: String, trim: true },
    socialLinks: {
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
      x: { type: String, trim: true },
      youtube: { type: String, trim: true },
    },
    hero: {
      badge: { type: String, trim: true },
      title: { type: String, trim: true },
      subtitle: { type: String, trim: true },
    },
    impactMetrics: [
      {
        label: { type: String, required: true, trim: true },
        value: { type: Number, required: true },
        suffix: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

export type SiteSettingsDocument = InferSchemaType<typeof siteSettingsSchema>;

export const SiteSettingsModel =
  models.SiteSettings || model("SiteSettings", siteSettingsSchema);

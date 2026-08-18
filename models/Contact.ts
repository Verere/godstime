import { model, models, Schema, type InferSchemaType } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export type ContactDocument = InferSchemaType<typeof contactSchema>;

export const ContactModel = models.Contact || model("Contact", contactSchema);

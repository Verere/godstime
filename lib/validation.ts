import { z } from "zod";

export const programSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  icon: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  isPublished: z.boolean().optional(),
});

export const gallerySchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  imageUrl: z.string().url(),
  cloudinaryPublicId: z.string().min(2),
  category: z.string().optional(),
  consentStatus: z.string().optional(),
  isPublished: z.boolean().optional(),
});

export const eventSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  date: z.coerce.date(),
  location: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  cloudinaryPublicId: z.string().optional(),
  isPublished: z.boolean().optional(),
});

export const testimonialSchema = z.object({
  quote: z.string().min(10),
  name: z.string().min(2),
  role: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  isPublished: z.boolean().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

export const siteSettingsSchema = z.object({
  organizationName: z.string().min(2),
  description: z.string().min(10),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().optional(),
  donationUrl: z.string().url().optional().or(z.literal("")),
  socialLinks: z
    .object({
      facebook: z.string().url().optional().or(z.literal("")),
      instagram: z.string().url().optional().or(z.literal("")),
      x: z.string().url().optional().or(z.literal("")),
      youtube: z.string().url().optional().or(z.literal("")),
    })
    .optional(),
  hero: z
    .object({
      badge: z.string().optional(),
      title: z.string().optional(),
      subtitle: z.string().optional(),
    })
    .optional(),
  impactMetrics: z
    .array(
      z.object({
        label: z.string(),
        value: z.number(),
        suffix: z.string().optional(),
      })
    )
    .optional(),
});

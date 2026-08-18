import mongoose from "mongoose";
import { ProgramModel } from "../models/Program";
import { GalleryModel } from "../models/Gallery";
import { EventModel } from "../models/Event";
import { TestimonialModel } from "../models/Testimonial";
import { SiteSettingsModel } from "../models/SiteSettings";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing.");
}

const seed = async () => {
  await mongoose.connect(MONGODB_URI);

  await Promise.all([
    ProgramModel.deleteMany({}),
    GalleryModel.deleteMany({}),
    EventModel.deleteMany({}),
    TestimonialModel.deleteMany({}),
  ]);

  await ProgramModel.insertMany([
    {
      title: "Education",
      description: "Demo content: quality learning resources and tutoring support.",
      icon: "GraduationCap",
      isPublished: true,
    },
    {
      title: "Healthcare",
      description: "Demo content: medical care, wellness checks and referrals.",
      icon: "HeartPulse",
      isPublished: true,
    },
    {
      title: "Nutrition",
      description: "Demo content: balanced meals and nutritional support.",
      icon: "Soup",
      isPublished: true,
    },
    {
      title: "Skills Development",
      description: "Demo content: life and vocational skills programs.",
      icon: "Wrench",
      isPublished: true,
    },
    {
      title: "Community",
      description: "Demo content: mentorship and community engagement.",
      icon: "Users",
      isPublished: true,
    },
  ]);

  await GalleryModel.insertMany([
    {
      title: "Demo Gallery 1",
      imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-1",
      category: "Education",
      consentStatus: "approved",
      isPublished: true,
    },
    {
      title: "Demo Gallery 2",
      imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-2",
      category: "Community",
      consentStatus: "approved",
      isPublished: true,
    },
    {
      title: "Demo Gallery 3",
      imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-3",
      category: "Nutrition",
      consentStatus: "approved",
      isPublished: true,
    },
    {
      title: "Demo Gallery 4",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-4",
      category: "Education",
      consentStatus: "approved",
      isPublished: true,
    },
    {
      title: "Demo Gallery 5",
      imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-5",
      category: "Events",
      consentStatus: "approved",
      isPublished: true,
    },
    {
      title: "Demo Gallery 6",
      imageUrl: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1400&q=80",
      cloudinaryPublicId: "demo/gallery-6",
      category: "Programs",
      consentStatus: "approved",
      isPublished: true,
    },
  ]);

  await EventModel.insertMany([
    {
      title: "Back-to-School Support Drive",
      description: "Demo content: school supply distribution event.",
      date: new Date("2026-09-12"),
      location: "Godstime Community Hall",
      isPublished: true,
    },
    {
      title: "Community Health Outreach",
      description: "Demo content: preventive health and wellness outreach.",
      date: new Date("2026-10-05"),
      location: "Hope Medical Center",
      isPublished: true,
    },
    {
      title: "Annual Fundraising Gala",
      description: "Demo content: annual impact fundraising event.",
      date: new Date("2026-11-20"),
      location: "Emerald Grand Hotel",
      isPublished: true,
    },
  ]);

  await TestimonialModel.insertMany([
    {
      quote: "Demo content: volunteer testimony about educational transformation.",
      name: "Amina O.",
      role: "Volunteer",
      isPublished: true,
    },
    {
      quote: "Demo content: donor testimony praising transparency and impact.",
      name: "David E.",
      role: "Donor",
      isPublished: true,
    },
    {
      quote: "Demo content: community partner testimony on collaboration.",
      name: "Grace Foundation",
      role: "Community Partner",
      isPublished: true,
    },
  ]);

  await SiteSettingsModel.findOneAndUpdate(
    {},
    {
      organizationName: "God'stime Orphanage",
      description:
        "Demo content: God'stime Orphanage provides care, education, support and opportunities.",
      phone: "+234 800 000 0000",
      email: "hello@godstimeorphanage.org",
      address: "12 Hope Lane, Lagos, Nigeria",
      donationUrl: "https://example.org/donate",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
      },
      hero: {
        badge: "Building Brighter Futures",
        title: "Every Child Deserves a Future Filled With Hope",
        subtitle: "Demo content hero copy.",
      },
      impactMetrics: [
        { label: "Children Supported", value: 120, suffix: "+" },
        { label: "Years of Service", value: 8, suffix: "+" },
        { label: "Educational Programs", value: 15, suffix: "+" },
        { label: "Community Volunteers", value: 50, suffix: "+" },
      ],
    },
    { upsert: true, new: true }
  );

  await mongoose.disconnect();
  console.log("Seed complete.");
};

seed().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exit(1);
});

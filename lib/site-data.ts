import type { EventItem, GalleryItem, Program, SiteSettings, Testimonial } from "@/types";

export const siteSettings: SiteSettings = {
  organizationName: "God'stime Orphanage Home",
  description:
    "God'stime Orphanage Home provides care, support, and opportunity for children in vulnerable situations.",
  phone: "+234 815 425 5357",
  email: "godstimeorphanagehomedsc@gmail.com",
  address: "6 Alfred Molade Street, Kotokoto, Ekete, Delta, Nigeria",
  donationUrl: "/donate",
  socialLinks: {
    facebook: "",
    instagram: "",
    x: "",
    youtube: "",
  },
  hero: {
    badge: "God'stime Orphanage Home",
    title: "Every Child Deserves a Home, Hope & a Future",
    subtitle:
      "We provide shelter, daily care, learning support, and emotional guidance for children in vulnerable situations.",
  },
  impactMetrics: [],
};

export const programs: Program[] = [
  {
    id: "education",
    title: "Education",
    description: "Supporting the children's education and giving them the tools they need to succeed.",
    icon: "GraduationCap",
    isPublished: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Supporting healthcare, medical checkups and general wellbeing.",
    icon: "HeartPulse",
    isPublished: true,
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description: "Providing nutritious meals and meeting the everyday needs of the children.",
    icon: "Soup",
    isPublished: true,
  },
  {
    id: "skills",
    title: "Skills Development",
    description:
      "Equipping children with skills and opportunities that can help them become responsible and independent adults",
    icon: "Wrench",
    isPublished: true,
  },
  {
    id: "emotional",
    title: "Emotional Support",
    description: "Creating an environment where every child knows they matter.",
    icon: "HandHeart",
    isPublished: true,
  },
  {
    id: "community",
    title: "Community",
    description: "Connecting children with mentors, volunteers and trusted networks.",
    icon: "Users",
    isPublished: true,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Creative Learning Session",
    description: "Children participating in arts and learning activities.",
    imageUrl: "/g1.png",
    cloudinaryPublicId: "demo/creative-learning",
    category: "Education",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Outdoor Play Day",
    description: "Healthy physical activity and team games.",
    imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
    cloudinaryPublicId: "demo/outdoor-play",
    category: "Community",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Nutrition Program",
    description: "Fresh meals prepared for children every day.",
    imageUrl: "/5.jpeg",
    cloudinaryPublicId: "demo/nutrition",
    category: "Nutrition",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Classroom Progress",
    description: "Focused support for literacy and numeracy.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    cloudinaryPublicId: "demo/classroom",
    category: "Education",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Mentorship Day",
    description: "Volunteers mentoring and guiding children.",
    imageUrl: "/class.png",
    cloudinaryPublicId: "demo/mentorship",
    category: "Community",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Team Building",
    description: "Group events that foster confidence and belonging.",
    imageUrl: "/4.jpeg",
    cloudinaryPublicId: "demo/team-building",
    category: "Events",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
];

export const events: EventItem[] = [
  // TODO: VERIFY WITH GOD'S TIME ORPHANAGE before publishing upcoming events.
];

export const testimonials: Testimonial[] = [
  // TODO: VERIFY WITH GOD'S TIME ORPHANAGE before publishing testimonials.
];

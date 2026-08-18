import type { EventItem, GalleryItem, Program, SiteSettings, Testimonial } from "@/types";

export const siteSettings: SiteSettings = {
  organizationName: "God'stime Orphanage",
  description:
    "God'stime Orphanage provides care, education, support and opportunities that help children build brighter futures.",
  phone: "+234 800 000 0000",
  email: "hello@godstimeorphanage.org",
  address: "12 Hope Lane, Lagos, Nigeria",
  donationUrl: "https://example.org/donate",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
  hero: {
    badge: "Building Brighter Futures",
    title: "Every Child Deserves a Home, Hope & a Future",
    subtitle:
      "At Godstime Orphanage Home, we provide love, care, protection, education, and hope for vulnerable children, creating a safe environment where every child can learn, grow, and thrive.",
  },
  impactMetrics: [
    { label: "Children Supported", value: 120, suffix: "+" },
    { label: "Years of Service", value: 8, suffix: "+" },
    { label: "Educational Programs", value: 15, suffix: "+" },
    { label: "Community Volunteers", value: 50, suffix: "+" },
  ],
};

export const programs: Program[] = [
  {
    id: "education",
    title: "Education",
    description: "Helping children access quality education and learning resources.",
    icon: "GraduationCap",
    isPublished: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Supporting healthcare, medical checkups and wellbeing.",
    icon: "HeartPulse",
    isPublished: true,
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description: "Providing healthy and balanced meals for growing children.",
    icon: "Soup",
    isPublished: true,
  },
  {
    id: "skills",
    title: "Skills Development",
    description:
      "Helping older children develop useful life and vocational skills.",
    icon: "Wrench",
    isPublished: true,
  },
  {
    id: "emotional",
    title: "Emotional Support",
    description: "Creating an environment where children feel loved and supported.",
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
    imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    cloudinaryPublicId: "demo/team-building",
    category: "Events",
    consentStatus: "approved",
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
];

export const events: EventItem[] = [
  {
    id: "1",
    title: "Back-to-School Support Drive",
    description: "Join us to provide school supplies for children in our care.",
    date: "2026-09-12",
    location: "God'stime Community Hall",
    imageUrl: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=1400&q=80",
    isPublished: true,
  },
  {
    id: "2",
    title: "Community Health Outreach",
    description: "Free checkups and wellness education in partnership with volunteers.",
    date: "2026-10-05",
    location: "Hope Medical Center",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    isPublished: true,
  },
  {
    id: "3",
    title: "Annual Fundraising Gala",
    description: "A night dedicated to expanding opportunities for children.",
    date: "2026-11-20",
    location: "Emerald Grand Hotel",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    isPublished: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The commitment to each child is genuine. I have seen lives transform through education and care.",
    name: "Amina O.",
    role: "Volunteer",
    isPublished: true,
  },
  {
    id: "2",
    quote:
      "Every donation is used meaningfully. Their transparency and impact are inspiring.",
    name: "David E.",
    role: "Donor",
    isPublished: true,
  },
  {
    id: "3",
    quote:
      "Our partnership has strengthened community support systems for vulnerable children.",
    name: "Grace Foundation",
    role: "Community Partner",
    isPublished: true,
  },
];

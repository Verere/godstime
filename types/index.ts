export type Program = {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  isPublished: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  cloudinaryPublicId: string;
  category?: string;
  consentStatus?: string;
  isPublished: boolean;
  createdAt: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  imageUrl?: string;
  isPublished: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  imageUrl?: string;
  isPublished: boolean;
};

export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type SiteSettings = {
  organizationName: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  donationUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    x?: string;
    youtube?: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  impactMetrics: ImpactMetric[];
};

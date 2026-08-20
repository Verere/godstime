export const publicContent = {
  organizationName: "God'stime Orphanage Home",
  coreMessage: "Every Child Deserves a Home, Hope & a Future",
  supportingStatement:
    "We provide shelter, daily care, learning support, and emotional guidance for children in vulnerable situations.",
  locationSummary: "Kotokoto, Ekete, Delta State, Nigeria",
  contact: {
    address: "6 Alfred Molade Street, Kotokoto, Ekete, Delta, Nigeria",
    phone: "+234 815 425 5357",
    phoneRaw: "+2348154255357",
    email: "godstimeorphanagehomedsc@gmail.com",
    openingHours: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  donation: {
    accountNumber: "4091765920",
    bankName: "Polaris Bank",
    accountName: "God'stime Orphanage Home",
    notice:
      "Please verify these recipient details before completing your transfer. If anything looks different, contact us before sending funds.",
  },
  mission:
    "To provide children with love, care, education and opportunities that empower them to build meaningful and independent lives.",
  vision:
    "A world where every child has the opportunity to grow in a safe, loving and supportive environment.",
  values: [
    "Dignity",
    "Compassion",
    "Accountability",
    "Child Safety",
    "Community",
    "Stewardship",
  ],
  qualitativeImpactAreas: [
    "Education & Skills",
    "Daily Care & Nutrition",
    "Health & Wellbeing",
    "Community Support",
  ],
  programAreas: [
    {
      key: "education",
      title: "Education",
      description:
        "We help children stay in school, keep learning, and build confidence for the future.",
      icon: "GraduationCap",
    },
    {
      key: "healthcare",
      title: "Healthcare",
      description:
        "We support regular checkups, treatment access, and healthy routines that protect each child.",
      icon: "HeartPulse",
    },
    {
      key: "nutrition",
      title: "Nutrition",
      description:
        "We provide consistent meals and practical nutrition support for growing children.",
      icon: "Soup",
    },
    {
      key: "skills",
      title: "Skills Development",
      description:
        "We expose children to life and vocational skills that prepare them for independent adulthood.",
      icon: "Wrench",
    },
    {
      key: "emotional",
      title: "Emotional/Psychosocial Support",
      description:
        "We create a nurturing environment where children feel heard, safe, and emotionally supported.",
      icon: "HandHeart",
    },
    {
      key: "community",
      title: "Community Involvement",
      description:
        "We involve trusted volunteers, mentors, and partners who help strengthen each child's support network.",
      icon: "Users",
    },
  ],
  supportUses: [
    "Education materials and school support",
    "Food and daily nutrition",
    "Healthcare and wellbeing support",
    "Clothing and basic needs",
    "Skills development opportunities",
    "A safe and stable living environment",
  ],
  transparency: {
    legalName: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
    registrationStatus: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
    registrationNumber: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
    operatingLocation: "Kotokoto, Ekete, Delta State, Nigeria",
    leadership: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
    annualReports: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
    safeguardingPolicy: "TODO: VERIFY WITH GOD'S TIME ORPHANAGE",
  },
} as const;

export type PublicContent = typeof publicContent;
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import { siteUrl } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "God'stime Orphanage Home | Care and Support in Delta State",
    template: "%s | God'stime Orphanage Home",
  },
  description:
    "God'stime Orphanage Home in Ekete, Delta State provides care, education support, and community partnership for children in vulnerable situations.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "God'stime Orphanage Home",
    "orphanage in Delta State",
    "child care in Ekete Nigeria",
    "support children in Delta State",
    "volunteer with a children's home in Nigeria",
  ],
  openGraph: {
    title: "God'stime Orphanage Home | Care and Support in Delta State",
    description:
      "Learn about care, education support, volunteering, and ways to support God'stime Orphanage Home in Ekete, Delta State.",
    type: "website",
    locale: "en_NG",
    siteName: "God'stime Orphanage Home",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "God'stime Orphanage Home in Delta State, Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "God'stime Orphanage Home | Care and Support in Delta State",
    description:
      "Support God'stime Orphanage Home through donation, volunteering, sponsorship, and partnership.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-3 font-bold text-[#18492f] shadow-lg focus:not-sr-only">
          Skip to main content
        </a>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

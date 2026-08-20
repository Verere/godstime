import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";

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
    default: "God'stime Orphanage Home | Care, Hope, and Opportunity for Children",
    template: "%s | God'stime Orphanage Home",
  },
  description:
    "God'stime Orphanage Home supports children in vulnerable situations through daily care, education support, and community partnership.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "God'stime Orphanage Home",
    "orphanage Nigeria",
    "child care nonprofit",
    "Delta State charity",
    "donate to orphanage",
    "volunteer orphanage",
  ],
  openGraph: {
    title: "God'stime Orphanage Home | Care, Hope, and Opportunity for Children",
    description:
      "Learn how to support God'stime Orphanage Home through donation, volunteering, sponsorship, and partnership.",
    type: "website",
    locale: "en_NG",
    siteName: "God'stime Orphanage Home",
  },
  twitter: {
    card: "summary_large_image",
    title: "God'stime Orphanage Home | Care, Hope, and Opportunity for Children",
    description:
      "Support God'stime Orphanage Home through donation, volunteering, sponsorship, and partnership.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

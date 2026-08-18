import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "God'stime Orphanage | Building Brighter Futures",
  description:
    "God'stime Orphanage provides care, education, support and opportunities that help children build brighter futures.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "God'stime Orphanage | Building Brighter Futures",
    description:
      "God'stime Orphanage provides care, education, support and opportunities that help children build brighter futures.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "God'stime Orphanage | Building Brighter Futures",
    description:
      "God'stime Orphanage provides care, education, support and opportunities that help children build brighter futures.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

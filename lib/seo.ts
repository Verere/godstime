import type { Metadata } from "next";

const configuredUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL
)?.trim();

const normalizedConfiguredUrl = configuredUrl
  ? /^https?:\/\//i.test(configuredUrl.trim())
    ? configuredUrl.trim()
    : `https://${configuredUrl.trim()}`
  : null;

/**
 * Set NEXT_PUBLIC_SITE_URL to the canonical production origin (for example,
 * https://www.example.org). Vercel host variables are fallbacks for previews.
 */
export const siteUrl = new URL(normalizedConfiguredUrl ?? "http://localhost:3000").origin;

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const socialTitle = `${title} | God'stime Orphanage Home`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "God'stime Orphanage Home in Delta State, Nigeria" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

import React from "react";
import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { resolveStandingsPageData } from "@/features/standings/lib/resolve-standings-page";
import { parseGroupQuery } from "@/features/standings/lib/standings-search-params";
import { StandingsPage } from "@/features/standings/standings-page";

type PageProps = {
  searchParams: Promise<{ grup?: string | string[] }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  let canonicalUrl: string | undefined = undefined;

  if (rawSiteUrl) {
    try {
      const parsed = new URL(rawSiteUrl);
      if ((parsed.protocol === "http:" || parsed.protocol === "https:") && parsed.hostname) {
        canonicalUrl = new URL("/klasemen", parsed).toString();
      }
    } catch {
      // Invalid URL - ignore
    }
  }

  return {
    title: "Klasemen Grup — FCS Industrial Cup Sumedang 2026",
    description:
      "Lihat klasemen akhir Grup A dan Grup B FCS Industrial Cup Sumedang 2026, lengkap dengan poin, selisih gol, dan status kelolosan.",
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: "Klasemen Grup — FCS Industrial Cup Sumedang 2026",
      description:
        "Lihat klasemen akhir Grup A dan Grup B FCS Industrial Cup Sumedang 2026, lengkap dengan poin, selisih gol, dan status kelolosan.",
      type: "website",
      url: canonicalUrl,
    },
  };
}

function getCanonicalKlasemenUrl(): string | undefined {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!rawSiteUrl) return undefined;

  try {
    const parsed = new URL(rawSiteUrl);
    if ((parsed.protocol === "http:" || parsed.protocol === "https:") && parsed.hostname) {
      return new URL("/klasemen", parsed).toString();
    }
  } catch {
    // Invalid site URL
  }
  return undefined;
}

export default async function KlasemenRoute({ searchParams }: PageProps) {
  const { grup } = await searchParams;
  const activeGroupId = parseGroupQuery(grup);
  const standingsData = resolveStandingsPageData();

  const canonicalUrl = getCanonicalKlasemenUrl();

  let breadcrumbJsonLd: Record<string, unknown> | null = null;
  if (canonicalUrl) {
    const baseUrlObj = new URL(canonicalUrl);
    const homeUrl = new URL("/", baseUrlObj).toString();

    breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Klasemen",
          item: canonicalUrl,
        },
      ],
    };
  }

  const safeJsonLdString = breadcrumbJsonLd
    ? JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c")
    : null;

  return (
    <PageContainer>
      {safeJsonLdString && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdString }}
        />
      )}
      <StandingsPage data={standingsData} activeGroupId={activeGroupId} />
    </PageContainer>
  );
}

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { matchesPrototypeData } from "@/features/matches/data/matches-prototype-data";
import { resolveMatchDetail } from "@/features/matches/lib/resolve-match-detail";
import { MatchDetailPage } from "@/features/matches/match-detail-page";
import { PageContainer } from "@/components/layout/page-container/page-container";

type PageProps = {
  params: Promise<{ matchId: string }>;
};

export async function generateStaticParams() {
  return matchesPrototypeData.matches.map((match) => ({
    matchId: match.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { matchId } = await params;
  const data = resolveMatchDetail(matchId);

  if (!data) {
    return {
      title: "Pertandingan Tidak Ditemukan | FCS Industrial Cup Sumedang 2026",
      description: "Halaman detail pertandingan yang dicari tidak ditemukan.",
    };
  }

  const scoreText =
    data.match.teamAScore !== null && data.match.teamBScore !== null
      ? `, skor ${data.match.teamAScore}–${data.match.teamBScore}`
      : "";

  return {
    title: `${data.teamA.name} vs ${data.teamB.name} | FCS Industrial Cup Sumedang 2026`,
    description: `Hasil resmi pertandingan ${data.phase.name} ${data.teamA.name} vs ${data.teamB.name}${scoreText}, FCS Industrial Cup Sumedang 2026.`,
  };
}

function getEventStatusSchema(status: string): string {
  switch (status) {
    case "finished":
      return "https://schema.org/EventFinished";
    case "live":
      return "https://schema.org/EventInProgress";
    case "postponed":
      return "https://schema.org/EventPostponed";
    case "cancelled":
      return "https://schema.org/EventCancelled";
    case "scheduled":
    default:
      return "https://schema.org/EventScheduled";
  }
}

export default async function MatchDetailRoute({ params }: PageProps) {
  const { matchId } = await params;
  const data = resolveMatchDetail(matchId);

  if (!data) {
    notFound();
  }

  // Point 9: Complete JSON-LD with url, schema status mapping, and safe serialization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${data.teamA.name} vs ${data.teamB.name}`,
    url: `https://fcs.sumedang.go.id/pertandingan/${data.match.id}`,
    startDate: `${data.match.date}T${data.match.startTime}:00+07:00`,
    eventStatus: getEventStatusSchema(data.match.status),
    location: data.venue
      ? {
          "@type": "Place",
          name: data.venue.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: data.venue.district || "Sumedang",
            addressRegion: "Jawa Barat",
            addressCountry: "ID",
          },
        }
      : undefined,
    competitor: [
      { "@type": "SportsTeam", name: data.teamA.name },
      { "@type": "SportsTeam", name: data.teamB.name },
    ],
    organizer: {
      "@type": "Organization",
      name: data.competition.name,
    },
  };

  // Safe JSON serialization against script injection
  const safeJsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdString }}
      />
      <MatchDetailPage data={data} />
    </PageContainer>
  );
}

import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MatchesPage } from "@/features/matches/matches-page";
import { MatchListSkeleton } from "@/features/matches/components/match-list-skeleton";
import { PageContainer } from "@/components/layout/page-container/page-container";

export const metadata: Metadata = {
  title: "Jadwal dan Hasil Pertandingan | FCS Industrial Cup Sumedang 2026",
  description:
    "Lihat jadwal lengkap dan hasil pertandingan resmi FCS Industrial Cup Sumedang 2026. Temukan skor, fase grup, semifinal, dan final futsal Sumedang.",
};

export default function PertandinganPage() {
  return (
    <Suspense
      fallback={
        <main style={{ padding: "1.5rem 0 3rem" }}>
          <PageContainer>
            <MatchListSkeleton />
          </PageContainer>
        </main>
      }
    >
      <MatchesPage />
    </Suspense>
  );
}

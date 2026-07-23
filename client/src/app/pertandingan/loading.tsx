import React from "react";
import { MatchListSkeleton } from "@/features/matches/components/match-list-skeleton";
import { PageContainer } from "@/components/layout/page-container/page-container";

export default function PertandinganLoading() {
  return (
    <main style={{ padding: "1.5rem 0 3rem" }}>
      <PageContainer>
        <MatchListSkeleton />
      </PageContainer>
    </main>
  );
}

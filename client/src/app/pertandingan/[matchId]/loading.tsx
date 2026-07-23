import React from "react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { MatchDetailSkeleton } from "@/features/matches/components/detail/match-detail-skeleton";

export default function Loading() {
  return (
    <PageContainer>
      <MatchDetailSkeleton />
    </PageContainer>
  );
}

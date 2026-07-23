import React from "react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { StandingsLoadingSkeleton } from "@/features/standings/components/standings-loading-skeleton";

export default function KlasemenLoading() {
  return (
    <PageContainer>
      <StandingsLoadingSkeleton />
    </PageContainer>
  );
}

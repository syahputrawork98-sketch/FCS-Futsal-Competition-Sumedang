import React from "react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { MatchDetailNotFound } from "@/features/matches/components/detail/match-detail-not-found";

export default function NotFound() {
  return (
    <PageContainer>
      <MatchDetailNotFound />
    </PageContainer>
  );
}

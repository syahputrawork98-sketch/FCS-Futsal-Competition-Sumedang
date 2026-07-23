"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { MatchDetailErrorState } from "@/features/matches/components/detail/match-detail-error-state";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageContainer>
      <MatchDetailErrorState reset={reset} />
    </PageContainer>
  );
}

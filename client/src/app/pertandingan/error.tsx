"use client";

import React, { useEffect } from "react";
import { MatchesErrorState } from "@/features/matches/components/matches-error-state";
import { PageContainer } from "@/components/layout/page-container/page-container";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PertandinganError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error internally if needed
    console.error("Pertandingan page error boundary caught error:", error);
  }, [error]);

  return (
    <main style={{ padding: "3rem 0" }}>
      <PageContainer>
        <MatchesErrorState onReset={reset} />
      </PageContainer>
    </main>
  );
}

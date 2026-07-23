"use client";

import React, { useEffect } from "react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { StandingsErrorState } from "@/features/standings/components/standings-states";

export default function KlasemenError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error internally if needed
    console.error("[Klasemen Route Error]", error);
  }, [error]);

  return (
    <PageContainer>
      <StandingsErrorState reset={reset} />
    </PageContainer>
  );
}

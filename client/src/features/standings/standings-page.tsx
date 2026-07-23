import React from "react";
import type { StandingsPageData } from "./types/standings.types";
import { ClientStandingsContainer } from "./client-standings-container";

type StandingsPageProps = {
  data: StandingsPageData;
};

export function StandingsPage({ data }: StandingsPageProps) {
  return <ClientStandingsContainer data={data} />;
}

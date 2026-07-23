import React from "react";
import type { MatchGroupedByDate, MatchesPrototypeData } from "../types/matches.types";
import { DateGroup } from "./date-group";

type MatchListProps = {
  groupedMatches: MatchGroupedByDate[];
  prototypeData: MatchesPrototypeData;
};

export function MatchList({ groupedMatches, prototypeData }: MatchListProps) {
  return (
    <div className="match-list-wrapper">
      {groupedMatches.map((group) => (
        <DateGroup key={group.date} group={group} prototypeData={prototypeData} />
      ))}
    </div>
  );
}

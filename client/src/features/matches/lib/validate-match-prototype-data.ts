import { matchesPrototypeData } from "../data/matches-prototype-data";
import { matchEventsPrototypeData } from "../data/match-events-prototype-data";
import {
  matchPlayersPrototypeData,
  matchTeamOfficialsPrototypeData,
} from "../data/match-participants-prototype-data";
import {
  matchAssignmentsPrototypeData,
  matchOfficialsPrototypeData,
} from "../data/match-officials-prototype-data";

export function validateMatchPrototypeData(): void {
  // 1. Matches count = 16
  if (matchesPrototypeData.matches.length !== 16) {
    throw new Error(
      `[Data Integrity Error] Expected 16 matches, but found ${matchesPrototypeData.matches.length}.`
    );
  }

  // 2. Events count = 71
  if (matchEventsPrototypeData.length !== 71) {
    throw new Error(
      `[Data Integrity Error] Expected 71 events, but found ${matchEventsPrototypeData.length}.`
    );
  }

  // 3. Assignments count = 80
  if (matchAssignmentsPrototypeData.length !== 80) {
    throw new Error(
      `[Data Integrity Error] Expected 80 assignments, but found ${matchAssignmentsPrototypeData.length}.`
    );
  }

  const matchMap = new Map(matchesPrototypeData.matches.map((m) => [m.id, m]));
  const teamMap = new Map(matchesPrototypeData.teams.map((t) => [t.id, t]));
  const phaseMap = new Map(matchesPrototypeData.phases.map((p) => [p.id, p]));
  const groupMap = new Map(matchesPrototypeData.groups.map((g) => [g.id, g]));
  const venueMap = new Map(matchesPrototypeData.venues.map((v) => [v.id, v]));
  const playerMap = new Map(matchPlayersPrototypeData.map((p) => [p.id, p]));
  const officialMap = new Map(matchOfficialsPrototypeData.map((o) => [o.id, o]));

  // 4. Validate every MatchRecord references (Requirement 2)
  const numbersSeen = new Set<number>();

  for (const m of matchesPrototypeData.matches) {
    // Unique match numbers
    if (numbersSeen.has(m.number)) {
      throw new Error(`[Data Integrity Error] Duplicate match number: ${m.number}.`);
    }
    numbersSeen.add(m.number);

    // teamAId validity
    if (!teamMap.has(m.teamAId)) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} references invalid teamAId: '${m.teamAId}'.`
      );
    }

    // teamBId validity
    if (!teamMap.has(m.teamBId)) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} references invalid teamBId: '${m.teamBId}'.`
      );
    }

    // teamAId != teamBId
    if (m.teamAId === m.teamBId) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} teamAId and teamBId cannot be identical ('${m.teamAId}').`
      );
    }

    // phaseId validity
    if (!phaseMap.has(m.phaseId)) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} references invalid phaseId: '${m.phaseId}'.`
      );
    }

    // groupId validity and phase matching
    if (m.groupId !== null) {
      if (!groupMap.has(m.groupId)) {
        throw new Error(
          `[Data Integrity Error] Match ${m.id} references invalid groupId: '${m.groupId}'.`
        );
      }
      // Group phase (FAS01) must have groupId; knockout phases (FAS02, FAS03, FAS04) should not have group
      if (m.phaseId !== "FAS01") {
        throw new Error(
          `[Data Integrity Error] Match ${m.id} in phase '${m.phaseId}' should not have groupId '${m.groupId}'.`
        );
      }
    } else {
      if (m.phaseId === "FAS01") {
        throw new Error(
          `[Data Integrity Error] Group stage match ${m.id} in phase 'FAS01' must have a groupId.`
        );
      }
    }

    // venueId validity
    if (!venueMap.has(m.venueId)) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} references invalid venueId: '${m.venueId}'.`
      );
    }
  }

  // 5. Each match has exactly 5 assignments
  for (const m of matchesPrototypeData.matches) {
    const assignments = matchAssignmentsPrototypeData.filter(
      (a) => a.matchId === m.id
    );
    if (assignments.length !== 5) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} expected 5 assignments, found ${assignments.length}.`
      );
    }
  }

  // 6. Validate events
  for (const evt of matchEventsPrototypeData) {
    const m = matchMap.get(evt.matchId);
    if (!m) {
      throw new Error(
        `[Data Integrity Error] Event ${evt.id} references invalid matchId: ${evt.matchId}.`
      );
    }

    if (evt.teamId !== m.teamAId && evt.teamId !== m.teamBId) {
      throw new Error(
        `[Data Integrity Error] Event ${evt.id} teamId ${evt.teamId} is not teamA (${m.teamAId}) or teamB (${m.teamBId}) of match ${m.id}.`
      );
    }

    if (evt.playerId && !playerMap.has(evt.playerId)) {
      throw new Error(
        `[Data Integrity Error] Event ${evt.id} references invalid playerId: ${evt.playerId}.`
      );
    }

    if (evt.relatedPlayerId && !playerMap.has(evt.relatedPlayerId)) {
      throw new Error(
        `[Data Integrity Error] Event ${evt.id} references invalid relatedPlayerId: ${evt.relatedPlayerId}.`
      );
    }
  }

  // 7. Validate team officials
  for (const ofi of matchTeamOfficialsPrototypeData) {
    if (!teamMap.has(ofi.teamId)) {
      throw new Error(
        `[Data Integrity Error] Official ${ofi.id} references invalid teamId: ${ofi.teamId}.`
      );
    }
  }

  // 8. Validate match assignments
  for (const assign of matchAssignmentsPrototypeData) {
    if (!matchMap.has(assign.matchId)) {
      throw new Error(
        `[Data Integrity Error] Assignment ${assign.id} references invalid matchId: ${assign.matchId}.`
      );
    }
    if (!officialMap.has(assign.officialId)) {
      throw new Error(
        `[Data Integrity Error] Assignment ${assign.id} references invalid officialId: ${assign.officialId}.`
      );
    }
  }

  // 9. Score integrity check from goal events for all finished matches
  for (const m of matchesPrototypeData.matches) {
    if (m.status !== "finished" || m.teamAScore === null || m.teamBScore === null) {
      continue;
    }

    const events = matchEventsPrototypeData
      .filter((e) => e.matchId === m.id && e.verificationStatus === "verified")
      .sort((a, b) => (a.minute !== b.minute ? a.minute - b.minute : a.id.localeCompare(b.id)));

    let calcScoreA = 0;
    let calcScoreB = 0;

    for (const evt of events) {
      if (evt.type === "goal") {
        if (evt.teamId === m.teamAId) calcScoreA++;
        else if (evt.teamId === m.teamBId) calcScoreB++;
      } else if (evt.type === "own_goal") {
        if (evt.teamId === m.teamAId) calcScoreB++;
        else if (evt.teamId === m.teamBId) calcScoreA++;
      }
    }

    if (calcScoreA !== m.teamAScore || calcScoreB !== m.teamBScore) {
      throw new Error(
        `[Data Integrity Error] Match ${m.id} score mismatch: official is ${m.teamAScore}-${m.teamBScore}, derived from events is ${calcScoreA}-${calcScoreB}.`
      );
    }
  }

  // 10. Specific PRT013 check
  const prt013 = matchMap.get("PRT013");
  if (!prt013) throw new Error("[Data Integrity Error] PRT013 not found.");
  if (prt013.teamAScore !== 2 || prt013.teamBScore !== 2) {
    throw new Error(`[Data Integrity Error] PRT013 normal score must be 2-2.`);
  }
  if (
    !prt013.penaltyResult ||
    prt013.penaltyResult.teamAScore !== 4 ||
    prt013.penaltyResult.teamBScore !== 3 ||
    prt013.penaltyResult.winnerTeamId !== "TIM002"
  ) {
    throw new Error(`[Data Integrity Error] PRT013 penalty result must be 4-3 for TIM002.`);
  }

  // 11. Specific PRT016 check
  const prt016 = matchMap.get("PRT016");
  if (!prt016) throw new Error("[Data Integrity Error] PRT016 not found.");
  if (prt016.teamAScore !== 2 || prt016.teamBScore !== 1) {
    throw new Error(`[Data Integrity Error] PRT016 score must be 2-1.`);
  }

  const prt016Events = matchEventsPrototypeData.filter((e) => e.matchId === "PRT016");
  if (prt016Events.length !== 4) {
    throw new Error(
      `[Data Integrity Error] PRT016 expected 4 events, found ${prt016Events.length}.`
    );
  }

  const prt016Assignments = matchAssignmentsPrototypeData.filter(
    (a) => a.matchId === "PRT016"
  );
  if (prt016Assignments.length !== 5) {
    throw new Error(
      `[Data Integrity Error] PRT016 expected 5 assignments, found ${prt016Assignments.length}.`
    );
  }
}

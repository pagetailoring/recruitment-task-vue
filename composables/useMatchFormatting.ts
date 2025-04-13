import type { Team, FormattedMatch } from '~/types';

export function useMatchFormatting() {
  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);
  const matchesStore = useMatchesStore();
  const { allMatches } = storeToRefs(matchesStore);

  // Combine the two match-getting functions into one with an optional limit parameter
  function getTeamMatches(teamId: number, limit: number | null = null): FormattedMatch[] {
    if (!teamId || !allMatches.value.length) return [];

    // Filter matches for the team
    const matches = allMatches.value.filter((match) => match.homeTeamId === teamId || match.awayTeamId === teamId);

    // Sort matches by date (most recent first)
    const sortedMatches = [...matches].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Apply limit if provided
    const limitedMatches = limit ? sortedMatches.slice(0, limit) : sortedMatches;

    // Format matches for display
    return limitedMatches.map((match) => {
      const isHome = match.homeTeamId === teamId;
      const homeTeamObj = teams.value.find((t: Team) => t.id === match.homeTeamId);
      const awayTeamObj = teams.value.find((t: Team) => t.id === match.awayTeamId);

      // Determine result for the team
      let result: MatchResult;
      if (isHome) {
        result =
          match.homeScore > match.awayScore
            ? MatchResult.Win
            : match.homeScore < match.awayScore
              ? MatchResult.Loss
              : MatchResult.Draw;
      } else {
        result =
          match.awayScore > match.homeScore
            ? MatchResult.Win
            : match.awayScore < match.homeScore
              ? MatchResult.Loss
              : MatchResult.Draw;
      }

      return {
        id: match.id,
        date: match.date,
        homeTeam: homeTeamObj?.name || 'Unknown Team',
        awayTeam: awayTeamObj?.name || 'Unknown Team',
        homeScore: match.homeScore,
        awayScore: match.awayScore,
        result,
        isHome,
      };
    });
  }

  return { getTeamMatches };
}

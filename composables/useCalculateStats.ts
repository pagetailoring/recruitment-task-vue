import type { Team, Match } from '~/types';

export function useCalculateStats() {
  const empty = {
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    recentForm: [],
  };

  function calculateTeamStats(teamsData: Team[], matches: Match[]): Team[] {
    // Create a map to store team stats
    const teamStats: Record<number, Team> = {};

    // Initialize stats for each team - ensure points start at exactly 0
    teamsData.forEach((team: Team) => {
      teamStats[team.id] = {
        ...team,
        // Explicitly set to 0 to override any existing value
        ...empty,
      };
    });

    // Process each match to update team stats
    matches.forEach((match) => {
      const homeTeam = teamStats[match.homeTeamId];
      const awayTeam = teamStats[match.awayTeamId];

      if (!homeTeam || !awayTeam) return; // Skip if team not found

      // Update goals
      homeTeam.goalsFor += match.homeScore;
      homeTeam.goalsAgainst += match.awayScore;
      awayTeam.goalsFor += match.awayScore;
      awayTeam.goalsAgainst += match.homeScore;

      // Determine result and update points
      if (match.homeScore > match.awayScore) {
        // Home team wins
        homeTeam.wins += 1;
        homeTeam.points += 3; // 3 points for a win
        homeTeam.recentForm.unshift(MatchResult.Win);
        awayTeam.losses += 1;
        // No points for a loss (0)
        awayTeam.recentForm.unshift(MatchResult.Loss);
      } else if (match.homeScore < match.awayScore) {
        // Away team wins
        awayTeam.wins += 1;
        awayTeam.points += 3; // 3 points for a win
        awayTeam.recentForm.unshift(MatchResult.Win);
        homeTeam.losses += 1;
        // No points for a loss (0)
        homeTeam.recentForm.unshift(MatchResult.Loss);
      } else {
        // Draw
        homeTeam.draws += 1;
        homeTeam.points += 1; // 1 point for a draw
        homeTeam.recentForm.unshift(MatchResult.Draw);
        awayTeam.draws += 1;
        awayTeam.points += 1; // 1 point for a draw
        awayTeam.recentForm.unshift(MatchResult.Draw);
      }
    });

    // Limit recent form to last 5 matches and reverse for display (most recent on right)
    Object.values(teamStats).forEach((team) => {
      team.recentForm = team.recentForm.slice(0, 5).reverse();

      // Final points calculation to ensure accuracy
      team.points = team.wins * 3 + team.draws;
    });

    return Object.values(teamStats);
  }

  return { calculateTeamStats, empty };
}

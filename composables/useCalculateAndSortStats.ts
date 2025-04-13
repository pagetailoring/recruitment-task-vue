import type { Team, Match } from '~/types';

export function useCalculateAndSortStats() {
  const { calculateTeamStats } = useCalculateStats();

  function getSortedAndCalculatedData(teamsData: Team[], matches: Match[]) {
    // Calculate points and positions based on matches
    const teamsWithStats = calculateTeamStats(teamsData, matches);

    // Sort teams by points (descending) to determine positions
    const sortedTeams = [...teamsWithStats].sort((a, b) => b.points - a.points);

    // Assign positions
    sortedTeams.forEach((team, index) => {
      team.position = index + 1;
    });

    return sortedTeams;
  }

  return { getSortedAndCalculatedData };
}

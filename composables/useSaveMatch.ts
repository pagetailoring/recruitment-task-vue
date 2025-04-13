export function useSaveMatch() {
  const { calculateTeamStats, empty } = useCalculateStats();
  const viewState = useSuccessNotification();
  const { showSuccessMessage } = viewState;

  const matchesStore = useMatchesStore();
  const { allMatches } = storeToRefs(matchesStore);

  const selectedState = useSelectedTeamState();
  const { teamMatches } = storeToRefs(selectedState);

  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);

  const editStore = useEditMatchResultStore();
  const { editingMatch, editAwayScore, editHomeScore, isEditingResultOpen } = storeToRefs(editStore);

  function saveMatchResult() {
    if (!editingMatch.value) return;

    // Validate scores
    if (editHomeScore.value < 0 || editHomeScore.value > 7 || editAwayScore.value < 0 || editAwayScore.value > 7) {
      alert('Scores must be between 0 and 7');
      return;
    }

    // Find the match in allMatches
    const matchIndex = allMatches.value.findIndex((m) => m.id === editingMatch.value?.id);
    if (matchIndex === -1) return;

    // Update the match scores
    allMatches.value[matchIndex].homeScore = editHomeScore.value;
    allMatches.value[matchIndex].awayScore = editAwayScore.value;

    // Update the formatted match in teamMatches
    const teamMatchIndex = teamMatches.value.findIndex((m) => m.id === editingMatch.value?.id);
    if (teamMatchIndex !== -1) {
      const updatedMatch = { ...teamMatches.value[teamMatchIndex] };
      updatedMatch.homeScore = editHomeScore.value;
      updatedMatch.awayScore = editAwayScore.value;

      // Update result (W/L/D) for the selected team
      const isHome = updatedMatch.isHome;
      if (isHome) {
        updatedMatch.result =
          editHomeScore.value > editAwayScore.value
            ? MatchResult.Win
            : editHomeScore.value < editAwayScore.value
              ? MatchResult.Loss
              : MatchResult.Draw;
      } else {
        updatedMatch.result =
          editAwayScore.value > editHomeScore.value
            ? MatchResult.Win
            : editAwayScore.value < editHomeScore.value
              ? MatchResult.Loss
              : MatchResult.Draw;
      }

      teamMatches.value[teamMatchIndex] = updatedMatch;
    }

    // Recalculate team stats
    const teamsData = teams.value.map((team) => ({
      ...team,
      ...empty,
    }));

    const teamsWithStats = calculateTeamStats(teamsData, allMatches.value);

    // Sort teams by points (descending) to determine positions
    const sortedTeams = [...teamsWithStats].sort((a, b) => {
      // First sort by points
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      // If points are equal, sort by goal difference
      const aGoalDiff = a.goalsFor - a.goalsAgainst;
      const bGoalDiff = b.goalsFor - b.goalsAgainst;
      if (bGoalDiff !== aGoalDiff) {
        return bGoalDiff - aGoalDiff;
      }
      // If goal difference is equal, sort by goals scored
      if (b.goalsFor !== a.goalsFor) {
        return b.goalsFor - a.goalsFor;
      }
      // If everything is equal, sort alphabetically
      return a.name.localeCompare(b.name);
    });

    // Assign positions
    sortedTeams.forEach((team, index) => {
      team.position = index + 1;
    });

    teams.value = sortedTeams;

    showSuccessMessage();

    // Close edit mode
    isEditingResultOpen.value = false;
    editingMatch.value = null;
  }

  return { saveMatchResult };
}

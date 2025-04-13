import { computed, ref, watch } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { FormattedMatch, Team } from '~/types';
import { useArrayFind } from '@vueuse/core';

export const useSelectedTeamState = defineStore('teamDetails', () => {
  const loadingState = useAppLoadingState();
  const { isLoadingMatches } = storeToRefs(loadingState);
  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);
  const view = useAppState();
  const { routeTeamId } = storeToRefs(view);

  // Store state
  const teamMatches = ref<FormattedMatch[]>([]);
  const isTeamMatches = ref<boolean>(false);

  const selectedTeam = useArrayFind(teams, (team: Team) => team.id === routeTeamId.value);
  const isSelectedTeam = computed(() => !!selectedTeam.value);

  watch(selectedTeam, (val) => {
    if (val) {
      isLoadingMatches.value = true;
      updateTeamMatches(routeTeamId.value);
      isTeamMatches.value = true;
    } else {
      isTeamMatches.value = false;
      teamMatches.value = [];
    }
  });

  const { getTeamMatches } = useMatchFormatting();
  const updateTeamMatches = async (teamId: number) => {
    try {
      // Get all matches for the team
      teamMatches.value = getTeamMatches(teamId);
    } catch (error) {
      console.error('Error fetching team matches:', error);
      teamMatches.value = [];
    } finally {
      isLoadingMatches.value = false;
    }
  };

  return { selectedTeam, isSelectedTeam, teamMatches, isTeamMatches };
});

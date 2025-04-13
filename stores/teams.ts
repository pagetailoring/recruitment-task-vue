import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { Team, TeamsResponse } from '~/types';

import { useCalculateAndSortStats } from '~/composables/useCalculateAndSortStats';

export const useTeamsStore = defineStore('teams', () => {
  const loadingState = useAppLoadingState();
  const { isLoading } = storeToRefs(loadingState);
  const matchesStore = useMatchesStore();
  const { allMatches } = storeToRefs(matchesStore);

  // Store state
  const teams = ref<Team[]>([]);

  const { getSortedAndCalculatedData } = useCalculateAndSortStats();

  const fetchTeams = async () => {
    isLoading.value = true;

    try {
      // Add artificial delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 800));

      const data = await $fetch<TeamsResponse>('/data/teams.json');

      allMatches.value = data.matches || [];
      const teamsData = data.teams || [];

      teams.value = getSortedAndCalculatedData(teamsData, allMatches.value);
    } catch (error) {
      console.error('Error fetching teams:', error);
      teams.value = [];
      allMatches.value = [];
    } finally {
      isLoading.value = false;
      console.log('🍍 data ready');
    }
  };

  return { teams, fetchTeams };
});

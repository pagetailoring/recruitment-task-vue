import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { Team } from '~/types';
import { useLocalStorage } from '@vueuse/core';

export const useFavoriteTeamStore = defineStore('favoriteTeam', () => {
  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);

  const favoriteTeamId = useLocalStorage<number>('favID', 0, {
    initOnMounted: true,
  });

  const favoriteTeam = computed(() => {
    return teams.value.find((team) => team.id === favoriteTeamId.value);
  });

  function toggleFavoriteTeam(team: Team) {
    favoriteTeamId.value = favoriteTeamId.value === team.id ? 0 : team.id;
  }

  return { favoriteTeamId, favoriteTeam, toggleFavoriteTeam };
});

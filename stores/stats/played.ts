import { computed } from 'vue';
import { defineStore } from 'pinia';
import type { Team } from '~/types';

export const useTeamStatsStore = defineStore('teamStats', () => {
  // Computed property to calculate games played for each team
  const gamesPlayed = computed(() => {
    return (team: Team): number => {
      return team.wins + team.draws + team.losses;
    };
  });

  return { gamesPlayed };
});

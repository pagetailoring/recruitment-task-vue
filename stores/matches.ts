import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Match } from '~/types';

export const useMatchesStore = defineStore('matches', () => {
  const allMatches = ref<Match[]>([]);

  return { allMatches };
});

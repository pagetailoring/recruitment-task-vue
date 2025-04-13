import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { FormattedMatch } from '~/types';

export const useEditMatchResultStore = defineStore('edit', () => {
  const isEditingResultOpen = ref<boolean>(false);

  const editingMatch = ref<FormattedMatch | null>(null);
  const editHomeScore = ref<number>(0);
  const editAwayScore = ref<number>(0);

  function cancelEditMatch() {
    isEditingResultOpen.value = false;
    editingMatch.value = null;
  }

  function startEditingMatch(match: FormattedMatch) {
    editingMatch.value = { ...match };
    editHomeScore.value = match.homeScore;
    editAwayScore.value = match.awayScore;
    isEditingResultOpen.value = true;
  }

  return { editingMatch, editAwayScore, editHomeScore, isEditingResultOpen, cancelEditMatch, startEditingMatch };
});

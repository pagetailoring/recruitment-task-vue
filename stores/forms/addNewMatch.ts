import { ref, watchEffect } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { Match } from '~/types';
import { useArrayFindLast } from '@vueuse/core';

export const useAddMatchStore = defineStore('addMatch', () => {
  const view = useAppState();
  const { routeTeamId } = storeToRefs(view);

  const matchesStore = useMatchesStore();
  const { allMatches } = storeToRefs(matchesStore);
  const last = useArrayFindLast(allMatches, (match: Match) => match.id > 0);

  // form fields
  const homeScore = ref<number>(0);
  const awayScore = ref<number>(0);
  const homeTeamId = ref<number>(0);
  const awayTeamId = ref<number>(0);
  const dateMatch = ref<string>('2023-08-05');
  const isError = ref<boolean>(false);

  function reset() {
    homeScore.value = 0;
    awayScore.value = 0;
    homeTeamId.value = 0;
    awayTeamId.value = 0;
  }

  function triggerError() {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 500);
  }

  const appState = useAppState();
  const { isOpenAddMatch } = storeToRefs(appState);

  function cancel() {
    isOpenAddMatch.value = false;
  }

  function submit() {
    if (awayTeamId.value !== 0 && homeTeamId.value !== 0) {
      // @todo validate date here on in form

      createNewMatch(last.value.id);
      isOpenAddMatch.value = false;
    } else triggerError();
  }

  watchEffect(() => {
    if (isOpenAddMatch.value) {
      // date from last match
      dateMatch.value = last.value?.date ?? dateMatch.value;
      // Preselect team in form when opened from team detail view.
      if (routeTeamId.value) {
        if (homeTeamId.value === 0) homeTeamId.value = routeTeamId.value;
        else if (awayTeamId.value === 0 && homeTeamId.value !== 0) {
          awayTeamId.value = routeTeamId.value;
        }
      }
    }
  });

  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);
  const { getSortedAndCalculatedData } = useCalculateAndSortStats();

  function createNewMatch(prevMatchId: number) {
    const newMatch = {
      id: prevMatchId + 1,
      date: dateMatch.value,
      homeTeamId: homeTeamId.value,
      awayTeamId: awayTeamId.value,
      homeScore: homeScore.value,
      awayScore: awayScore.value,
    };

    allMatches.value.push(newMatch);

    teams.value = getSortedAndCalculatedData(teams.value, allMatches.value);
    reset();
  }

  return { awayTeamId, awayScore, homeTeamId, homeScore, dateMatch, isError, cancel, submit };
});

import { computed, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { Team } from '~/types';
import { SortDirection, SortField } from '~/utils';

export const useTeamsTableSortingState = defineStore('teamTableSorting', () => {
  // Store state
  const sortBy = ref<SortField>(SortField.Position);
  const sortDirection = ref<SortDirection>(SortDirection.Asc);

  function toggleSortDirection(field: SortField) {
    if (sortBy.value === field) {
      // Toggle direction if clicking the same field
      sortDirection.value = sortDirection.value === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc;
    } else {
      // Set new field and reset direction to ascending
      sortBy.value = field;
      sortDirection.value = SortDirection.Asc;
    }
  }

  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);

  const filteredAndSortedTeams = computed<Team[]>(() => {
    // First filter the teams
    const filtered = teams.value;

    // Then sort the filtered results
    return [...filtered].sort((a, b) => {
      let comparison = 0;

      if (sortBy.value === SortField.Name) {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy.value === SortField.Points) {
        comparison = a.points - b.points;
      } else if (sortBy.value === SortField.Wins) {
        comparison = a.wins - b.wins;
      } else if (sortBy.value === SortField.Draws) {
        comparison = a.draws - b.draws;
      } else if (sortBy.value === SortField.Losses) {
        comparison = a.losses - b.losses;
      } else if (sortBy.value === SortField.GoalsFor) {
        comparison = a.goalsFor - b.goalsFor;
      } else if (sortBy.value === SortField.GoalsAgainst) {
        comparison = a.goalsAgainst - b.goalsAgainst;
      } else {
        // Default sort by position
        comparison = a.position - b.position;
      }

      // Reverse for descending order
      return sortDirection.value === SortDirection.Asc ? comparison : -comparison;
    });
  });

  return { filteredAndSortedTeams, sortBy, sortDirection, toggleSortDirection };
});

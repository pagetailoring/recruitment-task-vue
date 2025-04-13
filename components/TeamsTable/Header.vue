<script lang="ts" setup>
const state = useTeamsTableSortingState();
const { sortBy, sortDirection } = storeToRefs(state);

const columns = ref([
  { enumId: 'Position', lable: 'Pos' },
  { enumId: null, lable: '' },
  { enumId: 'Name', lable: 'Team' },
  { enumId: 'Points', lable: 'Points' },
  { enumId: null, lable: 'Played' },
  { enumId: 'Wins', lable: 'W' },
  { enumId: 'Draws', lable: 'D' },
  { enumId: 'Losses', lable: 'L' },
  { enumId: 'GoalsFor', lable: 'GF' },
  { enumId: 'GoalsAgainst', lable: 'GA' },
  { enumId: null, lable: 'Form' },
]);
</script>

<template>
  <thead class="bg-gray-50 dark:bg-gray-700">
    <tr>
      <TeamsTableHeaderCell
        v-for="({ enumId, lable }, idx) in columns"
        :key="idx"
        :lable
        :is-pointer="enumId === null ? false : true"
        @click="enumId ? state.toggleSortDirection(SortField[enumId]) : null"
      >
        <TeamsTableSortIcon
          v-if="enumId"
          :is-visible="sortBy === SortField[enumId]"
          :is-asc="sortDirection === SortDirection.Asc"
        />
      </TeamsTableHeaderCell>
    </tr>
  </thead>
</template>

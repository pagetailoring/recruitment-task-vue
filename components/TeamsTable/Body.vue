<script lang="ts" setup>
const sortState = useTeamsTableSortingState();
const { filteredAndSortedTeams } = storeToRefs(sortState);

const statsStore = useTeamStatsStore();
const { gamesPlayed } = storeToRefs(statsStore);

const favoriteStore = useFavoriteTeamStore();
const { favoriteTeamId } = storeToRefs(favoriteStore);
</script>

<template>
  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
    <tr
      v-for="team in filteredAndSortedTeams"
      :key="team.id"
      class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
      :class="{ 'bg-blue-50 dark:bg-blue-900/20': favoriteTeamId === team.id }"
    >
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>
          {{ team.position }}
        </TeamsTableTextCell>
      </TeamsTableRowCell>
      <td>
        <LazyFavoriteToggleButtonMini :team class="z-5" />
      </td>
      <TeamsTableRowCell :id="team.id">
        <div class="flex items-center">
          <TeamsTableTextCell>
            {{ team.name }}
          </TeamsTableTextCell>
        </div>
      </TeamsTableRowCell>

      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.points }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ gamesPlayed(team) }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.wins }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.draws }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.losses }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.goalsFor }}</TeamsTableTextCell>
      </TeamsTableRowCell>
      <TeamsTableRowCell :id="team.id">
        <TeamsTableTextCell>{{ team.goalsAgainst }}</TeamsTableTextCell>
      </TeamsTableRowCell>

      <TeamsTableRowCell :id="team.id">
        <div class="flex space-x-1">
          <UiMatchResultDot v-for="(result, index) in team.recentForm" :key="index" :result :is-smaller="true" />
        </div>
      </TeamsTableRowCell>
    </tr>
  </tbody>
</template>

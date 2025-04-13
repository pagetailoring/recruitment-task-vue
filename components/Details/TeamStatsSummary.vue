<script lang="ts" setup>
const { team } = defineProps<{
  team?: Team | undefined;
}>();

const statsStore = useTeamStatsStore();
const { gamesPlayed } = storeToRefs(statsStore);
</script>

<template>
  <div class="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
    <h4 class="text-lg font-medium mb-3 dark:text-white">Season Summary</h4>
    <div class="grid grid-cols-4 gap-4">
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">Played</p>
        <p class="text-2xl font-bold dark:text-white">
          {{ gamesPlayed(team) }}
        </p>
      </div>
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">Won</p>
        <p class="text-2xl font-bold text-green-600 dark:text-green-400">
          {{ team.wins }}
        </p>
      </div>
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">Drawn</p>
        <p class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
          {{ team.draws }}
        </p>
      </div>
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">Lost</p>
        <p class="text-2xl font-bold text-red-600 dark:text-red-400">
          {{ team.losses }}
        </p>
      </div>
    </div>
  </div>
</template>

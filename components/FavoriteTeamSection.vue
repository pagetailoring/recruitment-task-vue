<script lang="ts" setup>
const { getTeamMatches } = useMatchFormatting();
const favoriteStore = useFavoriteTeamStore();
const { favoriteTeam } = storeToRefs(favoriteStore);

// Update the computed property to use the new function
const favoriteTeamRecentMatches = computed<FormattedMatch[]>(() => {
  if (!favoriteTeam.value) return [];
  return getTeamMatches(favoriteTeam.value.id, 5);
});
</script>

<!-- Favorite Team Section (only shown when a favorite team is selected) -->
<template>
  <div class="mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div class="p-4 bg-blue-50 dark:bg-blue-900 border-b border-blue-100 dark:border-blue-800">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-blue-800 dark:text-blue-200">
            <span class="mr-2">⭐</span> {{ favoriteTeam.name }} - Recent Form
          </h2>
          <NuxtLink
            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            :to="`/team/${favoriteTeam.id}`"
          >
            View Full Details
          </NuxtLink>
        </div>
      </div>

      <div class="p-6">
        <div v-if="favoriteTeamRecentMatches.length === 0" class="text-center py-4 text-gray-500 dark:text-gray-400">
          No recent matches available
        </div>
        <div v-else>
          <div class="mt-2">
            <div class="flex space-x-3">
              <UiMatchResultDot
                v-for="(match, index) in favoriteTeamRecentMatches"
                :key="index"
                :result="match.result"
              />
            </div>
            <UiMatchResultDesc />
          </div>

          <!-- Recent Matches Table -->
          <div class="mt-6 overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <FavoriteRecentMatchesTableHeader />
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <FavoriteRecentMatchesTableRecord v-for="match in favoriteTeamRecentMatches" :key="match.id" :match />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

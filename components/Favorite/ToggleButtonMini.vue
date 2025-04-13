<script lang="ts" setup>
const { team } = defineProps<{
  team?: Team | undefined;
}>();

const favoriteStore = useFavoriteTeamStore();
const { favoriteTeamId } = storeToRefs(favoriteStore);
const { toggleFavoriteTeam } = favoriteStore;
</script>

<template>
  <UiButton
    :class="{
      'bg-yellow-500 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': favoriteTeamId === team.id,
      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600':
        favoriteTeamId !== team.id,
    }"
    class="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    title="Set as favorite team"
    @click="toggleFavoriteTeam(team)"
  >
    <SvgoStar class="h-5 w-5" />
  </UiButton>
</template>

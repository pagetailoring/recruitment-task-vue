<script lang="ts" setup>
const selectedState = useSelectedTeamState();
const { selectedTeam } = storeToRefs(selectedState);

const favoriteStore = useFavoriteTeamStore();
const { favoriteTeamId } = storeToRefs(favoriteStore);
const { toggleFavoriteTeam } = favoriteStore;
</script>

<template>
  <UiButton
    class="flex items-center px-3 py-2 rounded-md transition-colors"
    :class="{
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': favoriteTeamId === selectedTeam.id,
      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600':
        favoriteTeamId !== selectedTeam.id,
    }"
    @click="toggleFavoriteTeam(selectedTeam)"
  >
    <SvgoStar class="h-5 w-5 mr-1" />
    {{ favoriteTeamId === selectedTeam.id ? 'Favorite Team' : 'Set as Favorite' }}
  </UiButton>
</template>

<script lang="ts" setup>
const loadingState = useAppLoadingState();
const { isLoading } = storeToRefs(loadingState);

const favoriteStore = useFavoriteTeamStore();
const { favoriteTeam } = storeToRefs(favoriteStore);
</script>

<template>
  <div>
    <template v-if="!isLoading">
      <LazyTeamsTableView />
      <FavoriteTeamSection v-if="favoriteTeam" />
    </template>
  </div>
</template>

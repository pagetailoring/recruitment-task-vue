<script setup lang="ts">
const appState = useAppState();
const { isOpenEditTeamDetails } = storeToRefs(appState);
</script>

<template>
  <div>
    <slot />
    <LazyFormEditTeam v-if="isOpenEditTeamDetails" />
  </div>
</template>

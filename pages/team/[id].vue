<script lang="ts" setup>
const loadingState = useAppLoadingState();
const { isLoading } = storeToRefs(loadingState);

const selectedState = useSelectedTeamState();
const { isSelectedTeam } = storeToRefs(selectedState);

definePageMeta({
  layout: 'team',
});
</script>

<!-- Team Details Page -->
<template>
  <div>
    <div v-if="!isLoading" class="team-details py-6">
      <div class="flex justify-between items-center mb-6">
        <LinkBackToHomePage />
        <LazyFavoriteToggleButtonWithLabel v-if="isSelectedTeam" />
      </div>

      <LazyTeamDetails v-if="isSelectedTeam" />
    </div>
  </div>
</template>

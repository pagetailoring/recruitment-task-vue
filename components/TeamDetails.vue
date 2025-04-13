<script lang="ts" setup>
const viewState = useSuccessNotification();
const { isEditSuccess } = storeToRefs(viewState);

const loadingState = useAppLoadingState();
const { isLoadingMatches } = storeToRefs(loadingState);

const selectedState = useSelectedTeamState();
const { selectedTeam, teamMatches, isTeamMatches } = storeToRefs(selectedState);

const editStore = useEditMatchResultStore();
const { isEditingResultOpen } = storeToRefs(editStore);
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <LazyDetailsTeamHeader :team="selectedTeam" />

    <div class="p-6">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        <LazyDetailsTeamInfo :team="selectedTeam" />
        <LazyDetailsTeamStats :team="selectedTeam" />
      </div>
    </div>

    <section class="p-6 border-t border-gray-200 dark:border-gray-700">
      <h3 class="text-xl font-semibold mb-4 dark:text-white">All Matches</h3>

      <LazyUiSuccessMessage v-if="isEditSuccess" />

      <LazyFormEditMatch v-if="isEditingResultOpen" />

      <div>
        <div class="mb-6">
          <h4 class="text-lg font-medium mb-2 dark:text-white">Recent Form</h4>
          <div class="flex space-x-3">
            <UiMatchResultDot v-for="(result, index) in selectedTeam.recentForm" :key="index" :result />
          </div>
          <UiMatchResultDesc />
        </div>

        <LazyDetailsTeamStatsSummary :team="selectedTeam" />

        <LazyLoadingSpiner :is-smaller="true" />
        <div v-if="!isTeamMatches && !isLoadingMatches" class="text-center py-8 text-gray-500 dark:text-gray-400">
          <span>No match history available</span>
        </div>
        <LazyDetailsTeamMatchesTable v-if="isTeamMatches" :team-matches="teamMatches" />
      </div>
    </section>
  </div>
</template>

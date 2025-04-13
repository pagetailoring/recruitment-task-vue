<script lang="ts" setup>
const loadingState = useAppLoadingState();
const { isLoading, isLoadingMatches } = storeToRefs(loadingState);

const { isSmaller = false } = defineProps<{
  isSmaller?: boolean | undefined;
}>();
</script>

<!-- Loading State -->
<template>
  <div
    v-if="isLoading || isLoadingMatches"
    class="flex justify-center items-center"
    :class="isSmaller ? 'py-8' : 'py-20'"
  >
    <div
      class="animate-spin rounded-full border-t-2 border-b-2 border-blue-500"
      :class="isSmaller ? 'h-8 w-8' : 'h-12 w-12'"
    ></div>
  </div>
</template>

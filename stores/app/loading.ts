import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppLoadingState = defineStore('load', () => {
  const isLoading = ref<boolean>(true);
  const isLoadingMatches = ref<boolean>(false);

  return { isLoading, isLoadingMatches };
});

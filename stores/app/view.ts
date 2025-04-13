import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppState = defineStore('view', () => {
  // Separated isOpen variables from logic sotres to load less os app start
  const isOpenAddMatch = ref<boolean>(false);
  const isOpenEditTeamDetails = ref<boolean>(false);

  const route = useRoute();
  const routeTeamId = computed(() => {
    return route.name === 'team-id' ? Number(route.params.id) : null;
  });

  return { isOpenAddMatch, isOpenEditTeamDetails, routeTeamId };
});

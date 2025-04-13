import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import type { Team } from '~/types';

export const useTeamEditFormStore = defineStore('editTeam', () => {
  const selectedState = useSelectedTeamState();
  const { selectedTeam } = storeToRefs(selectedState);
  const teamsStore = useTeamsStore();
  const { teams } = storeToRefs(teamsStore);
  const success = useSuccessNotification();
  const { showSuccessMessage } = success;
  const appState = useAppState();
  const { isOpenEditTeamDetails } = storeToRefs(appState);

  // Store state
  const editCoach = ref<string>('');
  const editStadium = ref<string>('');

  function cancelEditTeamDetails() {
    editCoach.value = '';
    editStadium.value = '';
    isOpenEditTeamDetails.value = false;
  }

  function startEditingTeamDetails() {
    if (!selectedTeam.value) return;

    editCoach.value = selectedTeam.value.coach;
    editStadium.value = selectedTeam.value.stadium;
    isOpenEditTeamDetails.value = true;
  }

  function saveTeamDetails() {
    if (!selectedTeam.value) return;

    // Find the team in the teams array
    const teamIndex = teams.value.findIndex((t: Team) => t.id === selectedTeam.value?.id);
    if (teamIndex === -1) return;

    // Update the team's coach and stadium
    teams.value[teamIndex].coach = editCoach.value;
    teams.value[teamIndex].stadium = editStadium.value;

    // Update the selected team
    selectedTeam.value.coach = editCoach.value;
    selectedTeam.value.stadium = editStadium.value;

    showSuccessMessage();

    // Close the modal
    isOpenEditTeamDetails.value = false;
  }

  return {
    editCoach,
    editStadium,

    cancelEditTeamDetails,
    saveTeamDetails,
    startEditingTeamDetails,
  };
});

<script lang="ts" setup>
import { onKeyStroke } from '@vueuse/core';

const editTeam = useTeamEditFormStore();
const { editCoach, editStadium } = storeToRefs(editTeam);
const { cancelEditTeamDetails, saveTeamDetails } = editTeam;

onKeyStroke('Enter', () => saveTeamDetails());
onKeyStroke('Escape', () => cancelEditTeamDetails());
</script>

<!-- Add this modal for editing team details -->
<template>
  <UiModal title="Edit Team Details">
    <form>
      <div class="space-y-4 mb-6">
        <FormInputText v-model="editCoach" name="coach" label="Coach" placeholder="Coach name" />
        <FormInputText v-model="editStadium" name="stadium" label="Stadium" placeholder="Stadium name" />
      </div>

      <div class="flex justify-end space-x-3">
        <FormButtonGray @click="cancelEditTeamDetails"> Cancel </FormButtonGray>
        <FormButtonBlue type="submit" @click="saveTeamDetails"> Save Details </FormButtonBlue>
      </div>
    </form>
  </UiModal>
</template>

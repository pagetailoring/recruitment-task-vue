<script lang="ts" setup>
const addMatchStore = useAddMatchStore();
const { awayTeamId, awayScore, homeTeamId, homeScore, dateMatch, isError } = storeToRefs(addMatchStore);
const { cancel, submit } = addMatchStore;

const teamsStore = useTeamsStore();
const { teams } = storeToRefs(teamsStore);

onKeyStroke('Enter', () => submit());
onKeyStroke('Escape', () => cancel());
</script>

<template>
  <UiModal title="Add Match Result">
    <form class="mb-6">
      <div class="grid items-center mx-auto mb-4">
        <FormInputText v-model="dateMatch" name="date" label="Match Date" placeholder="Enter valid date" />
      </div>
      <div class="grid items-center mb-6">
        <FormSelect v-model.number="homeTeamId" :second-value="awayTeamId" name="homeTeam" label="Home" :teams />
        <div class="text-center self-end font-semibold dark:text-white pt-3 -mb-4">vs</div>
        <FormSelect v-model.number="awayTeamId" :second-value="homeTeamId" name="awayTeam" label="Away" :teams />
      </div>

      <div class="flex items-center justify-center space-x-4">
        <FormInputNumber v-model.number="homeScore" name="home" label="Home Score" />
        <div class="text-xl font-bold dark:text-white self-end p-1">-</div>
        <FormInputNumber v-model.number="awayScore" name="away" label="Away Score" />
      </div>
    </form>

    <div class="flex justify-end mt-8 space-x-3">
      <FormButtonGray @click="cancel"> Cancel </FormButtonGray>
      <UiButton
        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 focus:outline-none"
        :class="isError ? 'hover:bg-red-700' : 'hover:bg-blue-700'"
        @click="submit"
      >
        Add Result
      </UiButton>
    </div>
  </UiModal>
</template>

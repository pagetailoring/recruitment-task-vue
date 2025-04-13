<script lang="ts" setup>
const editStore = useEditMatchResultStore();
const { editingMatch, editAwayScore, editHomeScore } = storeToRefs(editStore);
const { cancelEditMatch } = editStore;
const { saveMatchResult } = useSaveMatch();

onKeyStroke('Enter', () => saveMatchResult());
onKeyStroke('Escape', () => cancelEditMatch());
</script>

<template>
  <UiModal title="Edit Match Result">
    <form>
      <div class="flex items-center justify-between mb-4">
        <div class="text-center">
          <p class="font-semibold dark:text-white">{{ editingMatch?.homeTeam }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Home)</p>
        </div>

        <div class="text-center">
          <p class="font-semibold dark:text-white">vs</p>
        </div>

        <div class="text-center">
          <p class="font-semibold dark:text-white">{{ editingMatch?.awayTeam }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Away)</p>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-4">
        <FormInputNumber v-model.number="editHomeScore" name="home" label="Home Score" />
        <div class="text-xl font-bold dark:text-white self-end p-1">-</div>
        <FormInputNumber v-model.number="editAwayScore" name="away" label="Away Score" />
      </div>

      <div class="flex justify-end mt-6 space-x-3">
        <FormButtonGray @click="cancelEditMatch"> Cancel </FormButtonGray>
        <FormButtonBlue type="submit" @click="saveMatchResult"> Save Result </FormButtonBlue>
      </div>
    </form>
  </UiModal>
</template>

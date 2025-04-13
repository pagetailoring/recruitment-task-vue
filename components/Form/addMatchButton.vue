<script lang="ts" setup>
const appState = useAppState();
const { isOpenAddMatch } = storeToRefs(appState);
</script>

<template>
  <FormButtonBlue @click="isOpenAddMatch = true"> Add New Match </FormButtonBlue>
</template>

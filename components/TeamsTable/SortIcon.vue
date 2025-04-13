<script lang="ts" setup>
const { isVisible, isAsc } = defineProps<{
  isVisible?: boolean | undefined;
  isAsc?: boolean | undefined;
}>();
</script>

<template>
  <svg
    v-if="isVisible"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path v-if="isAsc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
  </svg>
</template>

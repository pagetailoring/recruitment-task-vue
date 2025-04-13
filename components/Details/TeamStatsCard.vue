<script lang="ts" setup>
const { stat, label } = defineProps<{
  stat?: number | undefined;
  label?: string | undefined;
}>();
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
    <h4 v-if="label" class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">{{ label }}</h4>
    <p v-if="stat" class="text-2xl font-bold text-gray-900 dark:text-white">{{ stat }}</p>
  </div>
</template>

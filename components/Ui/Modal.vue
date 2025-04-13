<script lang="ts" setup>
const { title = 'Form' } = defineProps<{
  title?: string | undefined;
}>();
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full">
      <h3 class="text-xl font-bold mb-4 dark:text-white">{{ title }}</h3>

      <slot></slot>
    </div>
  </div>
</template>

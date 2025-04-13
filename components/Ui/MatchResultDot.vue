<script lang="ts" setup>
const { result, isSmaller = false } = defineProps<{
  result?: 'W' | 'L' | 'D' | undefined;
  isSmaller?: boolean | undefined;
}>();
</script>

<template>
  <span
    class="flex items-center justify-center text-white text-sm font-bold rounded-full"
    :class="[
      {
        'bg-green-500': result === 'W',
        'bg-red-500': result === 'L',
        'bg-yellow-500': result === 'D',
      },
      isSmaller ? 'w-6 h-6' : 'w-10 h-10',
    ]"
  >
    {{ result }}
  </span>
</template>

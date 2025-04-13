<script lang="ts" setup>
const { lable, isPointer = true } = defineProps<{
  lable?: string | undefined;
  isPointer?: boolean | undefined;
}>();

const className = computed(() => {
  return `px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${isPointer ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''}`;
});
</script>

<template>
  <th scope="col" :class="className">
    <div class="flex items-center space-x-1">
      <span>{{ lable }}</span>
      <slot />
    </div>
  </th>
</template>

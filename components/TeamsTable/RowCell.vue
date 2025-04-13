<script lang="ts" setup>
const { id } = defineProps<{
  id?: number | undefined;
}>();
</script>

<template>
  <td>
    <NuxtLink :to="`/team/${id}`" class="flex items-center whitespace-nowrap px-4 h-[3.5rem]">
      <slot />
    </NuxtLink>
  </td>
</template>

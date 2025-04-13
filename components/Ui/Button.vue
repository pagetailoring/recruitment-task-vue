<script lang="ts" setup>
const { type = 'button' } = defineProps<{
  type?: 'button' | 'submit' | 'reset' | undefined;
}>();
</script>

<template>
  <button :type="type"><slot /></button>
</template>

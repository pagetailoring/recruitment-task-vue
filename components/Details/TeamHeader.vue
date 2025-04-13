<script lang="ts" setup>
const { team } = defineProps<{
  team?: Team | undefined;
}>();
</script>

<template>
  <div class="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
    <h2 class="text-3xl font-bold">{{ team.name }}</h2>
    <p class="text-blue-100">Position: #{{ team.position }} • Points: {{ team.points }}</p>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError }>();

const handleError = () => {
  clearError({ redirect: '/' });
};

onMounted(() => {
  console.clear();
  setTimeout(() => handleError(), 100);
  console.log('redirect 🚀');
});
</script>

<template>
  <div id="__page">
    <div id="__scroll" class="main error">
      <h1>{{ props.error.statusCode }}</h1>
      <button type="button" class="btn" aria-label="home" @click="handleError">
        <span class="action"> &larr;</span>
      </button>
    </div>
  </div>
</template>

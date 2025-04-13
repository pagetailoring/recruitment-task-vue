<script setup lang="ts">
const appState = useAppState();
const { isOpenAddMatch } = storeToRefs(appState);

const store = useTeamsStore();

onMounted(() => {
  store.fetchTeams();
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <TheHeader />

    <main class="container mx-auto grow px-4 py-8">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <TheFooter />

    <LazyFormAddNewMatch v-if="isOpenAddMatch" />
  </div>
</template>

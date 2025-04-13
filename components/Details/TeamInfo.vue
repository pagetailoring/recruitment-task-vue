<script lang="ts" setup>
const { team } = defineProps<{
  team?: Team | undefined;
}>();

const editTeamStore = useTeamEditFormStore();
const { startEditingTeamDetails } = editTeamStore;
</script>

<template>
  <section>
    <div class="flex items-center mb-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ team.name }}</h2>
      <span
        class="ml-3 px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      >
        #{{ team.position }}
      </span>
    </div>

    <div class="space-y-3">
      <div class="flex items-center space-x-2">
        <SvgoCalendar class="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p class="dark:text-gray-300"><strong>Founded:</strong> {{ team.founded }}</p>
      </div>
      <div class="flex items-center space-x-2">
        <SvgoHouse class="h-5 w-5 text-gray-500 dark:text-gray-400" />

        <p class="dark:text-gray-300">
          <strong>Stadium:</strong> {{ team.stadium }}
          <LazyFormButtonBasic @click="startEditingTeamDetails">Edit</LazyFormButtonBasic>
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <SvgoCoach class="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p class="dark:text-gray-300"><strong>Coach:</strong> {{ team.coach }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { match } = defineProps<{
  match?: Match | undefined;
}>();
</script>

<template>
  <tr v-if="match" class="hover:bg-gray-50 dark:hover:bg-gray-700">
    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
      {{ match.date }}
    </td>
    <td class="px-4 py-3 whitespace-nowrap">
      <div class="flex items-center">
        <span :class="{ 'font-bold': match.isHome }" class="text-gray-900 dark:text-white">
          {{ match.homeTeam }}
        </span>
        <span class="mx-2 text-gray-500 dark:text-gray-400">vs</span>
        <span :class="{ 'font-bold': !match.isHome }" class="text-gray-900 dark:text-white">
          {{ match.awayTeam }}
        </span>
      </div>
    </td>
    <td class="px-4 py-3 whitespace-nowrap">
      <div class="flex items-center space-x-2">
        <span class="text-gray-900 dark:text-white font-medium"> {{ match.homeScore }} - {{ match.awayScore }} </span>
        <UiMatchResultDot :result="match.result" :is-smaller="true" />
      </div>
    </td>
  </tr>
</template>

<script lang="ts" setup>
const { teamMatches } = defineProps<{
  teamMatches?: Array<Match> | undefined;
}>();

const editStore = useEditMatchResultStore();
const { startEditingMatch } = editStore;

const headers = ref(['Date', 'Match', 'Result', 'Actions']);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-700" @click="consolIt">
        <tr>
          <th
            v-for="(label, idx) in headers"
            :key="idx"
            scope="col"
            class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
          >
            {{ label }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="match in teamMatches" :key="match.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
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
              <span class="text-gray-900 dark:text-white font-medium">
                {{ match.homeScore }} - {{ match.awayScore }}
              </span>
              <UiMatchResultDot :result="match.result" :is-smaller="true" />
            </div>
          </td>
          <td class="px-4 py-3 whitespace-nowrap">
            <LazyFormButtonBasic @click="startEditingMatch(match)">Edit Result</LazyFormButtonBasic>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

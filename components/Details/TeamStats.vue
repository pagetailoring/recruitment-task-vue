<script lang="ts" setup>
const { team } = defineProps<{
  team?: Team | undefined;
}>();
</script>

<template>
  <section>
    <h3 class="text-xl font-semibold mb-4 dark:text-white">Team Stats</h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <DetailsTeamStatsCard label="Points" :stat="team.points" />
      <DetailsTeamStatsCard label="Goals Scored" :stat="team.goalsFor" />
      <DetailsTeamStatsCard label="Goals Conceded" :stat="team.goalsAgainst" />
    </div>
  </section>
</template>

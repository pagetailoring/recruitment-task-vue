<script lang="ts" setup>
defineProps<{
  label?: string;
  modelValue: number | undefined;
  secondValue: number | undefined;
  name: string;
  teams: Array<Team>;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void;
}>();
</script>

<template>
  <div class="grid w-full">
    <label :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 p-1">
      {{ label ? label : name }}
    </label>

    <select
      :id="name"
      :name="name"
      class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      :value="modelValue"
      @change="emit('update:modelValue', Number($event.target.value))"
    >
      <option disabled value="0">Choose {{ label }} team...</option>
      <option v-for="team in teams" :key="team.id" :value="team.id" :disabled="secondValue === team.id ? true : false">
        {{ team.name }}
      </option>
    </select>
  </div>
</template>

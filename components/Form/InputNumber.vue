<script lang="ts" setup>
defineProps<{
  label?: string | undefined;
  modelValue: number;
  name: string;
}>();

const emit = defineEmits<{ (event: 'update:modelValue', value: number): void }>();
</script>

<template>
  <div class="grid justify-items-center">
    <label :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label ? label : name }}
    </label>
    <input
      :id="name"
      v-bind="$attrs"
      type="number"
      :name="name"
      min="0"
      max="7"
      class="w-16 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      :value="modelValue"
      @change="emit('update:modelValue', Number($event.target?.value))"
    />
  </div>
</template>

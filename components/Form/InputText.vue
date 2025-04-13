<script lang="ts" setup>
defineProps<{
  label?: string | undefined;
  placeholder?: string | undefined;
  modelValue: number | undefined;
  name: string;
}>();

const emit = defineEmits<{ (event: 'update:modelValue', value: number): void }>();
</script>

<template>
  <div class="grid">
    <label :for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 p-1">
      {{ label ? label : name }}
    </label>
    <input
      :id="name"
      v-bind="$attrs"
      type="text"
      :name="name"
      :placeholder="placeholder ? placeholder : 'enter ' + name"
      class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>

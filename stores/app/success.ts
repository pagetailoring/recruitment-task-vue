import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSuccessNotification = defineStore('success', () => {
  const isEditSuccess = ref<boolean>(false);

  function showSuccessMessage() {
    // Show success message
    isEditSuccess.value = true;
    setTimeout(() => {
      isEditSuccess.value = false;
    }, 3000);
  }

  return { isEditSuccess, showSuccessMessage };
});

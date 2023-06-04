import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', () => {
    const accessToken = ref();
    const refreshToken = ref();
    return {accessToken, refreshToken};
});
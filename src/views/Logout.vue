<template>
  <h1>Log out...</h1>
  <!-- Error -->
  <div class="text-left mt-6 text-yellow-800">
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();

    async function onLogout() {
      logout();
      if (!error.value) {
        router.push({
          name: "Login",
          params: {},
        });
      }
    }

    onLogout();
    return { error };
  },
};
</script>

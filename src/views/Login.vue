<template>
  <div class="mt-8 max-w-md mx-auto">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="email"
              placeholder="vanA@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="password"
              placeholder="Example"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold bg-blue-600"
          >
            Sign In
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold cursor-not-allowed bg-blue-600"
            disabled
          >
            Loading.....
          </button>
        </div>
      </form>

      <!-- Error -->
      <div class="text-left mt-6 text-yellow-800">
        <span v-if="error">{{ error }}</span>
      </div>
      <!-- Direction-->

      <div class="w-full text-center mt-6 inline-block">
        <span class="font-medium">I'm a new user.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="font-bold"
            >Sign Up
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn";
export default {
  setup() {
    const { error, isPending, signin } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    // func submit signin
    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) {
        await router.push({
          name: "Home",
          params: {},
        });
      }
    }
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>

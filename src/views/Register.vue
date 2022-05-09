<template>
  <div class="mt-8">
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
              placeholder="Enter your password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <label for="phone" class="flex flex-col">
            <span class="font-semibold">Phone Number</span>
            <input
              id="phone"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="tel"
              pattern="[0]{1}[0-9]{9}"
              placeholder="0..."
              v-model="phone"
            />
          </label>
        </div>
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="text"
              placeholder="Nguyen Van A"
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label for="address" class="flex flex-col">
            <span class="font-semibold">Address</span>
            <input
              id="address"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="text"
              placeholder="Enter your address"
              v-model="address"
            />
          </label>
        </div>
        <div class="row flex justify-between items-center">
          <label for="age" class="flex flex-col w-1/2">
            <span class="font-semibold">Age</span>
            <input
              id="age"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="date"
              min="1945-01-01"
              max="2022-01-01"
              placeholder="Enter your age"
              v-model="age"
            />
          </label>
          <label for="sex" class="flex flex-col w-1/3">
            <span class="font-semibold">Sex</span>
            <div class="flex items-center gap-4">
              <input id="male" type="radio" value="male" v-model="sex" />
              <label for="male">Male</label><br />
            </div>
            <div class="flex items-center gap-4">
              <input
                id="female"
                type="radio"
                value="female"
                v-model="sex"
              /><label for="female">Female</label><br />
            </div>
          </label>
        </div>

        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold bg-blue-600"
          >
            Sign Up
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

      <div class="w-full text-center my-6 inline-block">
        <span class="font-medium">I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }" class="font-bold"
            >Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signup } = useSignUp();
    const router = useRouter();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const phone = ref("");
    const address = ref("");
    const age = ref("");
    const sex = ref("");
    async function onSubmit() {
      await signup(
        email.value,
        password.value,
        fullName.value,
        phone.value,
        address.value,
        age.value,
        sex.value
      );
      if (!error.value) {
        await router.push({
          name: "Home",
          params: {},
        });
      }
    }
    return {
      fullName,
      email,
      password,
      phone,
      address,
      sex,
      age,
      onSubmit,
      error,
      isPending,
    };
  },
};
</script>

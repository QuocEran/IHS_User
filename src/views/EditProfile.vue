<template>
  <div class="mt-8">
    <div class="row mb-4 ml-3">
      <router-link
        to="/profile"
        class="text-gray-600 text-lg font-semibold hover:text-gray-400"
        ><fa icon="arrow-left" /> Back to profile</router-link
      >
    </div>
    <div class="mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
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
          <label for="age" class="flex flex-col w-full">
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
          <label for="address" class="flex flex-col">
            <span class="font-semibold">Address</span>
            <textarea
              id="address"
              class="px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200"
              type="text"
              placeholder="Enter your address"
              v-model="address"
            />
          </label>
        </div>
        <!-- Error -->
        <div class="text-center mt-6 text-yellow-800">
          <span v-if="error">{{ error }}</span>
        </div>
        <div class="row pb-8">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold bg-green"
          >
            CẬP NHẬT
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUpdateProfile } from "@/composables/useUpdateProfile";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const { error, isPending, updateProfile } = useUpdateProfile();
    const router = useRouter();
    const userInfo = useStore().state.userInfo;
    const fullName = ref(userInfo.name);
    const phone = ref(userInfo.phoneNumber);
    const address = ref(userInfo.address);
    const age = ref(userInfo.age);
    async function onSubmit() {
      await updateProfile(
        fullName.value,
        phone.value,
        address.value,
        age.value
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
      phone,
      address,
      age,
      onSubmit,
      error,
      isPending,
    };
  },
};
</script>

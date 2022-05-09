<template>
  <div class="flex w-full h-24 bg-secondary items-center">
    <div v-if="meta.isHome" class="flex-grow flex items-center">
      <img
        src="../assets/images/ava.jpg"
        alt=""
        class="ml-3 h-14 w-14 object-fill rounded-full"
      />
      <div class="ml-3">
        <p>Xin chào,</p>
        <p class="font-bold text-xl">{{ user.displayName }}</p>
      </div>
    </div>
    <div v-else class="flex-grow flex items-center">
      <div class="flex items-center ml-3">
        <fa :icon="meta.icon" class="mr-4 text-2xl text-gray-500" />
        <p class="font-bold text-xl border-b-2 border-gray-500 w-max">
          {{ meta.name }}
        </p>
      </div>
    </div>
    <span class="w-14 h-full flex justify-center items-center font-bold">
      <router-link
        to="/logout"
        class="text-gray-500 cursor-pointer hover:text-black"
      >
        <fa icon="power-off" />
      </router-link>
    </span>
  </div>
</template>

<script>
import { useUser } from "@/composables/useUser";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const route = useRoute();
    return { user, meta: computed(() => route.meta) };
  },
};
</script>

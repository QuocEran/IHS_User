<template>
  <div class="w-full p-8">
    <img
      src="@/assets/images/404NotFound.svg"
      alt="404 Not Found"
      class="w-1/2 mx-auto"
    />
    <p class="w-full text-center font-bold text-xl mt-8">
      SORRY, PAGE NOT FOUND
    </p>

    <div
      class="flex mt-8 h-12 w-60 mx-auto items-center justify-center rounded-xl bg-blue-600 cursor-pointer"
    >
      <router-link
        @click="changeState('Home')"
        to="/"
        class="flex items-center justify-center h-full w-full font-bold text-xl text-secondary hover:text-primary"
      >
        Back to home
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    function changeState(nameState) {
      store.dispatch("changeNavState", { stateName: nameState });
    }
    return { changeState };
  },
};
</script>

<style></style>

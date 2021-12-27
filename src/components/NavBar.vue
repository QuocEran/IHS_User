<template>
  <footer
    id="footer"
    class="fixed w-full max-w-lg bottom-0 bg-secondary items-center py-2"
  >
    <div class="container mx-auto px-6 h-full">
      <ul class="flex justify-between h-full items-center">
        <li
          v-for="navItem in navItems"
          :key="navItem.name"
          class="hover:text-black rounded-xl p-2"
        >
          <router-link
            @click="changeState(navItem.name)"
            :to="{ name: navItem.name, params: {} }"
            :class="[navItem.name == navState ? 'text-black' : 'text-gray-400']"
            class="text-xl hover:text-black flex flex-col items-center"
          >
            <fa :icon="navItem.icon" />
            <p class="font-bold text-sm">{{ navItem.text }}</p>
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="top-0 absolute z-0" @click="gotoRoute">
      <div
        class="flex items-center justify-center bg-blue-500 text-primary cursor-pointer rounded-full w-12 h-12 -top-6"
      >
        <fa icon="heartbeat" class="text-xl" />
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive, computed } from "vue";

import { useStore } from "vuex";

import { useRouter } from "vue-router";

import { NAV_ITEMS } from "@/constants/index";

export default {
  name: "NavBar",
  setup() {
    // use store
    const store = useStore();
    const navItems = reactive(NAV_ITEMS);
    function changeState(nameState) {
      store.dispatch("changeNavState", { stateName: nameState });
    }

    // use router
    const router = useRouter();

    function gotoRoute() {
      router.push({
        name: "stats",
        params: {},
      });
    }
    return {
      gotoRoute,
      changeState,
      navItems,
      navState: computed(() => store.state.NavState),
    };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
footer#footer > div[data-circle] {
  background-color: #ffe3e3;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>

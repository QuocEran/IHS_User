<template>
  <footer
    id="footer"
    class="fixed w-full max-w-lg bottom-0 bg-primary items-center py-4"
  >
    <div class="container mx-auto px-6 h-full">
      <ul class="flex justify-between h-full items-center">
        <li
          v-for="navItem in navItems"
          :key="navItem.name"
          class="hover:text-black rounded-xl p-2"
        >
          <router-link
            :to="{ name: navItem.name, params: {} }"
            class="text-gray-500 text-xl hover:text-gray-900 flex flex-col items-center"
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
        <fa icon="plus-circle" />
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
// import { useRouter } from "vue-router";

import { NAV_ITEMS } from "@/constants/index";

export default {
  setup() {
    // const router = useRouter();
    const navItems = reactive(NAV_ITEMS);
    return { navItems };
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
  background-color: #aedef8;
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

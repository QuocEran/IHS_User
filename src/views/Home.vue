<template>
  <div class="mt-8 w-full mx-auto grid-cols-3 grid gap-4">
    <home-components />
    <home-components />
    <home-components />
    <home-components />
    <home-components class="col-span-2" />
    <home-components class="col-span-3" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponents from "@/components/HomeComponents.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "Home",
  components: {
    HomeComponents,
  },
  setup() {
    const route = useRoute();
    console.log(route.name);
    const store = useStore();
    return { navState: computed(() => store.state.NavState) };
  },
};
</script>

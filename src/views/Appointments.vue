<template>
  <div class="appointments">
    <h1>This is an appointments page</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });
  },
};
</script>

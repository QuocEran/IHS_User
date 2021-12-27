<template>
  <div class="appointments mt-4">
    <appointments-components :data="null" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AppointmentsComponents from "@/components/AppointmentsComponents.vue";
export default {
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });
  },
  components: { AppointmentsComponents },
};
</script>

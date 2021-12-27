<template>
  <div class="device mt-4">
    <device-components />
  </div>
</template>

<script>
import DeviceComponents from "@/components/DeviceComponents.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });
  },
  components: { DeviceComponents },
};
</script>

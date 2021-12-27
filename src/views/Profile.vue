<template>
  <div class="profile mt-4">
    <profile-components />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ProfileComponent from "@/components/ProfileComponents.vue";
import ProfileComponents from "@/components/ProfileComponents.vue";
export default {
  components: { ProfileComponents },
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });
  },
  component: { ProfileComponent },
};
</script>

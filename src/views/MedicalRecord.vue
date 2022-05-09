<template>
  <div class="appointments mt-4">
    <MedicalRecordComponent v-if="userInfo" :data="userInfo" />
    <div
      v-else
      class="w-full text-center flex-col flex justify-center items-center h-16 text-xl font-semibold text-gray-500"
    >
      Loading...
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import MedicalRecordComponent from "@/components/MedicalRecordComponent.vue";
export default {
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });

    return {
      userInfo: computed(() => store.state.userInfo),
    };
  },
  components: { MedicalRecordComponent },
};
</script>

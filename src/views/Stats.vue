<template>
  <div class="w-full sm:pr-8 sm:p-0 xs:p-2 xs:mb-10 sm:mb-16 sm:mt-4">
    <div class="row mb-4 sm:ml-3 sm:hidden xs:block">
      <router-link
        to="/"
        class="text-gray-600 text-lg font-semibold hover:text-gray-400"
        ><fa icon="arrow-left" class="mr-3" />Back to home</router-link
      >
    </div>
    <div>
      <Chart :espId="espId" :patientId="patientId" />
    </div>

    <div
      class="flex mt-8 h-12 w-60 mx-auto items-center justify-center rounded-xl bg-blue-600 cursor-pointer sm:block xs:hidden"
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
import { ref } from "vue";
import { useStore } from "vuex";
import Chart from "@/components/Chart.vue";

export default {
  setup() {
    const store = useStore();
    const espId = ref(store.getters.getUserInfo.espId);
    const patientId = ref(store.getters.getUserInfo.patientId);

    function changeState(nameState) {
      store.dispatch("changeNavState", { stateName: nameState });
    }

    return { changeState, espId, patientId };
  },
  components: {
    Chart,
  },
};
</script>

<template>
  <div class="device mt-4">
    <device-components v-if="!isPending" :data="deviceInfo" />
    <div
      v-else
      class="w-full text-center flex-col flex justify-center items-center h-16 text-xl font-semibold text-gray-500"
    >
      Loading...
    </div>
  </div>
</template>

<script>
import DeviceComponents from "@/components/DeviceComponents.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import { projectFirestore } from "@/configs/firebase";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("changeNavState", { stateName: route.name });
    const userInfo = store.getters.getUserInfo;

    const isPending = ref(true);
    const deviceInfo = ref({});
    const getData = async () => {
      try {
        const response = await projectFirestore
          .collection("esp")
          .doc(userInfo.espId)
          .get()
          .then((doc) => doc.data());
        deviceInfo.value = response;
      } catch (error) {
        console.log(error.message);
      } finally {
        isPending.value = false;
        store.dispatch("saveDeviceInfo", { deviceInfo: deviceInfo.value });
      }
    };
    onBeforeMount(async () => await getData());
    return {
      deviceInfo,
      isPending,
    };
  },
  components: { DeviceComponents },
};
</script>

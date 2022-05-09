<template>
  <div class="mt-4 w-full mx-auto grid-cols-3 grid gap-4 p-2 mb-24">
    <home-components-top
      class="xs:col-span-3 sm:col-span-2"
      :userInfo="userInfo"
      :isPending="isPending"
    />
    <home-components
      class="sm:col-span-1 xs:col-span-3"
      :espId="espId"
      :isPending="isPending"
    />
    <div v-if="isPending"></div>
    <home-components-mid
      v-else
      class="col-span-3"
      :espId="espId"
      :patientId="patientId"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponents from "@/components/HomeComponents.vue";
import HomeComponentsTop from "@/components/HomeComponentsTop.vue";
import HomeComponentsMid from "@/components/HomeComponentsMid.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { projectFirestore } from "@/configs/firebase";
import { useUser } from "@/composables/useUser";
import { ref, onBeforeMount } from "vue";

export default {
  name: "Home",
  components: {
    HomeComponents,
    HomeComponentsTop,
    HomeComponentsMid,
  },
  setup() {
    const route = useRoute();

    const store = useStore();

    store.dispatch("changeNavState", { stateName: route.name });

    // use store

    const { user } = useUser().getUser();
    const patientId = user.value.uid;
    const isPending = ref(true);
    const userInfo = ref({});
    const espId = ref("");
    const getData = async () => {
      try {
        const response = await projectFirestore
          .collection("patients")
          .doc(patientId)
          .get()
          .then((doc) => doc.data());
        userInfo.value = response;
        espId.value = response.espId;

        return response;
      } catch (error) {
        console.log(error.message);
      } finally {
        isPending.value = false;
        store.dispatch("saveUserInfo", { userInfo: userInfo.value });
      }
    };
    onBeforeMount(async () => await getData());

    return {
      userInfo: computed(() => store.state.userInfo),
      espId,
      isPending,
      patientId,
    };
  },
};
</script>

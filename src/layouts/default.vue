<template>
  <div class="max-w-3xl mx-auto">
    <heading v-if="meta.isShowHeader" />
    <slot />
    <nav-bar v-if="meta.isShowFooter" />
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import NavBar from "@/components/NavBar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
  components: { Heading, NavBar },
};
</script>

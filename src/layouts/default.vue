<template>
  <div class="max-w-lg mx-auto">
    <heading />
    <slot />
    <nav-bar />
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: { Heading, NavBar },
};
</script>

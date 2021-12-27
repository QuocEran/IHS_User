<template>
  <div class="bg-primary">
    <heading-auth />
    <slot />
  </div>
</template>

<script>
import HeadingAuth from "@/components/HeadingAuth.vue";

export default {
  components: { HeadingAuth },
};
</script>

<template>
  <div class="max-w-lg mx-auto">
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

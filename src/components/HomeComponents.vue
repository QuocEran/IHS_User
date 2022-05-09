<template>
  <div
    class="bg-white w-full h-full border-2 rounded-xl flex flex-col justify-center items-center xs:pb-3 sm:pb-0"
  >
    <img
      src="@/assets/images/logo.png"
      alt=""
      class="object-cover h-16 w-16 m-3 rounded-full"
    />
    <div
      v-if="isPending"
      class="flex-col flex justify-center items-center h-16 text-xl font-semibold text-gray-500"
    >
      Loading...
    </div>
    <div v-else class="flex-col flex justify-center items-center">
      <h5 class="font-bold text-gray-500 text-3xl">ESP</h5>
      <span class="font-bold">{{ espId }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    espId: String,
    isPending: Boolean,
  },
};
</script>

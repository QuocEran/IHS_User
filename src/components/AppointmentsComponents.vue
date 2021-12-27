<template>
  <div
    v-if="data"
    class="bg-white w-full h-40 border-2 rounded-xl flex justify-start items-center"
  ></div>
  <div v-else class="w-full p-8">
    <img
      src="@/assets/images/NoData.svg"
      alt="No Data"
      class="h-44 w-44 mx-auto"
    />
    <p class="w-full text-center font-bold text-xl mt-4">
      Rất tiếc, chưa có dữ liệu hiển thị
    </p>
  </div>
  <p>{{ data }}</p>
</template>

<script>
export default {
  setup() {},
  props: ["data"],
};
</script>

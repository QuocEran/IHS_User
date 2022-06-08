<template>
  <div
    class="bg-white rounded-xl border-2 w-full h-full flex justify-start items-cente p-2"
  >
    <div
      v-if="isPending"
      class="flex justify-center items-center text-2xl w-full font-semibold text-gray-500 h-40"
    >
      Loading...
    </div>
    <div
      v-else
      class="flex flex-col justify-center flex-grow overflow-x-hidden h-40"
    >
      <div
        class="ml-3 flex justify-between border-b-2 border-gray-300 mb-1 p-1"
      >
        <div class="flex items-center text-left">
          <fa icon="file-medical" />
          <h5 class="font-semibold ml-3">{{ userInfo.diagnostic }}</h5>
        </div>
      </div>
      <div class="grid grid-cols-3 ml-3 gap-1">
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">DOB</h4>
          <h5 class="font-bold">{{ userInfo.age }}</h5>
        </div>
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">SEX</h4>
          <h5 class="font-bold">{{ userInfo.sex.toUpperCase() }}</h5>
        </div>
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">BLOOD</h4>
          <h5 class="font-bold">{{ userInfo.blood }}</h5>
        </div>
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">WEIGHT</h4>
          <h5 class="font-bold">{{ userInfo.weight }} KG</h5>
        </div>
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">HEIGHT</h4>
          <h5 class="font-bold">{{ userInfo.height }} CM</h5>
        </div>
        <div class="flex flex-col text-center">
          <h4 class="text-gray-500 text-lg font-semibold">BMI</h4>
          <h5 class="font-bold">{{ userInfo.BMI }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
    isPending: Boolean,
  },
};
</script>

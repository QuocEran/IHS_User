<template>
  <div class="w-full p-8">
    <img src="@/assets/images/NoStats.svg" alt="No Stats" />
    <p class="w-full text-center font-bold text-xl mt-4">
      RẤT TIẾC, CHƯA CÓ DỮ LIỆU HIỂN THỊ
    </p>

    <div
      class="flex mt-8 h-12 w-60 mx-auto items-center justify-center rounded-xl bg-blue-600 cursor-pointer"
    >
      <router-link
        to="/"
        class="flex items-center justify-center h-full w-full font-bold text-xl text-secondary hover:text-primary"
      >
        Back to home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

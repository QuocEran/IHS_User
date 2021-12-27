<template>
  <div class="flex w-full h-24 bg-primary items-center">
    <img
      src="../assets/images/ava.jpg"
      alt=""
      class="ml-3 h-14 w-14 object-fill rounded-full"
    />
    <div class="flex-grow ml-3">
      <p>Xin chào,</p>
      <p class="font-bold text-xl">Tran Quoc Chuong</p>
    </div>
    <span class="w-14 h-full flex justify-center items-center font-bold">
      <router-link
        to="/logout"
        class="text-gray-500 cursor-pointer hover:text-gray-900"
      >
        <fa icon="power-off" />
      </router-link>
    </span>
  </div>
</template>

<script>
export default {};
</script>

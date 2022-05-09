<template>
  <div
    class="bg-white w-full h-full max-w-full border-2 border-gray-300 rounded-xl flex justify-start items-center hover:bg-gray-300 cursor-pointer overflow-y-hidden"
  >
    <img
      src="@/assets/images/doctor.png"
      alt=""
      class="object-cover h-14 w-14 m-3 rounded-full"
    />
    <div class="flex h-full flex-col justify-center w-48 overflow-x-auto">
      <div class="flex items-center text-left max-w-full overflow-x-auto">
        <fa icon="user" />
        <h5 class="font-semibold ml-3 overflow-x-auto">Chương Trần</h5>
      </div>
      <div class="flex items-center text-left">
        <fa icon="phone-alt" />
        <h5 class="font-semibold ml-3">0379734090</h5>
      </div>
    </div>
    <div class="flex justify-center items-center h-full">
      <span class="font-extrabold">Doctor</span>
    </div>
    <div class="text-center w-6">
      <fa icon="angle-right" />
    </div>
  </div>
</template>

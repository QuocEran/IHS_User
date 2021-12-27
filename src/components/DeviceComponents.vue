<template>
  <div class="w-full h-full overflow-auto">
    <div class="h-24 w-full flex items-center justify-start p-2">
      <div
        class="bg-white w-1/5 flex h-full flex-col items-center justify-center rounded-2xl mx-4"
      >
        <h5 class="font-bold text-gray-500 text-3xl">ESP</h5>
        <span class="font-bold text-xl">01</span>
      </div>

      <div class="flex h-full w-4/5 justify-end items-center text-left mr-4">
        <fa icon="map-marker" />
        <h5 class="font-semibold ml-3">
          2.27 CC6, Xo Viet Nghe Tinh Street, District Binh Thanh, Ho Chi Minh
          City
        </h5>
      </div>
    </div>
    <div
      class="w-full border-2 border-gray-300 rounded-2xl p-2 justify-center items-center flex flex-row"
    >
      <div class="w-full h-full grid grid-cols-1 p-2">
        <ul class="text-dark col-span-1">
          <li class="">
            <div
              class="flex items-center justify-between py-3 mb-4 bg-white rounded-2xl px-4"
            >
              <div class="flex items-center text-left">
                <fa icon="calendar-day" />
                <h5 class="font-semibold ml-3">07/11/2021</h5>
              </div>
              <div class="flex items-center text-left">
                <fa icon="file-signature" />
                <h5 class="font-semibold ml-3">test</h5>
              </div>
              <div class="flex items-center text-left">
                <fa icon="signature" />
                <h5 class="font-semibold ml-3">test</h5>
              </div>
            </div>
          </li>
          <li class="py-3 mb-1 bg-white rounded-xl px-4">
            <table class="w-full">
              <tr>
                <th class="font-semibold text-black">SENSOR</th>
                <th class="font-semibold text-black">ID</th>
              </tr>
              <tr>
                <td>Temperature & Humidity</td>
                <td>DHT11</td>
              </tr>
              <tr>
                <td>Heartbeat & SpO2</td>
                <td>MAX30102</td>
              </tr>
              <tr>
                <td>Body Temperature (Non-Contact)</td>
                <td>GY-906 MX9</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  props: ["data"],
};
</script>

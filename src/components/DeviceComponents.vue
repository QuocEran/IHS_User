<template>
  <div class="w-full h-full mb-24 xs overflow-auto p-2">
    <div
      class="w-full flex xs:flex-wrap sm:flex-nowrap items-center justify-start sm:mb-4"
    >
      <div
        class="bg-white xs:w-full sm:w-1/5 flex h-full flex-col items-center justify-center rounded-2xl mx-4 py-4"
      >
        <h5 class="font-bold text-gray-500 text-3xl">ESP</h5>
      </div>

      <div
        class="flex xs:justify-center sm:justify-start xs:w-full sm:w-4/5 items-center text-left xs:py-2 sm:py-4"
      >
        <fa icon="map-marker" />
        <h5 class="font-semibold ml-3">{{ data?.location }}</h5>
      </div>
    </div>
    <div
      class="w-full border-2 border-gray-300 rounded-2xl p-2 justify-center items-center flex flex-row"
    >
      <div class="w-full h-full grid grid-cols-1 p-2">
        <ul class="text-dark col-span-1">
          <li class="">
            <div
              class="flex items-center justify-between py-3 mb-4 bg-white rounded-2xl px-4 xs:flex-wrap xs:flex-col xs:gap-2 sm:flex-row sm:gap-0 sm:flex-nowrap"
            >
              <div class="flex items-center text-left">
                <fa icon="calendar-day" />
                <h5 class="font-semibold ml-3">
                  {{ createdDate }}
                </h5>
              </div>
              <div class="flex items-center text-left">
                <fa icon="file-signature" />
                <h5 class="font-semibold ml-3">{{ data?.espId }}</h5>
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
                <td>{{ data?.sensors[0] }}</td>
              </tr>
              <tr>
                <td>Heartbeat & SpO2</td>
                <td>{{ data?.sensors[1] }}</td>
              </tr>
              <tr>
                <td>Body Temperature</td>
                <td>{{ data?.sensors[2] }}</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useTimeConvert } from "@/utils/useTimeConvert";
export default {
  setup(props) {
    const createdDate = useTimeConvert().timeConverter(props.data.createdDate);
    return {
      createdDate,
    };
  },
  props: {
    data: Object,
  },
};
</script>

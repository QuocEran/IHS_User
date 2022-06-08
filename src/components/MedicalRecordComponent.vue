<template>
  <div v-if="data" class="flex-col flex gap-4 p-2 mb-24">
    <div class="py-3 bg-white rounded-xl px-4">
      <div class="w-full font-semibold text-black text-left text-xl my-2">
        Profile
      </div>
      <table class="w-full">
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Patient Id:</th>
          <td class="text-gray-500 text-left break-all">
            {{ data.patientId }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Full name:</th>
          <td class="text-gray-500 text-left">
            {{ data.name }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">DOB:</th>
          <td class="text-gray-500 text-left">
            {{ data.age }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">
            Phone number:
          </th>
          <td class="text-gray-500 text-left">
            {{ data.phoneNumber }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Diagnostic:</th>
          <td class="text-gray-500 text-left">
            {{ data.diagnostic }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Note:</th>
          <td class="text-gray-500 text-left">
            {{ data.notes }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">
            Last updated:
          </th>
          <td class="text-gray-500 text-left">
            {{ timeConverter(data.createdDate / 1000) }}
          </td>
        </tr>
      </table>
    </div>
    <div class="py-3 bg-white rounded-xl px-4">
      <div class="w-full font-semibold text-black text-left text-xl my-2">
        Health stats
      </div>
      <table class="w-full">
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Blood:</th>
          <td class="text-gray-500 text-left">
            {{ data.blood }}
          </td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Height:</th>
          <td class="text-gray-500 text-left">{{ data.height }} cm</td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">Weight:</th>
          <td class="text-gray-500 text-left">{{ data.weight }} kg</td>
        </tr>
        <tr>
          <th class="font-semibold text-black w-1/3 text-left">BMI:</th>
          <td class="text-gray-500 text-left">
            {{ data.BMI }}
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div v-else class="w-full p-8">
    <img
      src="@/assets/images/NoData.svg"
      alt="No Data"
      class="h-44 w-44 mx-auto"
    />
    <p class="w-full text-center font-bold text-xl mt-4">
      SORRY, NO DATA DISPLAYED
    </p>
  </div>
</template>

<script>
import { useTimeConvert } from "@/utils/useTimeConvert";
export default {
  setup() {
    const { timeConverter } = useTimeConvert();

    return {
      timeConverter,
    };
  },
  props: ["data"],
};
</script>

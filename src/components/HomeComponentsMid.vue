<template>
  <div class="w-full flex flex-wrap justify-center items-center gap-2">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="bg-white rounded-xl sm:w-1/4 xs:w-40 flex justify-center px-1 py-3 border-2"
    >
      <div class="sm:w-12 xs:w-10 flex flex-col justify-center items-center">
        <img :src="stat.image" alt="" class="object-cover p-1" />
      </div>
      <div class="flex-grow flex flex-col">
        <h5
          v-if="stat.status == 'Alert'"
          class="font-extrabold text-sm text-yellow-700 text-center"
        >
          {{ stat.status }}
        </h5>
        <h5 v-else class="font-extrabold text-sm text-blue-700 text-center">
          {{ stat.status }}
        </h5>
        <div class="flex justify-center gap-1">
          <h5 class="font-bold text-xl text-dark">{{ stat.value }}</h5>
          <h5 class="font-semibold text-xs text-dark flex items-center">
            {{ stat.title }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heartbeat from "@/assets/images/heartbeat.png";
import temp from "@/assets/images/temp.png";
import oxygen from "@/assets/images/oxygen.png";
import roomTemp from "@/assets/images/room-temp.png";
import humid from "@/assets/images/humidity.png";
import { ref } from "@vue/reactivity";
import { projectFirestore } from "@/configs/firebase";

export default {
  props: {
    espId: String,
    patientId: String,
  },
  setup(props) {
    const stats = ref([
      {
        image: heartbeat,
        value: "...",
        status: "Loading...",
        title: "BPM",
      },
      {
        image: temp,
        value: "...",
        status: "Loading...",
        title: "\u00b0C",
      },
      {
        image: oxygen,
        value: "...",
        status: "Loading...",
        title: "SpO2",
      },
      {
        image: roomTemp,
        value: "...",
        status: "Loading...",
        title: "\u00b0C",
      },
      {
        image: humid,
        value: "...",
        status: "Loading...",
        title: "%",
      },
    ]);
    projectFirestore
      .collection("espData")
      .doc(props.espId)
      .collection(props.patientId)
      .orderBy("TimeStamp", "asc")
      .limitToLast(1)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs[0].data();

        stats.value = [
          {
            image: heartbeat,
            value: data.HeartBeat,
            status: data.HeartBeat > 100 ? "Alert" : "Normal",
            title: "BPM",
          },
          {
            image: temp,
            value: data.Temp,
            status: data.Temp > 37 ? "Alert" : "Normal",
            title: "\u00b0C",
          },
          {
            image: oxygen,
            value: data.SPO2,
            status: data.SPO2 < 94 ? "Alert" : "Normal",
            title: "SpO2",
          },
          {
            image: roomTemp,
            value: data.RoomTemp,
            status: data.RoomTemp > 35 ? "Alert" : "Normal",
            title: "\u00b0C",
          },
          {
            image: humid,
            value: data.Humid,
            status: data.Humid > 60 ? "Alert" : "Normal",
            title: "%",
          },
        ];
      });

    return {
      stats,
    };
  },
};
</script>

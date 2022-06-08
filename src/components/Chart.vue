<template>
  <div class="sm:flex hidden flex-col gap-6">
    <LineChart :chartData="renderData" :options="options" />
    <LineChart :chartData="renderRoomData" :options="roomOptions" />
  </div>

  <div class="sm:hidden max-w-sm flex flex-col gap-6">
    <LineChart :chartData="renderData" :options="mbOptions" />
    <LineChart :chartData="renderRoomData" :options="mbRoomOptions" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { projectFirestore } from "@/configs/firebase";
import { useTimeConvert } from "@/utils/useTimeConvert";
Chart.register(...registerables);

export default defineComponent({
  name: "Chart",
  components: {
    LineChart,
  },
  props: {
    espId: String,
    patientId: String,
  },
  setup(props) {
    const labels = ref(null);
    const heartBeat = ref(null);
    const SPO2 = ref(null);
    const Temp = ref(null);

    const roomTemp = ref(null);
    const humid = ref(null);

    try {
      projectFirestore
        .collection("espData")
        .doc(props.espId)
        .collection(props.patientId)
        .orderBy("TimeStamp", "asc")
        .limitToLast(15)
        .onSnapshot((snapshot) => {
          labels.value = snapshot.docs.map((doc) =>
            useTimeConvert().timeConverter(doc.id)
          );
          heartBeat.value = snapshot.docs.map((doc) => doc.data().HeartBeat);
          SPO2.value = snapshot.docs.map((doc) => doc.data().SPO2);
          Temp.value = snapshot.docs.map((doc) => doc.data().Temp);
          roomTemp.value = snapshot.docs.map((doc) => doc.data().RoomTemp);
          humid.value = snapshot.docs.map((doc) => doc.data().Humid);
        });
    } catch (error) {
      console.log(error.message);
    }
    const renderData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          data: heartBeat.value,
          label: "Heartbeat",
          borderColor: "#F24A72",
          fill: false,
        },
        {
          data: SPO2.value,
          label: "SPO2",
          borderColor: "#8e5ea2",
          fill: false,
        },
        {
          data: Temp.value,
          label: "Body Temperature",
          borderColor: "#3cba9f",
          fill: false,
        },
      ],
    }));

    const renderRoomData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          data: roomTemp.value,
          label: "Room Temperature",
          borderColor: "#F24A72",
          fill: false,
        },
        {
          data: humid.value,
          label: "Humidity",
          borderColor: "#8e5ea2",
          fill: false,
        },
      ],
    }));
    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "HEALTH STATS",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
      scales: {
        y: {
          min: 20,
          max: 120,
        },
      },
    });

    const mbOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "HEALTH STATS",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
      scales: {
        x: {
          display: false, // Hide X axis labels
        },
        y: {
          min: 20,
          max: 120,
        },
      },
    });

    const roomOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "ENVIRONMENT STATS",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
      scales: {
        y: {
          min: 20,
          max: 100,
        },
      },
    });

    const mbRoomOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "ENVIRONMENT STATS",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
      scales: {
        x: {
          display: false, // Hide X axis labels
        },
        y: {
          min: 20,
          max: 100,
        },
      },
    });
    return {
      renderData,
      mbRoomOptions,
      mbOptions,
      options,
      renderRoomData,
      roomOptions,
    };
  },
});
</script>

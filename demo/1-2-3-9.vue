<template>
  <WebPie :config="getOptions" :data="data"></WebPie>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getPie(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "angleAxis + radiusAxis + polar + 多个饼图",
          subtext: "单位：元",
        },
        angleAxis: {
          max: 2,
          startAngle: 30,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          minorTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        radiusAxis: {
          type: "category",
          data: ["v", "w", "x", "y", "z"],
          z: 10,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          minorTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [4, 3, 2, 1, 0],
            coordinateSystem: "polar",
            name: "Without Round Cap",
            itemStyle: {
              borderColor: "red",
              opacity: 0.8,
              borderWidth: 1,
            },
          },
          {
            type: "bar",
            data: [4, 3, 2, 1, 0],
            coordinateSystem: "polar",
            name: "With Round Cap",
            roundCap: true,
            itemStyle: {
              borderColor: "green",
              opacity: 0.8,
              borderWidth: 1,
            },
          },
        ],
        legend: {
          show: true,
          data: ["A", "B"],
        },
      };
    },
  },
};
</script>

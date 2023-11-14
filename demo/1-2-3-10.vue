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
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu"],
          z: 10,
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a",
            emphasis: {
              focus: "series",
            },
          },
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"],
        },
      };
    },
  },
};
</script>

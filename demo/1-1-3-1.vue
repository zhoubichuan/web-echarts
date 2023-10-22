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
    let res = await this.$api.getPolar(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "极坐标系",
        },
        legend: {
          data: ["Punch Card"],
          left: "right",
        },
        polar: {},
        angleAxis: {
          type: "category",
          data: [
            "12a",
            "1a",
            "2a",
            "3a",
            "4a",
            "5a",
            "6a",
            "7a",
            "8a",
            "9a",
            "10a",
            "11a",
            "12p",
            "1p",
            "2p",
            "3p",
            "4p",
            "5p",
            "6p",
            "7p",
            "8p",
            "9p",
            "10p",
            "11p",
          ],
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#999",
              type: "dashed",
            },
          },
          axisLine: {
            show: false,
          },
        },
        radiusAxis: {
          type: "category",
          data: [
            "Saturday",
            "Friday",
            "Thursday",
            "Wednesday",
            "Tuesday",
            "Monday",
            "Sunday",
          ],
          axisLine: {
            show: false,
          },
          axisLabel: {
            rotate: 45,
          },
        },
        series: [
          {
            name: "Punch Card",
            type: "scatter",
            coordinateSystem: "polar",
            symbolSize: function (val) {
              return val[2] * 2;
            },
            data,
          },
        ],
      };
    },
  },
};
</script>
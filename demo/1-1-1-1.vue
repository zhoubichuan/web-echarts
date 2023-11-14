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
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        color: ["#003366", "#006699", "#4cabce", "#e5323e"],
        dataset: {
          source: [
            ["type", "2012", "2013", "2014", "2015", "2016"],
            ["Forest", 320, 332, 301, 334, 390],
            ["Steppe", 220, 182, 191, 234, 290],
            ["Desert", 150, 232, 201, 154, 190],
            ["Wetland", 98, 77, 101, 99, 40],
          ],
        },
        legend: {},
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            seriesLayoutBy: "row",
          },
          {
            type: "bar",
            seriesLayoutBy: "row",
          },
          {
            type: "bar",
            seriesLayoutBy: "row",
          },
          {
            type: "bar",
            seriesLayoutBy: "row",
          },
        ],
      };
    },
  },
};
</script>
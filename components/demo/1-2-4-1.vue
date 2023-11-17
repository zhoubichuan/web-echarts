<template>
  <WebScatter :config="getOptions" :data="data"></WebScatter>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getScatter(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "xAxis + yAxis + 单个散点图",
          subtext: "单位：元",
        },
        legend: {
          orient: "vertical",
          right: "10%",
          top: "20%",
          bottom: "center",
          data: data.map((i) => i.name),
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: "scatter",
            symbolSize: 20,
            data: data,
          },
        ],
      };
    },
  },
};
</script>
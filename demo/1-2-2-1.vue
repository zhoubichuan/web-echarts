<template>
  <WebBar :config="getOptions" :data="data"></WebBar>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getBar(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      let total = data.reduce((c, n) => c + n.value, 0);
      return {
        title: {
          text: "xAxis + yAxis + 多个饼图 + 柱状图",
        },
        grid: [{ x: "50%", y: "7%", width: "45%", height: "90%" }],
        tooltip: {
          formatter: "{b} ({c})",
        },
        xAxis: [
          {
            gridIndex: 0,
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: { show: false },
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            interval: 0,
            data: data.map((item, index) => "原因" + (index + 1)),
            axisTick: { show: false },
            axisLabel: { show: true },
            splitLine: { show: false },
            axisLine: { show: true, lineStyle: { color: "#6173a3" } },
          },
        ],
        series: [
          ...data.map((item, index) => ({
            type: "pie",
            radius: ["6%", "13%"],
            center: ["40%", String(index * 15 + 15) + "%"],
            color: ["#86c9f4", "#4da8ec", "#3a91d2", "#005fa6", "#315f97"],
            data: [{ value: item.value }, { value: total - item.value }],
            labelLine: { show: false },
            itemStyle: {
              label: {
                show: false,
              },
            },
          })),
          {
            name: "投诉原因TOP10",
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: "45%",
            itemStyle: { normal: { color: "#86c9f4" } },
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: { color: "#9EA7C4" },
              },
            },
            data: data,
          },
        ],
      };
    },
  },
};
</script>
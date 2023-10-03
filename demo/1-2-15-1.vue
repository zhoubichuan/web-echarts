<template>
  <div ref="pie" style="height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return params[0].name + ": " + params[0].value;
          },
        },
        xAxis: {
          data: [
            "驯鹿",
            "火箭",
            "飞机",
            "高铁",
            "轮船",
            "汽车",
            "跑步",
            "步行",
          ],
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#e54035",
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
        },
        color: ["#e54035"],
        series: [
          {
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: "-10%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              opacity: 0.5,
            },
            emphasis: {
              itemStyle: {
                opacity: 1,
              },
            },
            data: [123, 60, 25, 18, 12, 9, 2, 1],
            z: 10,
          }
        ],
      },
    };
  },
  mounted() {
    let charts = this.$echarts.init(this.$refs.pie);
    charts.setOption(this.option);
  },
};
</script>
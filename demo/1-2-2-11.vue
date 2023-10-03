
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
    let res = await this.$api.getLine(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "时间",
          subtext: "单位：时",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
          },
        },
        grid: [
          {
            left: 60,
            right: 50,
            height: "35%",
          },
          {
            left: 60,
            right: 50,
            top: "55%",
            height: "35%",
          },
        ],
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: { show: false },
            data: data.map((i) => i.name),
          },
          {
            gridIndex: 1,
            type: "category",
            axisTick: { show: false },
            splitLine: { show: false },
            axisLine: { show: false },
            data: data.map((i) => i.name),
            position: "top",
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: { show: false },
          },
          {
            gridIndex: 1,
            type: "value",
            inverse: true,
            axisTick: { show: false },
            axisLine: { show: false },
          },
        ],
        series: [
          {
            name: "A水位",
            type: "bar",
            symbolSize: 8,
            data: data.map((i) => i.value[0]),
          },
          {
            name: "B水位",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            data: data.map((i) => i.value[1]),
          },
        ],
      };
    },
  },
};
</script>


<template>
  <WebBar v-bind="option"></WebBar>
</template>

<script>
const labelRight = {
  position: "right",
};
export default {
  data() {
    return {
      option: {
        title: {
          text: "统计数据",
          subtext: "单位：个",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 80,
          bottom: 30,
        },
        xAxis: {
          type: "value",
          position: "top",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            "ten",
            "nine",
            "eight",
            "seven",
            "six",
            "five",
            "four",
            "three",
            "two",
            "one",
          ],
        },
        series: [
          {
            name: "Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              formatter: "{b}",
            },
            data: [
              { value: -0.07, label: labelRight },
              { value: -0.09, label: labelRight },
              0.2,
              0.44,
              { value: -0.23, label: labelRight },
              0.08,
              { value: -0.17, label: labelRight },
              0.47,
              { value: -0.36, label: labelRight },
              0.18,
            ],
          },
        ],
      },
    };
  },
};
</script>


<template>
  <WebBar v-bind="option"></WebBar>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "瀑布流",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: ["总数", "数据A", "数据B", "数据C", "数据D", "数据E"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: [0, 1700, 1400, 1200, 300, 0],
          },
          {
            name: "Life Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "inside",
            },
            data: [2900, 1200, 300, 200, 900, 300],
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div ref="bar" style="height: 400px"></div>
</template>
  
  <script>
const labelRight = {
  position: "right",
};
export default {
  name: "WebBar",
  props: {
    styles: {
      type: String,
      default: "height: 400px;width:800px;",
    },
    title: {
      type: [Array, Object],
      default: () => [
        {
          text: "统计数据",
          subtext: "单位：个",
        },
      ],
    },
    tooltip: {
      type: [Array, Object],
      default: () => [
        {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
      ],
    },
    grid: {
      type: [Array, Object],
      default: () => [
        {
          top: "250",
          bottom: 30,
        },
      ],
    },
    xAxis: {
      type: [Array, Object],
      default: () => [
        {
          type: "value",
          position: "top",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
      ],
    },
    yAxis: {
      type: [Array, Object],
      default: () => [
        {
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
      ],
    },
    series: {
      type: [Array, Object],
      default: () => [
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
  },
  data() {
    let title = ({ text, ...others }) => {
      let target = {};
      if (text) {
        target = {
          text: "{style1|}{style2|}{style3|}" + text,
          textStyle: {
            fontWeight: "800",
            color: "#333",
            fontSize: 18,
            left: 0,
            right: 0,
            rich: {
              style1: {
                height: 20,
                width: 4,
                backgroundColor: "#2d65f2",
              },
              style2: {
                height: 20,
                width: 4,
                backgroundColor: "#b2c2ff",
              },
              style3: {
                width: 10,
              },
            },
          },
          subtextStyle: {
            right: 0,
            top: -8,
            color: "#666",
            fontSize: "18",
          },
          ...others,
        };
      }
      return target;
    };
    return {
      option: {
        title: title(this.title),
        tooltip: this.tooltip,
        grid: this.grid,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series,
      },
    };
  },
  mounted() {
    let charts = this.$echarts.init(this.$refs.bar);
    charts.setOption(this.option);
  },
};
</script>
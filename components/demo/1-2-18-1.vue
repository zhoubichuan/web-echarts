<template>
  <div ref="pie" style="height: 100%"></div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "漏斗图",
        },
        legend: {
          data: ["Show", "Click", "Visit", "Inquiry", "Order"],
        },
        series: [
          {
            name: "Expected",
            type: "funnel",
            left: "10%",
            width: "80%",
            maxSize: "80%",
            minSize: "60%",
            gap: 20,
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: ({ data: { color } }) => {
                return new this.$echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  color.map((item, index) => ({
                    offset: 0.5 * index,
                    color: item,
                  })),
                  false
                );
              },
            },
            label: {
              show: false,
            },
            data: [
              {
                value: 70,
                name: "A",
                color: [
                  "#fff",
                  "#5470c6",
                  "#fff",
                ],
              },
              {
                value: 70,
                name: "B",
                color: [
                  "#fff",
                  "#91cc75",
                  "#fff",
                ],
              },
              {
                value: 70,
                name: "C",
                color: [
                  "rgba(0,244,255,0)",
                  "#fac858",
                  "rgba(0,244,255,0)",
                ],
              },
              {
                value: 70,
                name: "D",
                color: [
                  "rgba(0,244,255,0)",
                  "# ee6666",
                  "rgba(0,244,255,0)",
                ],
              },
              {
                value: 70,
                name: "E",
                color: [
                  "rgba(0,244,255,0)",
                  "#73c0de",
                  "rgba(0,244,255,0)",
                ],
              },
            ],
          },
          {
            name: "Actual",
            type: "funnel",
            left: "36%",
            width: "30%",
            maxSize: "80%",
            minSize: "60%",
            gap: 20,
            labelLine: {
              show: false,
            },
            data: [
              { value: 20, name: "A" },
              { value: 30, name: "B" },
              { value: 50, name: "C" },
              { value: 60, name: "D" },
              { value: 80, name: "E" },
            ],
          },
          {
            name: "Actual",
            type: "funnel",
            left: "36%",
            width: "30%",
            maxSize: "80%",
            minSize: "60%",
            gap: 20,
            label: {
              position: "left",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 20, name: "A" },
              { value: 30, name: "B" },
              { value: 50, name: "C" },
              { value: 60, name: "D" },
              { value: 80, name: "E" },
            ],
          },
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
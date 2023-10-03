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
    let res = await this.$api.getScatter(2);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "xAxis + yAxis + 多个散点图",
          subtext: "",
        },
        legend: {
          right: "10%",
          top: "3%",
          data: ["1990", "2015"],
        },
        grid: {
          left: "8%",
          top: "10%",
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          scale: true,
        },
        series: [
          {
            name: "1990",
            data: data[0],
            type: "scatter",
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: "top",
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(120, 36, 50, 0.5)",
              shadowOffsetY: 5,
              color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(251, 118, 123)",
                },
                {
                  offset: 1,
                  color: "rgb(204, 46, 72)",
                },
              ]),
            },
          },
          {
            name: "2015",
            data: data[1],
            type: "scatter",
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: "top",
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,
              color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(129, 227, 238)",
                },
                {
                  offset: 1,
                  color: "rgb(25, 183, 207)",
                },
              ]),
            },
          },
        ],
      };
    },
  },
};
</script>

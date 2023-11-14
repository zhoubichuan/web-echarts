
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
    let res = await this.$api.getBar(2);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "多个yAxis + 多个柱状图",
          subtext: "单位：个",
        },
        grid: {
          left: "12%",
          right: "12%",
          top: "10%",
          bottom: "4%",
        },
        tooltip: {
          show: false,
        },
        xAxis: {
          show: false,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: data.map((item) => item.name),
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            data: data.map((item) => item.value),
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgb(57,89,255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgb(46,200,207,1)",
                  },
                ]),
              },
            },
            barWidth: 20,
            data: data.map((item) => item.value),
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            itemStyle: {
              color: "#fbfbfb",
              barBorderRadius: 30,
            },
            data: [{ value: 0 }],
          },
        ],
      };
    },
  },
};
</script>

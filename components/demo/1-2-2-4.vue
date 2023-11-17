
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
    let res = await this.$api.getBar(4);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        tltle: {
          text: "xAxis + yAxis　+ 柱状图",
          subtext: "单位：个",
        },
        backgroundColor: "#eee",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            data: data.map((i) => i.name),
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.12)",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: data,
            barWidth: "20px",
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0,244,255,1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,77,167,1)", // 100% 处的颜色
                  },
                ],
                false
              ),
              barBorderRadius: [30, 30, 30, 30],
              shadowColor: "rgba(0,160,221,1)",
              shadowBlur: 4,
            },
            label: {
              show: true,
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: "rgba(0,160,221,0.1)",
              borderRadius: 200,
              position: ["-8", "-60"],
              distance: 1,
              formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(","),
              rich: {
                d: {
                  color: "#3CDDCF",
                },
                a: {
                  align: "center",
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: "#234e6c",
                  align: "left",
                },
              },
            },
          },
        ],
      };
    },
  },
};
</script>


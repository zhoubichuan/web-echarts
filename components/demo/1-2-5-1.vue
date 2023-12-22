<template>
  <WebEffectScatter :config="getOptions" :data="data"></WebEffectScatter>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getEffectScatter(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        xAxis: {},
        yAxis: {
          scale: true,
        },
        series: [
          {
            name: "1990",
            type: "effectScatter",
            showEffectOn: "emphasis",
            rippleEffect: {
              period: 1.5, //波纹秒数
              color: "rgba(245,50,11,1)",
              brushType: "stroke", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 3, //波纹范围
            },
            hoverAnimation: true,
            ...{
              // 普通样式
              label: {
                show: true,
                distance: 18,
                position: "top",
                formatter: function ({ data }) {
                  if (data.time) {
                    return "{text|" + data.name + "|" + data.time + "}";
                  } else {
                    return "{text|" + data.name + "}";
                  }
                },
                textStyle: {
                  rich: {
                    text: {
                      color: "#fff",
                      backgroundColor: [
                        ["#79d1b7", "#13a46d"],
                        ["#fc755a", "#f5320b"],
                      ].map((c) => ({
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                          { offset: 0, color: c[0] },
                          { offset: 1, color: c[1] },
                        ],
                      }))[0],
                      borderWidth: 1,
                      borderType: "solid",
                      borderColor: ["#b4ebde", "#fbc3b6"][0],
                      boxShadow: [
                        "0px 1px 4px #68bea0",
                        "0px 1px 4px #8d9bd1",
                      ][0],
                      fontSize: 18, //字体大小
                      padding: [6, 8, 6, 8],
                    },
                  },
                },
              },
              itemStyle: {
                color: "rgba(245,50,11,0.5)", //字体和点颜色
              },
            },
            emphasis: {
              // hover样式
              label: {
                show: true,
                distance: 18,
                position: "top",
                formatter: function ({ data }) {
                  if (data.time) {
                    return "{text|" + data.name + "|" + data.time + "}";
                  } else {
                    return "{text|" + data.name + "}";
                  }
                },
                textStyle: {
                  rich: {
                    rich: {
                      text: {
                        color: "#fff",
                        backgroundColor: [
                          ["#79d1b7", "#13a46d"],
                          ["#fc755a", "#f5320b"],
                        ].map((c) => ({
                          type: "linear",
                          x: 0,
                          y: 0,
                          x2: 1,
                          y2: 0,
                          colorStops: [
                            { offset: 0, color: c[0] },
                            { offset: 1, color: c[1] },
                          ],
                        }))[1],
                        borderWidth: 1,
                        borderType: "solid",
                        borderColor: ["#b4ebde", "#fbc3b6"][1],
                        boxShadow: [
                          "0px 1px 4px #68bea0",
                          "0px 1px 4px #8d9bd1",
                        ][1],
                        fontSize: 18, //字体大小
                        padding: [6, 8, 6, 8],
                      },
                    },
                  },
                },
              },
              itemStyle: {
                color: "rgba(245,50,11,0.8)", //字体和点颜色
              },
            },
            ...{
              // 选中样式
              selectedMode: "single",
              select: {
                label: {
                  show: true,
                  distance: 18,
                  position: "top",
                  formatter: function ({ data }) {
                    if (data.time) {
                      return "{text|" + data.name + "|" + data.time + "}";
                    } else {
                      return "{text|" + data.name + "}";
                    }
                  },
                  textStyle: {
                    rich: {
                      rich: {
                        text: {
                          color: "#fff",
                          backgroundColor: [
                            ["#79d1b7", "#13a46d"],
                            ["#fc755a", "#f5320b"],
                          ].map((c) => ({
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [
                              { offset: 0, color: c[0] },
                              { offset: 1, color: c[1] },
                            ],
                          }))[1],
                          borderWidth: 1,
                          borderType: "solid",
                          borderColor: ["#b4ebde", "#fbc3b6"][1],
                          boxShadow: [
                            "0px 1px 4px #68bea0",
                            "0px 1px 4px #8d9bd1",
                          ][1],
                          fontSize: 18, //字体大小
                          padding: [6, 8, 6, 8],
                        },
                      },
                    },
                  },
                },
                itemStyle: {
                  color: "rgba(245,50,11,1)", //字体和点颜色
                },
              },
            },
            data,
          },
        ],
      };
    },
  },
};
</script>

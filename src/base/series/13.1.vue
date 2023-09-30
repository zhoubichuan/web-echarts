<template>
  <WebMap
    :config="getOptions"
    :data="data"
    @mapCreated="mapCreated"
    @changeData="getData"
  ></WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getData(8);
  },
  methods: {
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = res.data.map((item) => ({
          ...item,
          value: [item.latitude, item.longitude],
        }));
      }
    },
    mapCreated(echarts) {
      echarts.registerMap("china", this.$china3);
    },
    getOptions(data) {
      return {
        title: {
          text: "旅游导航",
          subtext: "时间/详情",
        },
        tooltip: {
          show: true,
          formatter: function ({ data }) {
            return (
              "<div style='max-width:200px;white-space: normal;'>" +
              data.time +
              "<br/>" +
              data.detail +
              "</div>"
            );
          },
        },
        geo: {
          roam: true,
          map: "china",
          zoom: 1.34,
          top: "16%",
          right: "20%",
          left: "20%",
          bottom: "-10%",
          scaleLimit: {
            min: 1,
            max: 80,
          },
          ...{
            // 普通样式
            label: {
              show: true,
              color: "rgba(130,143,200,1)",
            },
            itemStyle: {
              show: true,
              borderWidth: 1,
              borderColor: "rgba(196,207,254,1)",
              areaColor: "rgba(229,236,249,1)",
            },
          },
          emphasis: {
            // hover样式
            label: {
              show: true,
              color: "rgba(130,143,200,1)",
            },
            itemStyle: {
              borderColor: "rgba(196,207,254,1)",
              borderWidth: 1,
              areaColor: "rgba(229,236,249,1)",
            },
          },
          ...{
            // 选中样式
            selectedMode: "single",
            select: {
              label: {
                color: "rgba(255,255,255,1)",
              },
              itemStyle: {
                areaColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "rgba(66,99,232,1)" },
                    { offset: 1, color: "rgba(55,183,249,1)" },
                  ],
                  global: false,
                },
              },
            },
            regions: [
              {
                name: "南海诸岛",
                ...{
                  // 普通样式
                  label: {
                    show: true,
                    color: "rgba(130,143,200,1)",
                  },
                  itemStyle: {
                    show: true,
                    borderWidth: 1,
                    borderColor: "rgba(196,207,254,1)",
                    areaColor: "rgba(229,236,249,1)",
                  },
                },
                emphasis: {
                  // hover样式
                  label: {
                    show: true,
                    color: "rgba(130,143,200,1)",
                  },
                  itemStyle: {
                    borderColor: "rgba(196,207,254,1)",
                    borderWidth: 1,
                    areaColor: "rgba(229,236,249,1)",
                  },
                },
              },
              {
                name: "country",
                label: {
                  show: false,
                },
                itemStyle: {
                  areaColor: "#e5ecf9",
                  shadowColor: "rgba(158,201,243,0.85)",
                  borderColor: "rgba(183,219,255,1)",
                  shadowOffsetX: 9,
                  shadowOffsetY: 9,
                },
              },
            ],
          },
        },
        series: [
          {
            geoIndex: 0,
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function (val) {
              return [6, 3];
            },
            showEffectOn: "emphasis",
            zlevel: 2,
            rippleEffect: {
              period: 2.5, //波纹秒数
              brushType: "stroke", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 6, //波纹范围
            },
            hoverAnimation: true,
            ...{
              // 普通样式
              label: {
                show: true,
                distance: 18,
                position: "top",
                formatter: function ({ data }) {
                  return "{text|" + data.name + " | " + data.time + "}";
                },
                textStyle: {
                  rich: {
                    text: {
                      color: "#fff",
                      backgroundColor: "#aad1ff",
                      borderWidth: 1,
                      borderType: "solid",
                      borderColor: "#4263e8",
                      boxShadow: "0px 1px 4px #7998d6",
                      fontSize: 14, //字体大小
                      padding: [4, 4, 4, 4],
                    },
                  },
                },
              },
              itemStyle: {
                color: "#0579FA", //字体和点颜色
              },
            },
            emphasis: {
              // hover样式
              label: {
                show: true,
                distance: 18,
                position: "top",
                formatter: function ({ data }) {
                  return "{text|" + data.name + " | " + data.time + "}";
                },
                textStyle: {
                  rich: {
                    text: {
                      color: "#fff",
                      backgroundColor: "red",
                      borderWidth: 1,
                      borderType: "solid",
                      borderColor: "#4263e8",
                      boxShadow: "0px 1px 4px #7998d6",
                      fontSize: 14, //字体大小
                      padding: [4, 4, 4, 4],
                    },
                  },
                },
              },
              itemStyle: {
                color: "#0579FA", //字体和点颜色
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
                    return "{text|" + data.name + " | " + data.time + "}";
                  },
                  textStyle: {
                    rich: {
                      text: {
                        color: "#fff",
                        backgroundColor: "#aad1ff",
                        borderWidth: 1,
                        borderType: "solid",
                        borderColor: "#4263e8",
                        boxShadow: "0px 1px 4px #7998d6",
                        fontSize: 14, //字体大小
                        padding: [4, 4, 4, 4],
                      },
                    },
                  },
                },
                itemStyle: {
                  color: "blue", //字体和点颜色
                },
              },
            },
            data: data,
          },
        ],
      };
    },
  },
};
</script>
<style>
.map {
  height: 200px;
  width: 100%;
}
</style>
<template>
  <WebMap
    ref="map"
    :config="getOptions"
    :data="data"
    @mapCreated="mapCreated"
  ></WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    let res = await this.$api.getMap(4);
    if (res.data) {
      this.data = res.data.reduce(
        (p, c) => p.concat(...c.countrys.map((i) => i.citys)),
        []
      );
    }
  },
  methods: {
    mapCreated(echarts) {
      echarts.registerMap("world", this.$world2);
    },
    getOptions(data) {
      return {
        title: {
          text: "geo",
          subtext: "单位：元",
        },
        geo: {
          top: "5%",
          right: "5%",
          left: "5%",
          bottom: "5%",
          roam: true,
          map: "world",
          zoom: 1,
          scaleLimit: {
            min: 1,
            max: 20,
          },
          ...{
            // 普通样式
            label: {
              show: false,
              color: "rgba(130,143,200,1)",
            },
            itemStyle: {
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
                color: "#333",
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
                  
                },
              },
            },
          },
          regions: [
            {
              name: "world",
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
            ...data.map((item) => ({
              name: item.name,
              label: {
                show: true,
              },
              itemStyle: {
                areaColor: "#red",
              },
            })),
          ],
        },
        series: [
          {
            geoIndex: 0,
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function (val) {
              return [6, 3];
            },
            showEffectOn: "render",
            zlevel: 2,
            rippleEffect: {
              period: 2.5, //波纹秒数
              brushType: "stroke", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 6, //波纹范围
            },
            hoverAnimation: true,
            label: {
              formatter: function ({ data }) {
                if (data.time) {
                  return "{text|" + data.name + "|" + data.time + "}";
                } else {
                  return "{text|" + data.name + "}";
                }
              },
              distance: 18,
              position: "top",
              show: true,
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
            data: data.map((i) => ({
              name: i.cityname,
              value: [i.lon, i.lat],
            })),
          },
        ],
      };
    },
  },
};
</script>
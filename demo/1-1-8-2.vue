<template>
  <WebMap
    :config="getOptions"
    :data="data"
    @mapBeforeMount="beforeHandle"
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
    this.getData(1);
  },
  methods: {
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = res.data;
      }
    },
    beforeHandle(echarts) {
      echarts.registerMap("svgmap", this.$zhongguosvg);
    },
    getOptions(data, Map) {
      return {
        title: {
          text: "svg地图",
          subtext: "单位：元",
        },
        geo: [
          {
            tooltip: {
              formatter: function (params) {
                return [
                  '<div style="max-width:200px;">' + params.des + "</div>",
                ];
              },
            },
            top: 90,
            map: "svgmap",
            roam: true,
            zoom: 1.1,
            scaleLimit: {
              min: 1,
              max: 9,
            },
            ...{
              // 普通样式
              label: {
                show: true,
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
          },
        ],
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
                return "{text|" + data.name + "}";
              },
              distance: 18,
              position: "top",
              show: true,
              textStyle: {
                rich: {
                  text: {
                    fontSize: 14, //字体大小
                    color: "#023AFD",
                    backgroundColor: "lightgray",
                    padding: [4, 4, 4, 4],
                  },
                },
              },
            },
            itemStyle: {
              color: "#0579FA", //字体和点颜色
            },
            data: data.map((item) => {
              let value = Map.convertToPixel("geo", item.value);
              let [x, y] = value;
              return {
                ...item,
                value: [2 * x + 110, 3 * y + 4],
                label: {
                  formatter: "{b}",
                  color: "red",
                },
                itemStyle: {
                  color: "#96cc34",
                },
              };
            }),
          },
        ],
      };
    },
  },
};
</script>
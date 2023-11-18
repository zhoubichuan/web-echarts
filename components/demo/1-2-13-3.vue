<template>
  <WebMap
    :config="getOptions"
    :data="data"
    @mapCreated="mapCreated"
    @changeData="getData"
    @mapMounted="mapMounted"
    @click="getCurrentLocal"
  ></WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      currentLocal: { name: "当前位置", value: [] },
    };
  },
  async created() {
    this.getCurrentLocal();
    this.getData(1);
  },
  methods: {
    getCurrentLocal() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function successCallback(position) {
            const { latitude, longitude } = position.coords; // 纬度
            this.currentLocal.value = [longitude, latitude];
          },
          function errorCallback(error) {
            console.log("获取位置信息失败：" + error.message);
          }
        );
      } else {
        console.log("该浏览器不支持获取当前位置信息");
      }
    },
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = res.data.map((item) => ({ ...item, value: item.descript }));
      }
    },
    mapCreated() {},
    mapMounted(Map) {
      Map.on("georoam", function (params) {
        var option = Map.getOption();
        if (params.zoom != null && params.zoom != undefined) {
          option.geo[0].zoom = option.series[0].zoom;
          option.geo[0].center = option.series[0].center;
        } else {
          option.series[0].center = option.geo[0].center;
        }
        Map.setOption(option);
      });
    },
    getOptions(data) {
      return {
        title: {
          text: "geo + 多个map",
          subtext: "单位：元",
        },
        tooltip: {
          formatter: function (params) {
            return ['<div style="max-width:200px;">' + params + "</div>"];
          },
        },
        geo: [
          {
            map: "china",
            zoom: 1.14,
            top: "10%",
            right: "16%",
            left: "16%",
            bottom: "10%",
            roam: true,
            itemStyle: {
              areaColor: "#e5ecf9",
              shadowColor: "rgba(158,201,243,0.85)",
              borderColor: "rgba(183,219,255,1)",
              shadowOffsetX: 9,
              shadowOffsetY: 9,
              emphasis: {
                areaColor: "rgba(229,236,249,1)",
                borderWidth: 0,
                label: {
                  show: true,
                },
              },
            },
            regions: [
              {
                name: "南海诸岛",
                itemStyle: {
                  areaColor: "rgba(0, 10, 52, 1)",
                  borderColor: "rgba(0, 10, 52, 1)",
                  opacity: 0,
                  label: {
                    show: true,
                    color: "#009cc9",
                  },
                },
              },
            ],
          },
        ],
        series: [
          {
            map: "china", //使用
            type: "map",
            zoom: 1.14,
            top: "10%",
            right: "16%",
            left: "16%",
            bottom: "10%",
            roam: true,
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
            data,
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
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
            data: data.map((item) => ({
              ...item,
              label: {
                formatter: "{b}",
                color: "red",
              },
              itemStyle: {
                color: "#96cc34",
              },
            })),
          },
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 8, //箭头指向速度，值越小速度越快
              trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "triangle", //箭头图标
              symbolSize: [30, 30], //图标大小
            },
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                width: 0, //线条宽度
                opacity: 0, //尾迹线条透明度
                curveness: -2, //尾迹线条曲直度
              },
            },
            // data,
          },
          {
            type: "lines",
            zlevel: 3,
            effect: {
              show: true,
              period: 8, //箭头指向速度，值越小速度越快
              trailLength: 0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolOffset: ["34%", "-50%"],
              symbolSize: [10, 10], //图标大小
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(255 255 0 ,1)" },
                  { offset: 0.5, color: "rgba(255 255 0 ,0.2)" },
                  { offset: 1, color: "rgba(255 255 0 ,0)" },
                ],
                
              },
              width: 0.3, //线条宽度
              opacity: 0.3, //尾迹线条透明度
              curveness: -2, //尾迹线条曲直度
            },
            data: data
          },
        ],
      };
    },
  },
};
</script>

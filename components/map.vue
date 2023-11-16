<template>
  <div class="wrap-map">
    <div ref="map" class="map"></div>
    <!-- <div class="data-select">
      <input v-model="dataUrl" />
      <button @click="handlerChangeData">切换数据</button>
    </div> -->
  </div>
</template>
  
  <script>
const labelRight = {
  position: "right",
};
let geoLayer = (data, params = { type: "world" }, config = [{}]) => {
  if (params.type === "world") {
    let regions = {
      shadowMap: {
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
      data(data) {
        return data.map((item) => ({
          name: item.name,
          label: {
            show: true,
          },
          itemStyle: {
            areaColor: "#red",
          },
        }));
      },
    };
    let layer = config.map((item) => ({
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
            },
          },
        },
        regions: [regions.shadowMap, ...regions.data(data)],
      },
    }));
    return layer;
  } else if (params.type === "china") {
    let regions = {
      sea: {
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
      shadowMap: {
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
    };
    let layer = config.map((item) => ({
      roam: true,
      map: "china",
      zoom: 1.14,
      top: "10%",
      right: "16%",
      left: "16%",
      bottom: "10%",
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
            },
          },
        },
        regions: [regions.sea, regions.shadowMap],
      },
    }));
    return layer;
  }
};
let serierLayer = {
  effectScatter(data, config = [], params = { type: "world" }) {
    let layer = config.map((item) => ({
      geoIndex: 0,
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: function (val) {
        return [12, 6];
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
                backgroundColor: item.backgroundColor[0],
                borderWidth: 1,
                borderType: "solid",
                borderColor: item.borderColor[0],
                boxShadow: item.boxShadow[0],
                fontSize: 16, //字体大小
                padding: [4, 6, 4, 6],
              },
            },
          },
        },
        itemStyle: {
          color: "transparent", //字体和点颜色
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
                  backgroundColor: item.backgroundColor[1],
                  borderWidth: 1,
                  borderType: "solid",
                  borderColor: item.borderColor[1],
                  boxShadow: item.boxShadow[1],
                  fontSize: 16, //字体大小
                  padding: [4, 6, 4, 6],
                },
              },
            },
          },
        },
        itemStyle: {
          color: "none", //字体和点颜色
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
                    backgroundColor: item.backgroundColor[1],
                    borderWidth: 1,
                    borderType: "solid",
                    borderColor: item.borderColor[1],
                    boxShadow: item.boxShadow[1],
                    fontSize: 16, //字体大小
                    padding: [4, 6, 4, 6],
                  },
                },
              },
            },
          },
          itemStyle: {
            color: "blue", //字体和点颜色
          },
        },
      },
      data: data.filter((f) => f.filter === item.type),
    }));
    return layer;
  },
};

export default {
  name: "WebMap",
  props: {
    config: {
      type: Function,
    },
    data: {
      type: [Array, Object],
      default: () => [],
    },
    params: {
      type: Object,
    },
    styles: {
      type: String,
      default: "height: 100%;width:800px;",
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
    legend: {
      type: [Array, Object],
      default: () => [
        {
          orient: "vertical",
          left: "0%",
          top: "0%",
          bottom: "center",
          data: ["<10w", "10w-50w", "50w-100w", "100w-500w", ">500w"],
        },
      ],
    },
    xAxis: {
      type: [Array, Object],
      default: () => [
        {
          show: false,
        },
      ],
    },
    yAxis: {
      type: [Array, Object],
      default: () => [
        {
          show: false,
        },
      ],
    },
    series: {
      type: [Array, Object],
      default: () => [
        {
          type: "pie",
          radius: ["58%", "68%"],
        },
      ],
    },
  },
  data() {
    return {
      dataUrl: "",
      option: {
        title: this.titleTransform(this.title),
        tooltip: this.tooltip,
        grid: this.grid,
        legend: this.legend,
        series: this.series,
        mapInstance: "",
      },
    };
  },
  methods: {
    getOptions(data, params) {
      return {
        ...params.options,
        geo: geoLayer(data, params),
        series: [
          ...serierLayer.effectScatter(
            data,
            [
              {
                type: "1",
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
                })),
                borderColor: ["#b4ebde", "#fbc3b6"],
                boxShadow: ["0px 1px 4px #68bea0", "0px 1px 4px #8d9bd1"],
              },
              {
                type: "2",
                backgroundColor: [
                  ["#fc9e32", "#ff8000"],
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
                })),
                borderColor: ["#feddb7", "#fbc3b6"],
                boxShadow: ["0px 1px 4px #fc9e32", "0px 1px 4px #8d9bd1"],
              },
              {
                type: "3",
                backgroundColor: [
                  ["#44abf9", "#4263e8"],
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
                })),
                borderColor: ["#aad1ff", "#fbc3b6"],
                boxShadow: ["0px 1px 4px #7998d6", "0px 1px 4px #8d9bd1"],
              },
            ],
            params
          ),
        ],
      };
    },
    handlerChangeData() {
      this.$emit("changeData", this.dataUrl);
    },
    titleTransform({ text, subtext, ...others }) {
      let arr = [];
      let target = {};
      if (text) {
        target = {
          text: "{style1|}{style2|}{style3|}" + text,
          textStyle: {
            fontWeight: "800",
            color: "#333",
            fontSize: 18,
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
          left: 0,
          top: 0,
          ...others,
        };
        arr.push(target);
      }
      if (subtext) {
        target = {
          subtext: "{style1|}" + subtext,
          subtextStyle: {
            align: "right",
            verticalAlign: "top",
            color: "#666",
            fontSize: "18",
            rich: {
              style1: {},
            },
          },
          right: 0,
          top: -10,
          ...others,
        };
      }
      arr.push(target);
      return arr;
    },
    mapGetOption(data, params) {
      if (!this.config) {
        return {
          ...this.option,
          title: this.option.title
            ? this.titleTransform(this.option.title)
            : [],
        };
      } else if (this.params && params && params.type) {
        let { title, ...option } = this.getOptions(
          data,
          params,
          this.mapInstance
        );
        return {
          title: title ? this.titleTransform(title) : [],
          ...option,
        };
      } else {
        let { title, ...option } = this.config(val, this.mapInstance);
        return {
          title: title ? this.titleTransform(title) : [],
          ...option,
        };
      }
    },
    mapSetOption(options) {
      this.mapInstance.setOption(options);
    },
    handlerClick(Map) {
      //地图点击事件
      Map.on(
        "click",
        function (params) {
          var pixelPoint = [params.offsetX, params.offsetY];
          var dataPoint = Map.convertFromPixel({ geoIndex: 0 }, pixelPoint);
          this.$emit("click", Map);
        }.bind(this)
      );
    },
    handlerOutSideClick(Map) {
      //地图空白处点击事件
      Map.getZr().on(
        "click",
        function (params) {
          var pixelPoint = [params.offsetX, params.offsetY];
          var dataPoint = Map.convertFromPixel({ geoIndex: 0 }, pixelPoint);
          this.$emit("outSideClick", Map);
        }.bind(this)
      );
    },
    handlerResize(Map) {
      //窗口大小改变
      let timer;
      window.addEventListener("resize", () => {
        if (this.mapSetOption) {
          if (!timer) {
            timer = setTimeout(() => {
              Map.dispatch({ type: "restore" });
              this.mapSetOption(this.mapGetOption(this.data, this.params));
              Map.resize();
              this.$emit("resize", Map);
            }, 100);
          } else {
            clearTimeout(timer);
          }
        } else {
          this.$nextTick(() => {
            Map.resize();
            this.$emit("resize", Map);
          });
        }
      });
    },
    handlerScaleMove(Map) {
      //地图移动和缩放事件
      Map.on(
        "georoam",
        function (params) {
          var pixelPoint = [params.offsetX, params.offsetY];
          var dataPoint = Map.convertFromPixel({ geoIndex: 0 }, pixelPoint);
          this.$emit("scaleMove", Map);
        }.bind(this)
      );
    },
  },
  handlerMouseOver(Map) {
    //地图点击事件
    Map.on(
      "mouseover",
      function (params) {
        var pixelPoint = [params.offsetX, params.offsetY];
        var dataPoint = Map.convertFromPixel({ geoIndex: 0 }, pixelPoint);
        this.$emit("mouseover", Map);
      }.bind(this)
    );
  },
  handleShowTip(Map) {},
  handleHideTip(Map) {
    Map.dispatch({ type: "hideTip" });
  },
  beforeCreate() {
    this.$emit("mapBeforeCreate", this.$echarts);
  },
  created() {
    this.option = this.mapGetOption(this.data, this.params);
    if (Array.isArray(this.option.geo)) {
      if (this.option.geo[0].map === "world") {
        this.$echarts.registerMap("world", this.$world);
        this.option.geo[0].nameMap = require("./nameMap").default;
      } else {
        this.$echarts.registerMap("china", this.$china);
      }
    } else {
      if (this.option.geo.map === "world") {
        this.$echarts.registerMap("world", this.$world);
        this.option.geo.nameMap = require("./nameMap").default;
      } else {
        this.$echarts.registerMap("china", this.$china);
      }
    }
    this.$emit("mapCreated", this.$echarts);
  },
  beforeMount() {
    this.$emit("mapBeforeMount", this.$echarts);
  },
  mounted() {
    this.mapInstance = this.$echarts.init(this.$refs.map);
    this.mapSetOption(this.option);
    this.$emit("mapMounted", this.mapInstance);
    this.handlerClick(this.mapInstance);
    this.handlerOutSideClick(this.mapInstance);
    this.handlerResize(this.mapInstance);
    this.handlerScaleMove(this.mapInstance);
    this.handlerMouseOver(this.mapInstance);
  },
  beforeUpdate() {
    this.$emit("mapBeforeUpdate", this.$echarts);
  },
  updated() {
    this.$emit("mapUpdated", this.$echarts);
  },
  beforeDestroy() {
    this.$emit("mapBeforeDestroy", this.$echarts);
  },
  destroyed() {
    this.$emit("mapDestroyed", this.$echarts);
  },
  watch: {
    data: {
      handler(val) {
        if (!val.length || !this.mapInstance) return;
        this.mapSetOption(this.mapGetOption(val, this.params));
      },
      deep: true,
    },
    params: {
      handler(params) {
        if (!params || !this.mapInstance) return;
        this.mapSetOption(this.mapGetOption(this.data, params));
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-map {
  height: 100%;
  width: 100%;
  position: relative;
  .map {
    height: 100%;
    width: 100%;
  }
  .data-select {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
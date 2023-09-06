<template>
  <div ref="map" style="height: 100%; width: 100%"></div>
</template>
  
  <script>
const labelRight = {
  position: "right",
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
    params:{
type:Object,
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
    mapSetOption(val) {
      let { title, ...option } = this.config(val, this.mapInstance);
      this.mapInstance.setOption({
        title: title ? this.titleTransform(title) : [],
        ...option,
      });
    },
  },
  beforeMount() {
    this.$emit("mapBeforeMount", this.$echarts);
  },
  mounted() {
    this.$echarts.registerMap("word", this.$world);
    this.$echarts.registerMap("china", this.$china);
    this.mapInstance = this.$echarts.init(this.$refs.map);
    if (!this.config) {
      this.mapInstance.setOption(this.option);
    } else {
      this.mapSetOption(this.data);
    }
    this.$emit("echarts", this.mapInstance);
    this.mapInstance.getZr().on("click", function (params) {
      var pixelPoint = [params.offsetX, params.offsetY];
      var dataPoint = this.mapInstance.convertFromPixel(
        'geo',
        pixelPoint
      );
      console.log(pixelPoint,dataPoint);
    }.bind(this));
  },
  watch: {
    data: {
      handler(val) {
        if (!val.length) return;
        this.mapSetOption(val);
      },
      deep: true,
    },
  },
};
</script>
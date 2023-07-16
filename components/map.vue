<template>
  <div ref="map" style="height: 100%"></div>
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
    let title = ({ text, subtext, ...others }) => {
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
    };
    return {
      option: {
        title: titleTransform(this.title),
        tooltip: this.tooltip,
        grid: this.grid,
        legend: this.legend,
        series: this.series,
      },
      charts:null
    };
  },
  mounted() {
    this.$echarts.registerMap("word", this.$world);
    this.$echarts.registerMap("china", this.$china);
    this.charts = this.$echarts.init(this.$refs.map);
    if(!this.config){
      this.charts.setOption(this.option);
    }
    this.$emit('echarts',this.charts)
  },
  watch:{
    data:{
      handler(val){
        this.charts.setOption(this.config(val));
      },
      deep:true,
    }
  }
};
</script>
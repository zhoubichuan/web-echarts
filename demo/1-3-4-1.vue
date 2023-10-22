<template>
  <WebPie3d :config="getOptions" :data="data"></WebPie3d>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getPie(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        backgroundColor: "#000",
        title: {
          text: "10000000 GPS Points",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "world",
          roam: true,
          label: {
            emphasis: {
              show: false,
            },
          },
          silent: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
        },
        series: [
          {
            name: "弱",
            type: "scatterGL",
            progressive: 1e6,
            coordinateSystem: "geo",
            symbolSize: 1,
            zoomScale: 0.002,
            blendMode: "lighter",
            large: true,
            itemStyle: {
              color: "rgb(20, 15, 2)",
            },
            postEffect: {
              enable: true,
            },
            silent: true,
            dimensions: ["lng", "lat"],
            data: new Float32Array(),
          },
        ],
      };
    },
  },
};
</script>
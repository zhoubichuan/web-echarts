
```vue
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
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "曲面",
          subtext: "单位：时",
        },
        backgroundColor: "#fff",
        visualMap: {
          show: true,
          dimension: 2,
          min: -1,
          max: 1,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
        },
        xAxis3D: {
          type: "value",
        },
        yAxis3D: {
          type: "value",
        },
        zAxis3D: {
          type: "value",
          max: 1,
          splitNumber: 2,
        },
        grid3D: {
          viewControl: {
            projection: 'orthographic'
          },
          boxHeight: 40,
        },
        series: [
          {
            type: "surface",
            wireframe: {
              show: true,
            },
            shading: "color",
            equation: {
              x: {
                step: 0.05,
                min: -3,
                max: 3,
              },
              y: {
                step: 0.05,
                min: -3,
                max: 3,
              },
              z: function (x, y) {
                return (Math.sin(x * x + y * y) * x) / 3.14;
              },
            },
          },
        ],
      };
    },
  },
};
</script>
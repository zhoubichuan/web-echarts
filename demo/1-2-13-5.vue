<template>
  <WebMap
    @echarts="handleEvent"
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
  async created() {
    let res = await this.$api.getMap();
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    mapCreated(echarts) {
      echarts.registerMap("china", this.$china2);
    },
    handleEvent(e) {},
    getOptions(data) {
      return {
        animationDurationUpdate: 0,
        title: {
          top: 10,
          text: "平面图地图3D效果，整体地图渐变色，并且两层同步拖拽",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "china",
          aspectScale: 0.75,
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
          z: 2,
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
        series: [],
      };
    },
  },
};
</script>

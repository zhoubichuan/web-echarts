<template>
  <WebMap :config="getOptions" :data="data" @changeData="getData"> </WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getData(5);
  },
  methods: {
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = res.data.map((item) => ({ ...item, value: item.descript }));
      }
    },
    getOptions(data) {
      return {
        title: {
          text: "中国地图",
          subtext: "单位：元",
        },
        geo: {
          roam: true,
          map: "china",
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
              ...data.map((item) => {
                return {
                  ...item,
                  label: {
                    color: "re96cc34d",
                  },
                  itemStyle: {
                    areaColor: "#96cc34",
                  },
                };
              }),
            ],
          },
        },
      };
    },
  },
};
</script>
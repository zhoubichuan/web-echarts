<template>
  <WebMapConfig
    :data="data"
    :params="params"
    @mapBeforeMount="mapBeforeMount"
  ></WebMapConfig>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      params: {
        type: "china",
        registerName: "svgmap",
        options: {
          title: {
            text: "旅游导航",
            subtext: "时间/详情",
          },
        },
      },
    };
  },
  created() {
    this.getData(1);
  },
  methods: {
    mapBeforeMount(echarts) {
      echarts.registerMap("svgmap", this.$zhongguosvg);
    },
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = Object.freeze(
          res.data.map((item) => ({
            ...item,
            filter: "1",
            value: [item.latitude, item.longitude],
          }))
        );
      }
    },
    mapCreated(echarts) {
      echarts.registerMap("china", this.$china3);
    },
  },
};
</script>
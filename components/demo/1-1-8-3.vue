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
            text: "svg地图",
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
      echarts.registerMap("svgmap", this.$zhongguosvg2);
    },
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = Object.freeze(
          res.data.map((item) => ({
            ...item,
            filter: "2",
            value: [item.latitude, item.longitude],
          }))
        );
      }
    },
  },
};
</script>
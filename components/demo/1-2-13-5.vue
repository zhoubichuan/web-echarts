<template>
  <WebMapConfig :data="data" :params="params"></WebMapConfig>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      params: {
        themes: 3,
        type: "china",
        options: {
          title: {
            text: "平面图地图3D效果，整体地图渐变色，并且两层同步拖拽",
            subtext: "单位：元",
          },
        },
      },
    };
  },
  async created() {
    let res = await this.$api.getMap(1);
    if (res.data) {
      this.data = res.data.map((item) => ({
        ...item,
        filter: "3",
        value: item.descript,
      }));
    }
  },
  methods: {
    mapCreated(echarts) {
      echarts.registerMap("china", this.$china2);
    },
    mapMounted(e) {},
  },
};
</script>

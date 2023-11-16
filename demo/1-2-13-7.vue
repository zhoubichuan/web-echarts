<template>
  <WebMap
    :config="getOptions"
    :params="params"
    :data="data"
    @mapCreated="mapCreated"
  ></WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      params: {
        type: "world",
        options: {
          title: {
            text: "geo",
            subtext: "单位：元",
          },
        },
      },
    };
  },
  async mounted() {
    let res = await this.$api.getMap(6);
    if (res.data) {
      this.data = res.data.map((i) => ({
        filter: "2",
        name: i.name,
        value: i.images,
      }));
    }
  },
  methods: {
    mapCreated(echarts) {
      echarts.registerMap("world", this.$world2);
    },
  },
};
</script>
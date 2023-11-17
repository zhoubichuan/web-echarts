<template>
  <WebMapConfig :data="data" :params="params"></WebMapConfig>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      params: {
        type: "china",
        options: {
          title: {
            text: "旅游导航",
            subtext: "时间/详情",
          },
          tooltip: {
            show: true,
            formatter: function ({ data }) {
              return (
                "<div style='max-width:200px;white-space: normal;'>" +
                data.time +
                "<br/>" +
                data.detail +
                "</div>"
              );
            },
          },
        },
      },
    };
  },
  created() {
    this.getData(1);
  },
  methods: {
    async getData(url) {
      let res = await this.$api.getMap(url);
      if (res.data) {
        this.data = res.data.map((item) => ({
          ...item,
          filter: "1",
          value: [item.latitude, item.longitude],
        }));
      }
    },
    mapCreated(echarts) {
      echarts.registerMap("china", this.$china3);
    },
  },
};
</script>
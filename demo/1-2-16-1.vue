<template>
  <WebGraph :config="getOptions" :data="data"></WebGraph>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getGraph(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "单个关系图",
        },
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            data,
            links: data.reduce((p, n) => p.concat(n.link || []), []),
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      };
    },
  },
};
</script>

<template>
  <WebParallel :config="getOptions" :data="data"></WebParallel>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getParallel(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        parallelAxis: [
          { dim: 0, name: "Price" },
          { dim: 1, name: "Net Weight" },
          { dim: 2, name: "Amount" },
          {
            dim: 3,
            name: "Score",
            type: "category",
            data: ["Excellent", "Good", "OK", "Bad"],
          },
        ],
        series: {
          type: "parallel",
          lineStyle: {
            width: 4,
          },
          data: data,
        },
      };
    },
  },
};
</script>
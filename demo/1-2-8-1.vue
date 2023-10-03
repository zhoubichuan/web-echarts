<template>
  <WebTreemap :config="getOptions" :data="data"></WebTreemap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getTreemap(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        series: [
          {
            type: "treemap",
            data: data,
          },
        ],
      };
    },
  },
};
</script>

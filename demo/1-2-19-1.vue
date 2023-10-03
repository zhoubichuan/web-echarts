<template>
  <WebGauge :config="getOptions" :data="data"></WebGauge>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getGauge(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
            },
            data:data,
          },
        ],
      };
    },
  },
};
</script>

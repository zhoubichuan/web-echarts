<template>
  <WebBoxplot :config="getOptions" :data="data"></WebBoxplot>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getBoxplot(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "Michelson-Morley Experiment",
        },
        dataset: [
          {
            source: data,
          },
          {
            transform: {
              type: "boxplot",
              config: { itemNameFormatter: "expr {value}" },
            },
          },
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1,
          },
        ],
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          name: "km/s minus 299,000",
          splitArea: {
            show: true,
          },
        },
        series: [
          {
            name: "boxplot",
            type: "boxplot",
            datasetIndex: 1,
          },
          {
            name: "outlier",
            type: "scatter",
            datasetIndex: 2,
          },
        ],
      };
    },
  },
};
</script>

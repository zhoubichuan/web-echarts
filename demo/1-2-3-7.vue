<template>
  <WebPie :config="getOptions" :data="data"></WebPie>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = [
      { value: 40, name: "rose 1" },
      { value: 38, name: "rose 2" },
      { value: 32, name: "rose 3" },
      { value: 30, name: "rose 4" },
      { value: 28, name: "rose 5" },
      { value: 26, name: "rose 6" },
      { value: 22, name: "rose 7" },
      { value: 18, name: "rose 8" },
    ];
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "单个饼图-玫瑰图",
          subtext: "单位：元",
        },
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "数据图",
            type: "pie",
            radius: [30, 120],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data,
          },
        ],
      };
    },
  },
};
</script>

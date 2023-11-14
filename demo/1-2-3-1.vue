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
  async created() {
    let res = await this.$api.getPie(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "多个饼图",
          subtext: "单位：元",
        },
        legend: {
          orient: "vertical",
          right: "20%",
          top: "20%",
          bottom: "center",
          data: data.map((i) => i.name),
        },
        series: [
          {
            name: "背景图",
            type: "pie",
            radius: ["25%", "68%"],
            color: "#d9e1f5",
            silent: true,
            itemStyle: {
              color: "#d9e1f5",
              shadowOffsetX: -2,
              shadowOffsetY: -2,
              shadowBlur: 6,
              shadowColor: "rgba(0,0,0,0.16)",
            },
            data: [{ value: 0, label: { show: false } }],
          },
          {
            name: "数据图",
            type: "pie",
            radius: ["25%", "58%"],
            label: {
              position: "inner",
              formatter: "{d}%",
              textStyle: {
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
              },
            },
            data: data,
          },
        ],
      };
    },
  },
};
</script>
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
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "单个饼图",
        },
        backgroundColor: "#ffffff",
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        color: ["#8fc31f", "#f35833", "#00ccff", "#ffcc00"],
        legend: {
          orient: "vertical",
          x: "right",
          data: ["准时", "迟到", "请假", "未到"],
          formatter: function (name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
              if (name == oa[i].name) {
                return (
                  name +
                  "     " +
                  oa[i].value +
                  "     " +
                  ((oa[i].value / num) * 100).toFixed(2) +
                  "%"
                );
              }
            }
          },
        },
        series: [
          {
            name: "签到比例分析",
            type: "pie",
            radius: "55%",
            center: ["35%", "50%"],
            radius: ["30%", "58%"],
            data: [
              { value: 335, name: "准时" },
              { value: 310, name: "迟到" },
              { value: 234, name: "请假" },
              { value: 135, name: "未到" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              borderRadius: 30,
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} ({d}%)",
                },
                borderColor: "#ffffff",
                borderWidth: 10,
              },
              labelLine: { show: true },
            },
          },
        ],
      };
    },
  },
};
</script>

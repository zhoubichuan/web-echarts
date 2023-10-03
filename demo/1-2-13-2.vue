<template>
  <WebMap ref="map" :config="getOptions" :data="data"></WebMap>
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
      ["省份", "tt", "大区名", "补货绿", "日环比", "渐变色"],
      ["新疆", "799", "新疆大区", "800", "800", "800"],
      ["山东", "499", "山东大区", "34", "61", "67"],
      ["云南", "199", "西南大区", "800", "69", "389"],
    ];

    var count = 0;
    var timeTicket = null;
    var dataLength = 3;
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(() => {
      this.$refs.map.mapInstance.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
      });
      this.$refs.map.mapInstance.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      this.$refs.map.mapInstance.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count % dataLength,
      });
      count++;
    }, 1000);
  },
  methods: {
    getOptions(data) {
      return {
        title: {
          text: "geo + map",
          subtext: "单位：元",
        },
        dataset: {
          source: data,
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            return (
              "&nbsp;&nbsp;" +
              params.name +
              "&nbsp;&nbsp;&nbsp;" +
              params.data[3] +
              "人&nbsp;&nbsp;"
            );
          },
        },
        visualMap: {
          type: "piecewise",
          left: "15",
          bottom: "50",
          itemWidth: 27,
          itemHeight: 15,
          dimension: 3,
          textStyle: {
            color: "#333333",
            fontSize: 14,
          },
          pieces: [
            {
              min: 500,
              label: ">500",
            },
            {
              max: 500,
              min: 200,
              label: "200-500",
            },
            {
              max: 200,
              min: 0,
              label: "<200",
            },
            {
              value: 0,
              label: "无数据",
            },
          ],
          inRange: {
            color: ["#B2CAE0", "#D2EAFF", "#8AC6FD", "#45A5F8"],
          },
          outOfRange: {
            color: ["#999999"],
          },
        },
        geo: {
          roam: true,
          map: "china",
          scaleLimit: {
            min: 1,
            max: 20,
          },
          zoom: 1.14,
          top: "10%",
          right: "16%",
          left: "16%",
          bottom: "10%",
          ...{
            // 普通样式
            label: {
              show: true,
              color: "rgba(130,143,200,1)",
            },
            itemStyle: {
              show: true,
              borderWidth: 1,
              borderColor: "rgba(196,207,254,1)",
              areaColor: "rgba(229,236,249,1)",
            },
          },
          emphasis: {
            // hover样式
            label: {
              show: true,
              color: "rgba(130,143,200,1)",
            },
            itemStyle: {
              borderColor: "rgba(196,207,254,1)",
              borderWidth: 1,
              areaColor: "rgba(229,236,249,1)",
            },
          },
          ...{
            // 选中样式
            selectedMode: "single",
            select: {
              label: {
                color: "rgba(255,255,255,1)",
              },
              itemStyle: {
                areaColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "rgba(66,99,232,1)" },
                    { offset: 1, color: "rgba(55,183,249,1)" },
                  ],
                  global: false,
                },
              },
            },
          },
        },
        series: [
          {
            type: "map",
            map: "china",
            aspectScale: 0.75,
            label: {
              show: true,
              distance: 18,
              position: "top",
              formatter: function ({ data }) {
                if (data.time) {
                  return "{text|" + data.name + "|" + data.time + "}";
                } else {
                  return "{text|" + data.name + "}";
                }
              },
              textStyle: {
                rich: {
                  text: {
                    color: "#fff",
                    backgroundColor: "#aad1ff",
                    borderWidth: 1,
                    borderType: "solid",
                    borderColor: "#4263e8",
                    boxShadow: "0px 1px 4px #7998d6",
                    fontSize: 14, //字体大小
                    padding: [4, 4, 4, 4],
                  },
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#B2CAE0",
                borderColor: "#fff",
                borderWidth: 1,
              },
              emphasis: {
                areaColor: "#FFAE00",
              },
            },
          },
        ],
      };
    },
  },
};
</script>
<template>
  <WebMap @mapMounted="mapMounted" :config="getOptions" :data="data"></WebMap>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    // let res = await this.$api.getMap(2);
    // if (res.data) {
    //   this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    // }
  },
  methods: {
    mapMounted(Map) {
      Map.on("georoam", function (params) {
        var option = Map.getOption();
        if (params.zoom != null && params.zoom != undefined) {
          option.geo[0].zoom = option.series[0].zoom;
          option.geo[0].center = option.series[0].center;
        } else {
          option.series[0].center = option.geo[0].center;
        }
        Map.setOption(option);
      });
    },
    getOptions(data) {
      var yData = [];
      var barData = [];

      for (var i = 0; i < 10; i++) {
        barData.push(data[i]);
        yData.push(i + data[i].name);
      }
      return {
        title: {
          text: "geo + map + bar",
          subtext: "单位：元",
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            return params.name + "：" + params.data["value"] + "%";
          },
        },
        visualMap: {
          type: "continuous",
          orient: "horizontal",
          itemWidth: 10,
          itemHeight: 80,
          text: ["高", "低"],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          max: 2,
          inRange: {
            color: ["#6FCF6A", "#FFFD64", "#FF5000"],
          },
          textStyle: {
            color: "#7B93A7",
          },
          bottom: 30,
          left: "left",
        },
        grid: {
          right: 10,
          top: 135,
          bottom: 100,
          width: "20%",
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "category",
          inverse: true,
          nameGap: 16,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#ddd",
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#ddd",
            },
          },
          axisLabel: {
            interval: 0,
            margin: 85,
            textStyle: {
              color: "#455A74",
              align: "left",
              fontSize: 14,
            },
            rich: {
              a: {
                color: "#fff",
                backgroundColor: "#FAAA39",
                width: 20,
                height: 20,
                align: "center",
                borderRadius: 2,
              },
              b: {
                color: "#fff",
                backgroundColor: "#4197FD",
                width: 20,
                height: 20,
                align: "center",
                borderRadius: 2,
              },
            },
            formatter: function (params) {
              if (parseInt(params.slice(0, 1)) < 3) {
                return [
                  "{a|" +
                    (parseInt(params.slice(0, 1)) + 1) +
                    "}" +
                    "  " +
                    params.slice(1),
                ].join("\n");
              } else {
                return [
                  "{b|" +
                    (parseInt(params.slice(0, 1)) + 1) +
                    "}" +
                    "  " +
                    params.slice(1),
                ].join("\n");
              }
            },
          },
          data: yData,
        },
        geo: {
          roam: true,
          map: "china",
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
                color: "#333",
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
                  
                },
              },
            },
          },
        },
        series: [
          {
            name: "mapSer",
            type: "map",
            roam: false,
            geoIndex: 0,
            label: {
              show: false,
            },
            data: data,
          },
          {
            name: "barSer",
            type: "bar",
            roam: false,
            visualMap: false,
            zlevel: 2,
            barMaxWidth: 8,
            barGap: 0,
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    {
                      colorStops: [
                        {
                          offset: 0,
                          color: "#FFD119", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#FFAC4C", // 100% 处的颜色
                        },
                      ],
                    },
                    {
                      colorStops: [
                        {
                          offset: 0,
                          color: "#00C0FA", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#2F95FA", // 100% 处的颜色
                        },
                      ],
                    },
                  ];
                  if (params.dataIndex < 3) {
                    return colorList[0];
                  } else {
                    return colorList[1];
                  }
                },
                barBorderRadius: 15,
              },
            },
            data: barData,
          },
        ],
      };
    },
  },
};
</script>
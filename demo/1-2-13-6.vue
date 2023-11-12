<template>
  <div ref="pie" style="height: 100%"></div>
</template>

<script>
var mapData = [
  {
    name: "北京",
    devicesCount: 100, //总数
    feiyue1: 40, //肺悦1个数
    feiyue2: 60, //肺悦2个数
    value: 10, //使用个数
    devicesUseLv: "40%", //使用率
  },
  {
    name: "天津",
    devicesCount: 50,
    feiyue1: 40,
    feiyue2: 60,
    value: 20,
    devicesUseLv: "20%",
  },
  {
    name: "上海",
    devicesCount: 80,
    feiyue1: 40,
    feiyue2: 60,
    value: 30,
    devicesUseLv: "20%",
  },
  {
    name: "重庆",
    devicesCount: 90,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "河北",
    devicesCount: 130,
    feiyue1: 40,
    feiyue2: 60,
    value: 50,
    devicesUseLv: "20%",
  },
  {
    name: "河南",
    devicesCount: 160,
    feiyue1: 40,
    feiyue2: 60,
    value: 80,
    devicesUseLv: "20%",
  },
  {
    name: "云南",
    devicesCount: 110,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "辽宁",
    devicesCount: 320,
    feiyue1: 40,
    feiyue2: 60,
    value: 120,
    devicesUseLv: "20%",
  },
  {
    name: "黑龙江",
    devicesCount: 80,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "湖南",
    devicesCount: 60,
    feiyue1: 40,
    feiyue2: 60,
    value: 10,
    devicesUseLv: "20%",
  },
  {
    name: "安徽",
    devicesCount: 300,
    feiyue1: 40,
    feiyue2: 60,
    value: 270,
    devicesUseLv: "20%",
  },
  {
    name: "山东",
    devicesCount: 50,
    feiyue1: 40,
    feiyue2: 60,
    value: 9,
    devicesUseLv: "20%",
  },
  {
    name: "新疆",
    devicesCount: 40,
    feiyue1: 40,
    feiyue2: 60,
    value: 0,
    devicesUseLv: "20%",
  },
  {
    name: "江苏",
    devicesCount: 240,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "浙江",
    devicesCount: 450,
    feiyue1: 40,
    feiyue2: 60,
    value: 300,
    devicesUseLv: "20%",
  },
  {
    name: "江西",
    devicesCount: 20,
    feiyue1: 40,
    feiyue2: 60,
    value: 4,
    devicesUseLv: "20%",
  },
  {
    name: "湖北",
    devicesCount: 50,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "广西",
    devicesCount: 10,
    feiyue1: 40,
    feiyue2: 60,
    value: 0,
    devicesUseLv: "20%",
  },
  {
    name: "甘肃",
    devicesCount: 20,
    feiyue1: 40,
    feiyue2: 60,
    value: 1,
    devicesUseLv: "20%",
  },
  {
    name: "山西",
    devicesCount: 230,
    feiyue1: 40,
    feiyue2: 60,
    value: 140,
    devicesUseLv: "20%",
  },
  {
    name: "内蒙古",
    devicesCount: 200,
    feiyue1: 40,
    feiyue2: 60,
    value: 0,
    devicesUseLv: "20%",
  },
  {
    name: "陕西",
    devicesCount: 30,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "吉林",
    devicesCount: 77,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "福建",
    devicesCount: 55,
    feiyue1: 40,
    feiyue2: 60,
    value: 8,
    devicesUseLv: "20%",
  },
  {
    name: "贵州",
    devicesCount: 55,
    feiyue1: 40,
    feiyue2: 60,
    value: 7,
    devicesUseLv: "20%",
  },
  {
    name: "广东",
    devicesCount: 44,
    feiyue1: 40,
    feiyue2: 60,
    value: 6,
    devicesUseLv: "20%",
  },
  {
    name: "青海",
    devicesCount: 33,
    feiyue1: 40,
    feiyue2: 60,
    value: 5,
    devicesUseLv: "20%",
  },
  {
    name: "西藏",
    devicesCount: 10,
    feiyue1: 40,
    feiyue2: 60,
    value: 4,
    devicesUseLv: "20%",
  },
  {
    name: "四川",
    devicesCount: 99,
    feiyue1: 40,
    feiyue2: 60,
    value: 20,
    devicesUseLv: "20%",
  },
  {
    name: "宁夏",
    devicesCount: 145,
    feiyue1: 40,
    feiyue2: 60,
    value: 40,
    devicesUseLv: "20%",
  },
  {
    name: "海南",
    devicesCount: 122,
    feiyue1: 40,
    feiyue2: 60,
    value: 90,
    devicesUseLv: "20%",
  },
  {
    name: "台湾",
    devicesCount: 10,
    feiyue1: 4,
    feiyue2: 6,
    value: 0,
    devicesUseLv: "20%",
  },
  {
    name: "香港",
    devicesCount: 0,
    feiyue1: 0,
    feiyue2: 0,
    value: 0,
    devicesUseLv: "0%",
  },
  {
    name: "澳门",
    devicesCount: 0,
    feiyue1: 0,
    feiyue2: 0,
    value: 0,
    devicesUseLv: "0%",
  },
];
export default {
  data() {
    return {
      option: {
        tooltip: {
          show: true,
          formatter: function (params) {
            if (params.data) {
              return `${params.name}(<span style="font-size:10px;">持有设备量:${params.data.devicesCount}</span>)</br>${params.marker}使用总数：${params.data.value}</br>${params.marker}活跃度：${params.data.devicesUseLv}`;
            } else {
              return;
            }
          },
        },
        visualMap: {
          type: "continuous",
          text: ["高", "低"],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          // calculable: true,
          max: mapData[0].value,
          inRange: {
            color: ["#f7fbff", "#4e7cef", "#0549f3"],
          },
          textStyle: {
            color: "#000",
          },
          bottom: "-5",
          left: 0,
        },
        geo: {
          roam: true,
          map: "china",
          layoutCenter: ["50%", "50%"],
          layoutSize: "100%",
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
              formatter: function ({ data }) {
                if (data.time) {
                  return "{text|" + data.name + "|" + data.time + "}";
                } else {
                  return "{text|" + data.name + "}";
                }
              },
              distance: 18,
              position: "top",
              show: true,
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
            data: mapData,
          },
        ],
      },
    };
  },
  mounted() {
    let charts = this.$echarts.init(this.$refs.pie);
    charts.setOption(this.option);
  },
};
</script>
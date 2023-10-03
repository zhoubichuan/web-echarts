<template>
  <WebPie v-bind="option"></WebPie>
</template>

<script>
var dataStyle = {
  normal: {
    label: { show: false },
    labelLine: { show: false },
    shadowBlur: 40,
    shadowColor: "rgba(40, 40, 40, 0.5)",
  },
};
var placeHolderStyle = {
  normal: {
    color: "rgba(0,0,0,0)",
    label: { show: false },
    labelLine: { show: false },
  },
  emphasis: {
    color: "rgba(0,0,0,0)",
  },
};
export default {
  data() {
    return {
      option: {
        color: ["#85b6b2", "#6d4f8d", "#cd5e7e", "#e38980", "#f7db88"],
        tooltip: {
          show: true,
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          itemGap: 12,
          top: "87%",
          data: ["01", "02", "03", "04", "05", "06"],
        },
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: false,
            radius: [180, 200],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 300,
                name: "01",
              },
              {
                value: 50,
                name: "invisible",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 2",
            type: "pie",
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [
              {
                value: 150,
                name: "02",
              },
              {
                value: 60,
                name: "invisible",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 3",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 160],
            itemStyle: dataStyle,
            data: [
              {
                value: 80,
                name: "03",
              },
              {
                value: 50,
                name: "invisible",
                itemStyle: placeHolderStyle,
              },
            ],
          },
          {
            name: "Line 4",
            type: "pie",
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,
            data: [
              {
                value: 45,
                name: "04",
              },
              {
                value: 30,
                name: "invisible",
                itemStyle: placeHolderStyle,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

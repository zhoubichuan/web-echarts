<template>
  <WebBar v-bind="option"></WebBar>
</template>

<script>
var lineColor = "#406A92";
var labelColor = "#fff";
var fontSize = "38";
var lineWidth = 3;
export default {
  data() {
    return {
      option: {
        title: {
          text: "多个xAxis + 多个yAxis + 多个象形柱图",
        },
        backgroundColor: "#eee",
        grid: {
          left: "0%",
          right: "0%",
          top: "25%",
          bottom: "7%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "axis",
          textStyle: {
            fontSize: fontSize,
          },
        },
        legend: {
          show: true,
          x: "center",
          y: "1%",
          itemWidth: 45,
          itemHeight: 18,
          data: ["可靠率", "合格率"],
        },
        xAxis: [
          {
            type: "category",
            name: "",
            nameTextStyle: {
              fontSize: fontSize,
              color: labelColor,
              lineHeight: 90,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: lineColor,
                width: lineWidth,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#197584",
              },
            },
            data: ["城市", "农村"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            nameTextStyle: {
              fontSize: fontSize,
              color: labelColor,
            },
            nameGap: 30,
            axisLine: {
              show: false,
              lineStyle: {
                color: lineColor,
                width: lineWidth,
              },
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: lineColor,
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [50, 25],
            symbolOffset: [-75, -10],
            symbolPosition: "end",
            z: 12,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: "top",
                fontSize: fontSize,
              },
            },
            color: "#26B2E8",
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            tooltip: {
              show: false,
            },
            symbolSize: [70, 30],
            symbolOffset: [-75, 15],
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#2EA9E5",
                borderType: "solid",
                borderWidth: 3,
              },
            },
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            tooltip: {
              show: false,
            },
            symbolSize: [90, 40],
            symbolOffset: [-75, 20],
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#26B2E8",
                borderType: "solid",
                borderWidth: 4,
              },
            },
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [50, 25],
            tooltip: {
              show: false,
            },
            symbolOffset: [-75, 10],
            z: 12,
            color: "#26B2E8",
            data: [99.9, 99.9],
          },
          {
            type: "bar",
            name: "合格率",
            barWidth: "50",
            barGap: "200%",
            barCateGoryGap: "10%",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: fontSize,
                opacity: 1,
                formatter: "{c}%",
                offset: [0, -20],
              },
            },
            itemStyle: {
              normal: {
                color: "#1E93C6",
                opacity: 1,
              },
            },
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [50, 25],
            symbolOffset: [75, -10],
            symbolPosition: "end",
            z: 12,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: "top",
                fontSize: fontSize,
                color: "#fff",
              },
            },
            color: "#20D3AB",
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            tooltip: {
              show: false,
            },
            symbolSize: [70, 30],
            symbolOffset: [75, 15],
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#20D3AB",
                borderType: "solid",
                borderWidth: 3,
              },
            },
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            tooltip: {
              show: false,
            },
            symbolSize: [90, 40],
            symbolOffset: [75, 20],
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#20D3AB",
                borderType: "solid",
                borderWidth: 4,
              },
            },
            data: [99.9, 99.9],
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [50, 25],
            tooltip: {
              show: false,
            },
            symbolOffset: [75, 10],
            z: 12,
            color: "#20D3AB",
            data: [99.9, 99.9],
          },
          {
            type: "bar",
            name: "可靠率",
            barWidth: "50",
            barGap: "200%",
            barCateGoryGap: "10%",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: fontSize,
                formatter: "{c}%",
                offset: [0, -20],
              },
            },
            itemStyle: {
              normal: {
                color: "#1AAE96",
                opacity: 1,
              },
            },
            data: [99.9, 99.9],
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div ref="pie" style="height: 100%"></div>
  <!-- <WebPie :config="getOptions" :data="data"></WebPie> -->
</template>

<script>
var data1 = [
  {
    name: "男",
    name1: "本科及以上",
    value: 13211,
  },
  {
    name: "男",
    name1: "高中",
    value: 42111,
  },
  {
    name: "男",
    name1: "初中及以下",
    value: 81711,
  },
  {
    name: "男",
    name1: "其他",
    value: 121711,
  },
];
var data2 = [
  {
    name: "女",
    name1: "本科及以上",
    value: 13211,
  },
  {
    name: "女",
    name1: "高中",
    value: 42111,
  },
  {
    name: "女",
    name1: "初中及以下",
    value: 81711,
  },
  {
    name: "女",
    name1: "其他",
    value: 121711,
  },
];
var data = [...data1, ...data2];
var objData = array2obj(data, "name");
var optionData = getData(data);
function getArrayValue(array, key) {
  var key = key || "value";
  var res = [];
  if (array) {
    array.forEach(function (t) {
      res.push(t[key]);
    });
  }
  return res;
}

function array2obj(array, key) {
  var resObj = {};
  for (var i = 0; i < array.length; i++) {
    resObj[array[i][key]] = array[i];
  }
  return resObj;
}

function getData(data) {
  var res = {
    series: [],
    yAxis: [],
  };
  for (let i = 0; i < data1.length; i++) {
    res.series.push({
      name: data1[i].name1,
      type: "pie",
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [80 - i * 15 + "%", 72 - i * 15 + "%"],
      center: ["30%", "55%"],
      label: {
        show: false,
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        borderRadius: [30, 30, -30, -30],
      },
      data: [
        {
          value: data1[i].value,
          name: "男",
        },
        {
          value: data2[i].value,
          name: "女",
        },
        {
          value:
            data.map((i) => i.value).reduce((p, n) => p + n, 0) -
            data1[i].value -
            data2[i].value,
          name: "",
          itemStyle: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
      ],
    });
    res.series.push({
      name: "",
      type: "pie",
      silent: true,
      z: 1,
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [80 - i * 15 + "%", 72 - i * 15 + "%"],
      center: ["30%", "55%"],
      label: {
        show: false,
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: "#E3F0FF",
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
        {
          value: 2.5,
          name: "",
          itemStyle: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
      ],
    });
    res.yAxis.push(
      data1[i].name1 +
        ":" +
        (
          (data1[i].value +
            data2[i].value /
              data.map((i) => i.value).reduce((p, n) => p + n, 0)) *
          100
        ).toFixed(2) +
        "%"
    );
  }
  return res;
}
export default {
  data() {
    return {
      option: {
        title: {
          text: "男女分布",
        },
        legend: {
          show: true,
          top: "center",
          left: "70%",
          data: data.map((i) => i.name),
          itemWidth: 30,
          itemHeight: 20,
          width: 50,
          padding: [0, 5],
          itemGap: 25,
          formatter: function (name) {
            return (
              "{title|" + name + "}\n{value|" + objData[name].value + "人}"
            );
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 10,
                lineHeight: 10,
                color: "rgba(0,0,0,.45)",
              },
              value: {
                fontSize: 14,
                lineHeight: 18,
                color: "rgba(0,0,0,.85)",
              },
            },
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a}<br>{b}:{c}({d}%)",
        },
        color: ["#FF8700", "#ffc300", "#00e473", "#009DFF"],
        grid: {
          top: "20%",
          bottom: "48%",
          left: "30%",
          containLabel: false,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              inside: true,
              textStyle: {
                color: "#000",
                fontSize: 10,
              },
              show: true,
            },
            data: optionData.yAxis,
          },
        ],
        xAxis: [
          {
            show: false,
          },
        ],
        series: optionData.series,
      },
    };
  },
  mounted() {
    let charts = this.$echarts.init(this.$refs.pie);
    charts.setOption(this.option);
  },
};
</script>
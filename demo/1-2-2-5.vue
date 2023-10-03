
<template>
  <WebBar v-bind="option"></WebBar>
</template>

<script>
let data = {
  female: {
    name: "女性",
    data: [
      {
        value: 5,
        label: "小于1岁",
      },
      {
        value: 12,
        label: "1 ～ 9 岁",
      },
      {
        value: 10,
        label: "10 ～ 19 岁",
      },
      {
        value: 7,
        label: "20 ～ 29 岁",
      },
      {
        value: 32,
        label: "30 ～ 39 岁",
      },
      {
        value: 40,
        label: "40 ～ 49 岁",
      },
      {
        value: 28,
        label: "50 ～ 59 岁",
      },
      {
        value: 34,
        label: "大于60岁",
      },
    ],
  },
  male: {
    name: "男性",
    data: [
      {
        value: 5,
        label: "小于1岁",
      },
      {
        value: 19,
        label: "1 ～ 9 岁",
      },
      {
        value: 23,
        label: "10 ～ 19 岁",
      },
      {
        value: 43,
        label: "20 ～ 29 岁",
      },
      {
        value: 34,
        label: "30 ～ 39 岁",
      },
      {
        value: 53,
        label: "40 ～ 49 岁",
      },
      {
        value: 12,
        label: "50 ～ 59 岁",
      },
      {
        value: 34,
        label: "大于60岁",
      },
    ],
  },
};
let yAxisData = new Set();
let legendData = [];
_.forEach(data, (d) => {
  legendData.push(d.name);
  _.forEach(d.data, (item) => {
    yAxisData.add(item.label);
  });
});

let top = 60;
let bottom = 60;

yAxisData = [...yAxisData];
export default {
  data() {
    return {
      option: {
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "center",
          bottom: 24,
          itemWidth: 15,
          itemHeight: 11,
          itemGap: 20,
          borderRadius: 4,
          textStyle: {
            color: "#262C41",
            fontSize: 14,
          },
          data: legendData,
        },
        grid: [
          {
            left: "12%",
            width: "28%",
            containLabel: true,
            bottom,
          },
          {
            left: "52%",
            width: "0%",
            bottom: bottom + 16,
          },
          {
            right: "12%",
            width: "28%",
            containLabel: true,
            bottom,
          },
        ].map((item) =>
          _.merge(
            {
              top,
            },
            item
          )
        ),
        xAxis: [
          {
            type: "value",
            inverse: true,
            axisLabel: {
              show: true,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
            },
          },
          {
            gridIndex: 1,
            show: true,
          },
          {
            gridIndex: 2,
            type: "value",
            axisLabel: {
              show: true,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
            },
          },
        ].map((item) =>
          _.merge(item, {
            axisLabel: {
              color: "#949AA8",
              margin: 0,
            },
            splitLine: {
              lineStyle: {
                color: "#E0E0E0",
                type: "dashed",
              },
            },
          })
        ),
        yAxis: [
          {
            position: "right",
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: true,
            },
          },
          {
            gridIndex: 1,
            position: "center",
            axisLabel: {
              align: "center",
              padding: [8, 0, 0, 0],
              fontSize: 12,
              color: `#262C41`,
            },
            axisLine: {
              show: false,
            },
          },
          {
            gridIndex: 2,
            position: "left",
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: true,
            },
          },
        ].map((item) => {
          return _.merge(item, {
            type: "category",
            inverse: false,
            axisLine: {
              lineStyle: {
                color: "#E0E0E0",
              },
            },
            axisTick: {
              show: false,
            },
            data: yAxisData,
          });
        }),
        series: [
          {
            name: _.get(data, "male.name"),
            label: {
              position: "left",
            },
            itemStyle: {
              color: "#01C5B2",
              barBorderRadius: [4, 0, 0, 4],
            },
            data: _.map(_.get(data, "male.data"), (d) => d.value),
          },
          {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: _.get(data, "female.name"),
            label: {
              position: "right",
            },
            itemStyle: {
              color: "#FB6F6C",
              barBorderRadius: [0, 4, 4, 0],
            },
            data: _.map(_.get(data, "female.data"), (d) => d.value),
          },
        ].map((item) =>
          _.merge(item, {
            type: "bar",
            barWidth: 11,
            label: {
              show: true,
              fontFamily: "Rubik-Medium",
              fontSize: 14,
              distance: 10,
            },
          })
        ),
      },
    };
  },
};
</script>

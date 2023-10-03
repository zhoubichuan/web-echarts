<template>
  <WebCustom :config="getOptions" :data="data"></WebCustom>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getCustom(1);
    if (res.data) {
      this.data = res.data;
    }
  },
  methods: {
    getOptions(data) {
      const colorList = [
        "#4f81bd",
        "#c0504d",
        "#9bbb59",
        "#604a7b",
        "#948a54",
        "#e46c0b",
      ];
      data = data.map(function (item, index) {
        return {
          value: item,
          itemStyle: {
            color: colorList[index],
          },
        };
      });
      return {
        title: {
          text: "Profit",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          scale: true,
        },
        yAxis: {},
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              var yValue = api.value(2);
              var start = api.coord([api.value(0), yValue]);
              var size = api.size([api.value(1) - api.value(0), yValue]);
              var style = api.style();
              return {
                type: "rect",
                shape: {
                  x: start[0],
                  y: start[1],
                  width: size[0],
                  height: size[1],
                },
                style: style,
              };
            },
            label: {
              show: true,
              position: "top",
            },
            dimensions: ["from", "to", "profit"],
            encode: {
              x: [0, 1],
              y: 2,
              tooltip: [0, 1, 2],
              itemName: 3,
            },
            data: data,
          },
        ],
      };
    },
  },
};
</script>

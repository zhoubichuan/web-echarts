export let geoLayer = (data, params = { type: "world" }, config = [{}]) => {
  if (params.type === "world") {
    let regions = {
      shadowMap: {
        name: "world",
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: "#e5ecf9",
          shadowColor: "rgba(158,201,243,0.85)",
          borderColor: "rgba(183,219,255,1)",
          shadowOffsetX: 9,
          shadowOffsetY: 9,
        },
      },
      data(data) {
        return data.map((item) => ({
          name: item.name,
          label: {
            show: true,
          },
          itemStyle: {
            areaColor: "#red",
          },
        }));
      },
    };
    let layer = config.map((item) => ({
      top: "5%",
      right: "5%",
      left: "5%",
      bottom: "5%",
      roam: true,
      map: params.registerName || "world",
      zoom: 1,
      scaleLimit: {
        min: 1,
        max: 20,
      },
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
            },
          },
        },
        regions: [regions.shadowMap, ...regions.data(data)],
      },
    }));
    return layer;
  } else if (params.type === "china") {
    let regions = {
      sea: {
        name: "南海诸岛",
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
      },
      shadowMap: {
        name: "country",
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: "#e5ecf9",
          shadowColor: "rgba(158,201,243,0.85)",
          borderColor: "rgba(183,219,255,1)",
          shadowOffsetX: 9,
          shadowOffsetY: 9,
        },
      },
    };
    let layer = config.map((item) => ({
      roam: true,
      map: params.registerName || "china",
      zoom: 1.14,
      top: "10%",
      right: "18%",
      left: "18%",
      bottom: "5%",
      scaleLimit: {
        min: 1,
        max: 80,
      },
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
            },
          },
        },
        regions: [regions.sea, regions.shadowMap],
      },
    }));
    return layer;
  }
};
export let serierLayer = {
  effectScatter(data, config = [], params = { type: "world" }) {
    let layer = config.map((item) => ({
      geoIndex: 0,
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: function (val) {
        return [12, 6];
      },
      showEffectOn: "emphasis",
      zlevel: 2,
      rippleEffect: {
        period: 2.5, //波纹秒数
        brushType: "stroke", //stroke(涟漪)和fill(扩散)，两种效果
        scale: 6, //波纹范围
      },
      hoverAnimation: true,
      ...{
        // 普通样式
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
                backgroundColor: item.backgroundColor[0],
                borderWidth: 1,
                borderType: "solid",
                borderColor: item.borderColor[0],
                boxShadow: item.boxShadow[0],
                fontSize: 16, //字体大小
                padding: [4, 6, 4, 6],
              },
            },
          },
        },
        itemStyle: {
          color: "transparent", //字体和点颜色
        },
      },
      emphasis: {
        // hover样式
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
              rich: {
                text: {
                  color: "#fff",
                  backgroundColor: item.backgroundColor[1],
                  borderWidth: 1,
                  borderType: "solid",
                  borderColor: item.borderColor[1],
                  boxShadow: item.boxShadow[1],
                  fontSize: 16, //字体大小
                  padding: [4, 6, 4, 6],
                },
              },
            },
          },
        },
        itemStyle: {
          color: "none", //字体和点颜色
        },
      },
      ...{
        // 选中样式
        selectedMode: "single",
        select: {
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
                rich: {
                  text: {
                    color: "#fff",
                    backgroundColor: item.backgroundColor[1],
                    borderWidth: 1,
                    borderType: "solid",
                    borderColor: item.borderColor[1],
                    boxShadow: item.boxShadow[1],
                    fontSize: 16, //字体大小
                    padding: [4, 6, 4, 6],
                  },
                },
              },
            },
          },
          itemStyle: {
            color: "blue", //字体和点颜色
          },
        },
      },
      data: data.filter((f) => f.filter === item.type),
    }));
    return layer;
  },
};
export let serierLayerConfig = {
  effectScatter: [
    {
      type: "1",
      backgroundColor: [
        ["#79d1b7", "#13a46d"],
        ["#fc755a", "#f5320b"],
      ].map((c) => ({
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          { offset: 0, color: c[0] },
          { offset: 1, color: c[1] },
        ],
      })),
      borderColor: ["#b4ebde", "#fbc3b6"],
      boxShadow: ["0px 1px 4px #68bea0", "0px 1px 4px #8d9bd1"],
    },
    {
      type: "2",
      backgroundColor: [
        ["#fc9e32", "#ff8000"],
        ["#fc755a", "#f5320b"],
      ].map((c) => ({
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          { offset: 0, color: c[0] },
          { offset: 1, color: c[1] },
        ],
      })),
      borderColor: ["#feddb7", "#fbc3b6"],
      boxShadow: ["0px 1px 4px #fc9e32", "0px 1px 4px #8d9bd1"],
    },
    {
      type: "3",
      backgroundColor: [
        ["#44abf9", "#4263e8"],
        ["#fc755a", "#f5320b"],
      ].map((c) => ({
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          { offset: 0, color: c[0] },
          { offset: 1, color: c[1] },
        ],
      })),
      borderColor: ["#aad1ff", "#fbc3b6"],
      boxShadow: ["0px 1px 4px #7998d6", "0px 1px 4px #8d9bd1"],
    },
  ],
};

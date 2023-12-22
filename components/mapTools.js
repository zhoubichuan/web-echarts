const isEmpty = false
export const themes = [{
  color: `rgba(191,176,154,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(246,239,228,${isEmpty ? 0.7 : 1})`,
  borderColor: `rgba(229,213,205,${isEmpty ? 0.7 : 1})`,
},
{
  color: `rgba(137,150,204,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(229,236,249,${isEmpty ? 0.7 : 1})`,
  borderColor: `rgba(196,207,254,${isEmpty ? 0.7 : 1})`,
},
{
  color: `rgba(200,150,150,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(249,231,231,${isEmpty ? 0.7 : 1})`,
  borderColor: `rgba(222,180,180,${isEmpty ? 0.7 : 1})`,
},
{
  color: `rgba(154,172,160,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(228,241,232,${isEmpty ? 0.7 : 1})`,
  borderColor: `rgba(193,220,202,${isEmpty ? 0.7 : 1})`,
}, {
  color: `rgba(135,169,209,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(211,230,252,${isEmpty ? 0.7 : 1})`,
  borderColor: `rgba(196,207,254,${isEmpty ? 0.7 : 1})`,
}, {
  borderColor: `rgba(196,207,254,${isEmpty ? 0.7 : 1})`,
  areaColor: `rgba(229,236,249,${isEmpty ? 0.7 : 1})`,
  color: `rgba(130,143,200,${isEmpty ? 0.7 : 1})`,
}].map(({ color, areaColor, borderColor }) => ({
  // 普通样式
  label: {
    show: true,
    color,
  },
  itemStyle: {
    show: true,
    borderWidth: 1,
    borderColor,
    areaColor,
  },
  emphasis: {
    // hover样式
    label: {
      show: true,
      color,
    },
    itemStyle: {
      borderColor,
      borderWidth: 1,
      areaColor,
    },
  },
}))


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
      silent: true,
      roam: true,
      map: params.registerName || "world",
      zoom: 1,
      nameMap: require("./nameMap").default,
      scaleLimit: {
        min: 1,
        max: 20,
      },
      ...themes[params.themes || 0],
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
        ...themes[params.themes || 0],
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
      silent: true,
      top: "10%",
      right: "18%",
      left: "18%",
      bottom: "5%",
      nameMap: require("./nameMap2").default,
      scaleLimit: {
        min: 1,
        max: 80,
      },
      ...themes[params.themes || 0],
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
      rippleEffect: {
        period: 1.5, //波纹秒数
        color: 'rgba(245,50,11,1)',
        brushType: "stroke", //stroke(涟漪)和fill(扩散)，两种效果
        scale: 3, //波纹范围
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
                  fontSize: 18, //字体大小
                  padding: [6, 8, 6, 8],
                },
              },
            },
          },
        },
        itemStyle: {
          color: 'rgba(245,50,11,1)', //字体和点颜色
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
                    fontSize: 18, //字体大小
                    padding: [6, 8, 6, 8],
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

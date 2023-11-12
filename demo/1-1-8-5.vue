  <template>
    <WebMap
      :config="getOptions"
      :data="data"
      @mapBeforeMount="beforeHandle"
      @changeData="getData"
    ></WebMap>
  </template>
  <script>
  export default {
    data() {
      return {
        data: [],
      };
    },
    created() {
      this.getData(3);
    },
    methods: {
      async getData(url) {
        let res = await this.$api.getMap(url);
        if (res.data) {
          this.data = res.data;
        }
      },
      beforeHandle(echarts) {
        echarts.registerMap("svgmap", this.$beijingsvg2);
      },
      getOptions(data, Map) {
        return {
          title: {
            text: "svg地图",
            subtext: "单位：元",
          },
          geo: {
            tooltip: {
              formatter: function (params) {
                return [
                  '<div style="max-width:200px;">' + params.des + "</div>",
                ];
              },
            },
            map: "svgmap",
            roam: true,
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
          series: {
            type: "effectScatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            symbolSize: 5,
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 6,
              scale: 3,
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              formatter: function (params) {
                return params.data.name;
              },
              fontSize: 16,
              position: "right",
              offset: [15, 0],
              color: "#fff",
              show: true,
            },
            itemStyle: {
              color: "#fff",
              shadowBlur: 20,
            },
            symbolSize: 10,
            data: data.map((item) => {
              let value = Map.convertToPixel("geo", item.value);
              let [x, y] = value;
              return {
                ...item,
                value: [x + 240, y + 240],
                label: {
                  formatter: "{b}",
                  color: "red",
                },
                itemStyle: {
                  color: "#96cc34",
                },
              };
            }),
          },
        };
      },
    },
  };
  </script>
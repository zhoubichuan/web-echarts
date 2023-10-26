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
      this.getData(1);
    },
    methods: {
      async getData(url) {
        let res = await this.$api.getMap(url);
        if (res.data) {
          this.data = res.data;
        }
      },
      beforeHandle(echarts) {
        echarts.registerMap("svgmap", this.$beijingsvg);
      },
      getOptions(data, Map) {
        return {
          title: {
            text: "svg地图",
            subtext: "单位：元",
          },
          tooltip: {
            show: true,
            formatter: function (params) {
              var tipHtml = "";
              tipHtml =
                "<div >" +
                '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
                '        <span style="line-height:50px;margin-left:18px">' +
                params.name +
                "</span>" +
                '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
                "    </div>" +
                '    <div style="height:110px;width:100%;background:#fff">' +
                '        <div style="padding-left:18px;padding-top:22px">' +
                '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
                "            <span>上传表格数量</span>" +
                '            <span style="float:right;margin-right:18px">' +
                "params.data.tipData[0]" +
                "万</span>" +
                "        </div>" +
                '        <div style="padding-left:18px;padding-top:14px">' +
                '            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
                "            <span>上传数据条数</span>" +
                '            <span style="float:right;margin-right:18px">' +
                "params.data.tipData[1]" +
                "条</span>" +
                "        </div>" +
                "    </div>";
              ("</div>");
              return tipHtml;
            },
            position: function (point, params, dom, rect, size) {
              var x = 0;
              var y = 0;
              var pointX = point[0];
              var pointY = point[1];
              var boxWidth = size.contentSize[0];
              var boxHeight = size.contentSize[1];
              if (boxWidth > pointX) {
                x = pointX + 10;
              } else {
                x = pointX - boxWidth - 5;
              }
              if (boxHeight > pointY) {
                y = 5;
              } else {
                y = pointY - boxHeight;
              }
              return [x, y];
            },
          },
          geo: {
            map: "svgmap",
            roam: true,
            zoom: 0.2,
            // layoutCenter: ["70%", "70%"],
            // 设定坐标系大小
            // top:-100,
            // left:0,
            // layoutSize: 300,
            // center: [116.410886, 389.881949],
            // center:[0,0],
            boundingCoords: [
              // 定位左上角经纬度
              [-180, 90],
              // 定位右下角经纬度
              [180, -90],
            ],
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
                    global: false,
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
                value,
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
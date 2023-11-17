<template>
  <WebMap
    :config="getOptions"
    :data="targetData"
    @mapCreated="mapCreated"
    @changeData="getData"
  ></WebMap>
</template>

<script>
import WebMap from "./map";
import { geoLayer, serierLayer } from "./mapTools.js";
export default {
  name: "WebMapConfig",
  component: {
    WebMap: WebMap,
  },
  props: {
    params: {
      type: Object,
      default: () => ({
        type: "china",
      }),
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    data: {
      handler(val) {
        this.targetData = Object.freeze(val);
      },
      deep: true,
    },
    params: {
      handler(val) {},
      deep: true,
    },
  },
  data() {
    return {
      targetData: [],
    };
  },
  methods: {
    mapCreated(echarts) {
      if (this.params.type === "china") {
        echarts.registerMap("china", this.$china3);
      } else {
        echarts.registerMap("world", this.$world2);
      }
    },
    getOptions(data) {
      return {
        ...this.params.options,
        geo: geoLayer(data, this.params),
        series: [
          ...serierLayer.effectScatter(
            data,
            [
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
            this.params
          ),
        ],
      };
    },
  },
};
</script>
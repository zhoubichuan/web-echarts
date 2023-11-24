<template>
  <WebMap
    :config="getOptions"
    :data="targetData"
    @mapCreated="mapCreated"
    @mapBeforeMount="beforeHandle"
    @changeData="getData"
    @mapClick="mapClick"
    @outSideMapClick="outSideMapClick"
    @resize="resize"
    @mapScaleMove="mapScaleMove"
    @mapMouseover="mapMouseover"
  ></WebMap>
</template>

<script>
import WebMap from "./map.vue";
import { geoLayer, serierLayer, serierLayerConfig } from "./mapTools.js";
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
    getData() {},
    mapMouseover(Map) {},
    mapScaleMove(Map) {},
    resize(Map) {},
    outSideMapClick(Map) {},
    mapClick(Map) {},
    mapCreated(echarts) {
      if (this.params.registerName) return;
      if (this.params.type === "china") {
        echarts.registerMap("china", this.$china3);
      } else {
        echarts.registerMap("world", this.$world2);
      }
    },
    beforeHandle(echarts) {
      this.$emit("mapBeforeMount", echarts);
    },
    getOptions(data) {
      return {
        ...this.params.options,
        geo: geoLayer(data, this.params),
        series: [
          ...serierLayer.effectScatter(
            data,
            serierLayerConfig.effectScatter,
            this.params
          ),
        ],
      };
    },
  },
};
</script>
<template>
  <WebCandlestick :config="getOptions" :data="data"></WebCandlestick>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getCandlestick(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"],
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          data: [
            "2013/1/24",
            "2013/1/25",
            "2013/1/28",
            "2013/1/29",
            "2013/1/30",
            "2013/1/31",
            "2013/2/1",
            "2013/2/4",
            "2013/2/5",
            "2013/2/6",
            "2013/2/7",
            "2013/2/8",
            "2013/2/18",
            "2013/2/19",
            "2013/2/20",
            "2013/2/21",
            "2013/2/22",
            "2013/2/25",
            "2013/2/26",
            "2013/2/27",
            "2013/2/28",
            "2013/3/1",
            "2013/3/4",
            "2013/3/5",
            "2013/3/6",
            "2013/3/7",
            "2013/3/8",
            "2013/3/11",
            "2013/3/12",
            "2013/3/13",
            "2013/3/14",
            "2013/3/15",
            "2013/3/18",
            "2013/3/19",
            "2013/3/20",
            "2013/3/21",
            "2013/3/22",
            "2013/3/25",
            "2013/3/26",
            "2013/3/27",
            "2013/3/28",
            "2013/3/29",
            "2013/4/1",
            "2013/4/2",
            "2013/4/3",
            "2013/4/8",
            "2013/4/9",
            "2013/4/10",
            "2013/4/11",
            "2013/4/12",
            "2013/4/15",
            "2013/4/16",
            "2013/4/17",
            "2013/4/18",
            "2013/4/19",
            "2013/4/22",
            "2013/4/23",
            "2013/4/24",
            "2013/4/25",
            "2013/4/26",
            "2013/5/2",
            "2013/5/3",
            "2013/5/6",
            "2013/5/7",
            "2013/5/8",
            "2013/5/9",
            "2013/5/10",
            "2013/5/13",
            "2013/5/14",
            "2013/5/15",
            "2013/5/16",
            "2013/5/17",
            "2013/5/20",
            "2013/5/21",
            "2013/5/22",
            "2013/5/23",
            "2013/5/24",
            "2013/5/27",
            "2013/5/28",
            "2013/5/29",
            "2013/5/30",
            "2013/5/31",
            "2013/6/3",
            "2013/6/4",
            "2013/6/5",
            "2013/6/6",
            "2013/6/7",
            "2013/6/13",
          ],
          scale: true,
          boundaryGap: false,
          axisLine: {
            onZero: false,
          },
          splitLine: {
            show: false,
          },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax",
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true,
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 50,
            end: 100,
          },
          {
            show: true,
            type: "slider",
            top: "90%",
            start: 50,
            end: 100,
          },
        ],
        series: [
          {
            name: "日K",
            type: "candlestick",
            data,
          },
        ],
      };
    },
  },
};
</script>

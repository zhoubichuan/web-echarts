<template>
  <div class="candlestick">
    <div class="handle">
      <el-select filterable class="select" v-model="value" @change="change">
        <el-option v-for="item in options" :key="item.dm" :label="item.mc" :value="item.dm.split('.')[0]"></el-option>
      </el-select>
      <el-button>确定</el-button>
    </div>
    <WebCandlestick :config="getOptions" :data="data"></WebCandlestick>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "000001",
      data: [],
      options: [],
    };
  },
  async created() {
    this.change(this.value)
    this.getSelection()
  },
  methods: {
    async getSelection() {
      const data = await this.$axios.get('https://api.mairuiapi.com/hslt/list/LICENCE-66D8-9F96-0C7F0FBCD073')
      this.options = data
    },
    async change(code) {
      const data = await this.$axios.get('https://api.mairui.club/hszbl/fsjy/' + code + '/dn/b997d4403688d5e66a');
      this.data = data.slice(-180)
    },
    calculateMA(dayCount, data) {
      var result = [];
      for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
          result.push('-');
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += +data[i - j][1];
        }
        result.push(sum / dayCount);
      }
      return result;
    },
    getOptions(data) {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
              color: '#376df4',
              width: 2,
              opacity: 1
            }
          }
        },
        legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
          inactiveColor: '#777'
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "10%",
        },
        xAxis: {
          type: "category",
          data: this.data.map(i => i.d),
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
            textStyle: {
              color: '#8392A5'
            },
            handleIcon:
              'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            dataBackground: {
              areaStyle: {
                color: '#8392A5'
              },
              lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
              }
            },
            brushSelect: true
          },
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'candlestick',
            name: 'Day',
            data: this.data.map((item) => [item.o, item.h, item.l, item.c]),
            itemStyle: {
              color: '#FD1050',
              color0: '#0CF49B',
              borderColor: '#FD1050',
              borderColor0: '#0CF49B'
            }
          },
          {
            name: 'MA5',
            type: 'line',
            data: this.calculateMA(5, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: this.calculateMA(10, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: this.calculateMA(20, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: this.calculateMA(30, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1
            }
          }
        ]
      };
    },
  },
};
</script>

<style lang="scss">
.candlestick {
  height: 100%;
  width: 100%;

  .handle {
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 100;

    .select {
      width: 200px;
    }
  }
}
</style>
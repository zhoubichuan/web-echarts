<template>
  <WebTree :config="getOptions" :data="data"></WebTree>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let res = await this.$api.getTree(1);
    if (res.data) {
      this.data = res.data.map((item) => ({ ...item, value: item.descript }));
    }
  },
  methods: {
    getOptions(data) {
      return {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            data: [data],
            left: "2%",
            right: "2%",
            top: "8%",
            bottom: "20%",
            symbol: "rect",
            symbolSize: [60, 20],
            orient: "vertical",
            expandAndCollapse: true,
            label: {
              position: "top",
              rotate: 0,
              verticalAlign: "middle",
              align: "center",
              fontSize: 12,
              lineHeith: 16,
              offset: [0, 15],
              // borderWidth:1,
              // borderType:'solid',
              // borderColor:'red'
            },
            // tooltip: {
            //   position: (point) => {
            //     return point;
            //   },
            //   formatter:(data)=>{
            //     return' <div>'+data+'</div>'
            //   }
            // },
            expandAndCollapse: true,
            initialTreeDepth: 1,
            itemStyle: {
              borderColor: "red",
              borderWidth: 1,
              borderType: "solid",
            },
            leaves: {
              label: {
                position: "top",
                rotate: 0,
                verticalAlign: "middle",
                align: "center",
                fontSize: 12,
                lineHeith: 16,
                offset: [0, 15],
              },
            },
            animationDurationUpdate: 750,
          },
        ],
      };
    },
  },
};
</script>

<template>
  <WebBar v-bind="option"></WebBar>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "单个桑基",
        },
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        
        series: [
          {
            type: "sankey",
            data: [
              {
                name: "A部分",
              },
              {
                name: "B部分",
              },
              {
                name: "C部分",
              },
              {
                name: "D部分",
              },
              {
                name: "E部分",
              },
              {
                name: "F部分",
              },
              {
                name: "G部分",
              },
              {
                name: "H部分",
              },
            ],
            links: [
              {
                source: "A部分",
                target: "B部分",
                value: 124.729,
              },
              {
                source: "B部分",
                target: "C部分",
                value: 0.597,
              },
              {
                source: "B部分",
                target: "D部分",
                value: 26.862,
              },
              {
                source: "B部分",
                target: "E部分",
                value: 280.322,
              },
              {
                source: "B部分",
                target: "F部分",
                value: 81.144,
              },
              {
                source: "G部分",
                target: "C部分",
                value: 35,
              },
              {
                source: "H部分",
                target: "E部分",
                value: 35,
              },
              {
                source: "F部分",
                target: "D部分",
                value: 1.401,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

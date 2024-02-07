<template>
  <div ref="code" class="code-page">
    <ClientOnly>
      <div class="bar">
        <div @click="handleClick">刷新</div>
        <!-- <a href="/Example1.vue">下载</a> -->
      </div>
      <div class="container" v-if="show" :key="pageIndex">
        <slot>
          <iframe
            ref="iframe"
            :src="getUrl"
            width="100%"
            height="100%"
            frameborder="no"
            border="0"
            scrolling="yes"
          ></iframe>
        </slot>
      </div>
      <div v-else class="container">...正在加载中</div>
      <div>
        <!-- <code>{{ require("./Example1.vue").default }}</code> -->
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    url: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      pageIndex: 0,
      show: false,
    };
  },
  computed: {
    getUrl() {
      if (location.href.includes("localhost:3009")) {
        return "http://localhost:8090" + this.url;
      }
      return this.url;
    },
  },
  methods: {
    handleClick() {
      this.pageIndex++;
    },
    handleScroll() {
      let judge =
        window.innerHeight + window.scrollY > this.$refs.code.offsetTop + 100;
      if (judge) {
        this.show = true;
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    handleLoading() {
      var parFrame = this.refs.iframe;
      if (parFrame.attachEvent) {
        parFrame.attachEvent("onload", function () {
          console.log("ie"); //IE，不包含edge
        });
      } else {
        parFrame.onload = function () {
          console.log("iframe加载完成");
        };
      }
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.code-page {
  position: relative;
  padding-top: 30px;
  .bar {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .container {
    width: 100%;
    border: 1px solid lightcoral;
    border-radius: 5px;
    padding: 5px;
    height: 80vh;
  }
}
</style>

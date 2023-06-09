import bar from "./bar";
import line from "./line";
import pie from "./pie";
import scatter from "./scatter";
import tree from "./tree";
import polar from './polar'
import map from './map'
import candlestick from './candlestick'
let components = {
  bar,
  line,
  pie,
  scatter,
  tree,
  polar,
  map,
  candlestick
};
export default {
  install(Vue) {
    for (let key in components) {
      let item = components[key]
      Vue.component(item.name, item);
    }
  },
};

import bar from "./bar";
import graph from "./graph";
import line from "./line";
import pie from "./pie";
import pie3d from "./pie3d";
import scatter from "./scatter";
import tree from "./tree";
import polar from './polar'
import map from './map'
import candlestick from './candlestick'
let components = {
  bar,
  graph,
  line,
  pie,
  pie3d,
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

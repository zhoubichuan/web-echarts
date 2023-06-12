import bar from "./bar";
import line from "./line";
import pie from "./pie";
import polar from './polar'

let components = {
  bar,
  line,
  pie,
  polar
};
export default {
  install(Vue) {
    for (let key in components) {
      let item = components[key]
      Vue.component(item.name, item);
    }
  },
};

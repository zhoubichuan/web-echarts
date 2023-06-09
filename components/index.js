import bar from "./bar";
import pie from "./pie";
import polar from './polar'

let components = {
  bar,
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

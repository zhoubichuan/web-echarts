import bar from "./bar";
import polar from './polar'

let components = {
  bar,
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

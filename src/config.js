import * as api from '@/api/index.js'
import * as _ from 'lodash'
import axios from 'axios'
import service from '@/util/request.js'
import * as echarts from 'echarts'
import * as china from './static/json/china.json'
import * as china2 from './static/json/china2.json'
import * as china3 from './static/json/china3.json'
import * as china4 from './static/json/china4.json'
import * as world from './static/json/world.json'
import * as world2 from './static/json/world2.json'
import beijingsvg from './static/beijingsvg'
import beijingsvg2 from './static/beijingsvg2'
import zhongguosvg from './static/zhongguosvg'
import zhongguosvg2 from './static/zhongguosvg2'
import "echarts-gl";

export default {
  install (Vue) {
    Vue.prototype.$echarts = echarts
    Vue.prototype.$china = china.default
    Vue.prototype.$china2 = china2.default
    Vue.prototype.$china3 = china3.default
    Vue.prototype.$china4 = china4.default
    Vue.prototype.$world = world.default
    Vue.prototype.$world2 = world2.default
    Vue.prototype.$beijingsvg = beijingsvg
    Vue.prototype.$beijingsvg2 = beijingsvg2
    Vue.prototype.$zhongguosvg = zhongguosvg
    Vue.prototype.$zhongguosvg2 = zhongguosvg2
    Vue.prototype._ = _
    // window._ = _
    // window.$env = process.env
    // Vue.prototype.$SliderRight = SliderRight
    Vue.prototype.$service = service
    Vue.prototype.$api = api
    Vue.prototype.$api.loadApi()
    Vue.prototype.$awaitWarp = function (promise) {
      return promise.then(res => ({ res }), rej => ({ rej })).catch(err => ({ err }))
    }
    Vue.prototype.$ajax = axios
    Vue.prototype.$devideArr = function (arr, num) {
      let index = 0
      let items = []
      // if (arr.length % 2 === 1) {
      //   arr = arr.push({})
      // }
      while (index < arr.length) {
        if (arr[index] && arr[index]['singleFormItem']) {
          items.push(arr.slice(index, index += 1))
        } else {
          items.push(arr.slice(index, index += num))
        }
      }
      return items
    }

    Vue.config.productionTip = false
    Vue.prototype.$log = console.log

    // 由一个组件，向上找到最近的指定组件
    Vue.prototype.$findComponentUpward = function findComponentUpward (context, componentName) {
      let parent = context.$parent
      let name = parent.$options.name

      while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
      }
      return parent
    }
    // 由一个组件，向上找到所有的指定组件
    Vue.prototype.$findComponentsUpward = function findComponentsUpward (context, componentName) {
      let parents = []
      const parent = context.$parent

      if (parent) {
        if (parent.$options.name === componentName) parents.push(parent)
        return parents.concat(findComponentsUpward(parent, componentName))
      } else {
        return []
      }
    }
    // 由一个组件，向下找到最近的指定组件
    Vue.prototype.$findComponentDownward = function findComponentDownward (context, componentName) {
      const childrens = context.$children
      let children = null

      if (childrens.length) {
        for (const child of childrens) {
          const name = child.$options.name

          if (name === componentName) {
            children = child
            break
          } else {
            children = findComponentDownward(child, componentName)
            if (children) break
          }
        }
      }
      return children
    }
    // 由一个组件，向下找到所有指定的组件
    Vue.prototype.$findComponentsDownward = function findComponentsDownward (context, componentName) {
      return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child)
        const foundChilds = findComponentsDownward(child, componentName)
        return components.concat(foundChilds)
      }, [])
    }
    // 由一个组件，找到指定组件的兄弟组件
    Vue.prototype.$findBrothersComponents = function findBrothersComponents (context, componentName, exceptMe = true) {
      let res = context.$parent.$children.filter((item) => {
        return item.$options.name === componentName
      })
      let index = res.findIndex((item) => item._uid === context._uid)
      if (exceptMe) res.splice(index, 1)
      return res
    }

    Vue.prototype.$filterObj = function (target, keys) {
      let result = {}
      keys.forEach(key => {
        result[key] = target[key]
      })
      return result
    }
  }
}

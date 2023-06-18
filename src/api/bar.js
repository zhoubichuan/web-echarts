import request from '@/util/request'
// 获取中国地图数据
export function getBar1 () {
  return request({
    url: '/bar1.json',
    method: 'get',
  })
}
// 获取中国地图数据
export function getBar2 () {
    return request({
      url: '/bar2.json',
      method: 'get',
    })
  }
  
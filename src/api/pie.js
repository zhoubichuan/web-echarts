import request from '@/util/request'
// 获取中国地图数据
export function getPie1 () {
  return request({
    url: '/pie1.json',
    method: 'get',
  })
}

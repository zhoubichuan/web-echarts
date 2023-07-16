import request from '@/util/request'

export function getPie(index = 1) {
  return request({
    url: "mock/pie" + index + ".json",
    method: "get",
  });
}
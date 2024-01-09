import request from '@/util/request'

export function getPie(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=pie${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/pie" + index + ".json",
  //   method: "get",
  // });
}
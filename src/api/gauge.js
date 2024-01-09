import request from "@/util/request";

export function getGauge(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=gauge${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/gauge" + index + ".json",
  //   method: "get",
  // });
}

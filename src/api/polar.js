import request from "@/util/request";

export function getPolar(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=polar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/polar" + index + ".json",
  //   method: "get",
  // });
}

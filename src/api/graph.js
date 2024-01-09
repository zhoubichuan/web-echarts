import request from "@/util/request";

export function getGraph(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=graph${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/graph" + index + ".json",
  //   method: "get",
  // });
}

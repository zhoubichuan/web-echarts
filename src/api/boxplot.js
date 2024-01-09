import request from "@/util/request";

export function getBoxplot(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=boxplot${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/boxplot" + index + ".json",
  //   method: "get",
  // });
}

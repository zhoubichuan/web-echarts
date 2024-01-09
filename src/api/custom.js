import request from "@/util/request";

export function getCustom(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=custom${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/custom" + index + ".json",
  //   method: "get",
  // });
}

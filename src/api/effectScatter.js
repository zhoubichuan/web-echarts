import request from "@/util/request";

export function getEffectScatter(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=effectScatter${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/effectScatter" + index + ".json",
  //   method: "get",
  // });
}

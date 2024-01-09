import request from "@/util/request";

export function getSunburst(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=sunburst${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/sunburst" + index + ".json",
  //   method: "get",
  // });
}

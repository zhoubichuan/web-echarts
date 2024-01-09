import request from "@/util/request";

export function getThemeRiver(index = 1) {
  return request({
    url: `/antdpro-express/api/list/data/7/?current=1&pageSize=2000&typeName=themeRiver${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/themeRiver" + index + ".json",
  //   method: "get",
  // });
}

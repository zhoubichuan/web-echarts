import request from "@/util/request";

export function getThemeRiver(index = 1) {
  return request({
    url: "mock/themeRiver" + index + ".json",
    method: "get",
  });
}

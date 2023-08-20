import request from "@/util/request";

export function getSunburst(index = 1) {
  return request({
    url: "mock/sunburst" + index + ".json",
    method: "get",
  });
}

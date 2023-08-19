import request from "@/util/request";

export function getHeatmap(index = 1) {
  return request({
    url: "mock/heatmap" + index + ".json",
    method: "get",
  });
}

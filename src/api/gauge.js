import request from "@/util/request";

export function getGauge(index = 1) {
  return request({
    url: "mock/gauge" + index + ".json",
    method: "get",
  });
}

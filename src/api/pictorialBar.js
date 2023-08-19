import request from "@/util/request";

export function getPictorialBar(index = 1) {
  return request({
    url: "mock/pictorialBar" + index + ".json",
    method: "get",
  });
}

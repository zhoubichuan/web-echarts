import request from "@/util/request";

export function getEffectScatter(index = 1) {
  return request({
    url: "mock/effectScatter" + index + ".json",
    method: "get",
  });
}

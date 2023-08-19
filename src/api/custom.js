import request from "@/util/request";

export function getCustom(index = 1) {
  return request({
    url: "mock/custom" + index + ".json",
    method: "get",
  });
}

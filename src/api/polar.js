import request from "@/util/request";

export function getPolar(index = 1) {
  return request({
    url: "mock/polar" + index + ".json",
    method: "get",
  });
}

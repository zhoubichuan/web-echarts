import request from "@/util/request";
export function getScatter(index = 1) {
  return request({
    url: "mock/scatter" + index + ".json",
    method: "get",
  });
}

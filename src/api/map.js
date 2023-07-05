import request from "@/util/request";
export function getMap(index = 1) {
  return request({
    url: "mock/map" + index + ".json",
    method: "get",
  });
}

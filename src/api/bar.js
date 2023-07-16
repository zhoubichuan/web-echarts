import request from "@/util/request";

export function getBar(index = 1) {
  return request({
    url: "mock/bar" + index + ".json",
    method: "get",
  });
}

import request from "@/util/request";

export function getLine(index = 1) {
  return request({
    url: "mock/line" + index + ".json",
    method: "get",
  });
}

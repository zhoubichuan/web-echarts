import request from "@/util/request";

export function getGugu(index = 1) {
  return request({
    url: "mock/gugu" + index + ".json",
    method: "get",
  });
}

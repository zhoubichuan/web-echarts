import request from "@/util/request";

export function getParallel(index = 1) {
  return request({
    url: "mock/parallel" + index + ".json",
    method: "get",
  });
}

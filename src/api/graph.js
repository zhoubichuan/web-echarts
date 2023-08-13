import request from "@/util/request";

export function getGraph(index = 1) {
  return request({
    url: "mock/graph" + index + ".json",
    method: "get",
  });
}

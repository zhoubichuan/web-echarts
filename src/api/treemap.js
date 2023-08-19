import request from "@/util/request";

export function getTreemap(index = 1) {
  return request({
    url: "mock/treemap" + index + ".json",
    method: "get",
  });
}

import request from "@/util/request";

export function getBoxplot(index = 1) {
  return request({
    url: "mock/boxplot" + index + ".json",
    method: "get",
  });
}

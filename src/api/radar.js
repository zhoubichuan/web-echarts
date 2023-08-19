import request from "@/util/request";

export function getRadar(index = 1) {
  return request({
    url: "mock/radar" + index + ".json",
    method: "get",
  });
}

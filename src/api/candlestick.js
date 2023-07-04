import request from "@/util/request";
export function getCandlestick(index = 1) {
  return request({
    url: "mock/candlestick" + index + ".json",
    method: "get",
  });
}

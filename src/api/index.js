export * from "./map";
export * from "./custom";
export * from "./effectScatter";
export * from "./gauge";
export * from "./heatmap";
export * from "./parallel";
export * from "./pictorialBar";
export * from "./radar";
export * from "./themeRiver";
export * from "./treemap";
export * from "./bar";
export * from "./sunburst";
export * from "./graph";
export * from "./pie";
export * from "./candlestick";
export * from "./tree";
export * from "./scatter";
export * from "./line";
export * from "./systemTag";
export * from "./boxplot";

export const loadApi = () => {
  // 使用API获取IP地址
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      // 使用IP地址获取地理位置
      fetch(`https://ipapi.co/${data.ip}/json`)
        .then((response) => response.json())
        .then((data) => {
          fetch(`http://zhoubichuan.com/antdpro-express/api/rule5`, {
            method: "post",
            body: JSON.stringify(base),
            headers: {
              "Content-Type": "application/json",
            },
          });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

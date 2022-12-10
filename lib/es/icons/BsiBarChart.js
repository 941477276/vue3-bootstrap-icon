// src/icons/BsiBarChart.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBarChart = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bar-chart",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" }, "children": [] }]
  });
};
BsiBarChart.displayName = "BsiBarChart";
var BsiBarChart_default = BsiBarChart;
export {
  BsiBarChart,
  BsiBarChart_default as default
};

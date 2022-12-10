// src/icons/BsiBarChartFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBarChartFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bar-chart-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" }, "children": [] }]
  });
};
BsiBarChartFill.displayName = "BsiBarChartFill";
var BsiBarChartFill_default = BsiBarChartFill;
export {
  BsiBarChartFill,
  BsiBarChartFill_default as default
};

// src/icons/BsiCloudRainFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCloudRainFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cloud-rain-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" }, "children": [] }]
  });
};
BsiCloudRainFill.displayName = "BsiCloudRainFill";
var BsiCloudRainFill_default = BsiCloudRainFill;
export {
  BsiCloudRainFill,
  BsiCloudRainFill_default as default
};

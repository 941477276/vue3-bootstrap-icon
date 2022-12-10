// src/icons/BsiEasel3Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEasel3Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "easel3-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z" }, "children": [] }]
  });
};
BsiEasel3Fill.displayName = "BsiEasel3Fill";
var BsiEasel3Fill_default = BsiEasel3Fill;
export {
  BsiEasel3Fill,
  BsiEasel3Fill_default as default
};

// src/icons/BsiThermometerHalf.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiThermometerHalf = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "thermometer-half",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" }, "children": [] }]
  });
};
BsiThermometerHalf.displayName = "BsiThermometerHalf";
var BsiThermometerHalf_default = BsiThermometerHalf;
export {
  BsiThermometerHalf,
  BsiThermometerHalf_default as default
};

// src/icons/BsiLaptopFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLaptopFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "laptop-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" }, "children": [] }]
  });
};
BsiLaptopFill.displayName = "BsiLaptopFill";
var BsiLaptopFill_default = BsiLaptopFill;
export {
  BsiLaptopFill,
  BsiLaptopFill_default as default
};
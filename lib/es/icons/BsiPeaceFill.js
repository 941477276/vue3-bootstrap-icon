// src/icons/BsiPeaceFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPeaceFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "peace-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 13.292A8 8 0 0 0 8.5.015v7.778l5.5 5.5zm-.708.708L8.5 9.206v6.778a7.967 7.967 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.967 7.967 0 0 0 7.5 15.985zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5z" }, "children": [] }]
  });
};
BsiPeaceFill.displayName = "BsiPeaceFill";
var BsiPeaceFill_default = BsiPeaceFill;
export {
  BsiPeaceFill,
  BsiPeaceFill_default as default
};

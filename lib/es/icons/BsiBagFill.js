// src/icons/BsiBagFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBagFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bag-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" }, "children": [] }]
  });
};
BsiBagFill.displayName = "BsiBagFill";
var BsiBagFill_default = BsiBagFill;
export {
  BsiBagFill,
  BsiBagFill_default as default
};

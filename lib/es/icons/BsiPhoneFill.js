// src/icons/BsiPhoneFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPhoneFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "phone-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" }, "children": [] }]
  });
};
BsiPhoneFill.displayName = "BsiPhoneFill";
var BsiPhoneFill_default = BsiPhoneFill;
export {
  BsiPhoneFill,
  BsiPhoneFill_default as default
};

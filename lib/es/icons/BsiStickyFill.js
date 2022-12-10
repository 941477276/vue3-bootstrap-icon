// src/icons/BsiStickyFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiStickyFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sticky-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z" }, "children": [] }]
  });
};
BsiStickyFill.displayName = "BsiStickyFill";
var BsiStickyFill_default = BsiStickyFill;
export {
  BsiStickyFill,
  BsiStickyFill_default as default
};

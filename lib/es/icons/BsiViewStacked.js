// src/icons/BsiViewStacked.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiViewStacked = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "view-stacked",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z" }, "children": [] }]
  });
};
BsiViewStacked.displayName = "BsiViewStacked";
var BsiViewStacked_default = BsiViewStacked;
export {
  BsiViewStacked,
  BsiViewStacked_default as default
};

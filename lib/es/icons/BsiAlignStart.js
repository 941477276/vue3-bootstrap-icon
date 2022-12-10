// src/icons/BsiAlignStart.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAlignStart = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "align-start",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" }, "children": [] }]
  });
};
BsiAlignStart.displayName = "BsiAlignStart";
var BsiAlignStart_default = BsiAlignStart;
export {
  BsiAlignStart,
  BsiAlignStart_default as default
};

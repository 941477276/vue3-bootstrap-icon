// src/icons/BsiSkipBackwardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipBackwardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-backward-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" }, "children": [] }]
  });
};
BsiSkipBackwardFill.displayName = "BsiSkipBackwardFill";
var BsiSkipBackwardFill_default = BsiSkipBackwardFill;
export {
  BsiSkipBackwardFill,
  BsiSkipBackwardFill_default as default
};

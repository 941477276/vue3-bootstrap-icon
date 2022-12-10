// src/icons/BsiExclamation.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiExclamation = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "exclamation",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" }, "children": [] }]
  });
};
BsiExclamation.displayName = "BsiExclamation";
var BsiExclamation_default = BsiExclamation;
export {
  BsiExclamation,
  BsiExclamation_default as default
};

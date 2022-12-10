// src/icons/BsiExclamationCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiExclamationCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "exclamation-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" }, "children": [] }]
  });
};
BsiExclamationCircleFill.displayName = "BsiExclamationCircleFill";
var BsiExclamationCircleFill_default = BsiExclamationCircleFill;
export {
  BsiExclamationCircleFill,
  BsiExclamationCircleFill_default as default
};

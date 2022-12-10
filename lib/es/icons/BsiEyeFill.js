// src/icons/BsiEyeFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEyeFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "eye-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" }, "children": [] }]
  });
};
BsiEyeFill.displayName = "BsiEyeFill";
var BsiEyeFill_default = BsiEyeFill;
export {
  BsiEyeFill,
  BsiEyeFill_default as default
};

// src/icons/BsiSkipBackwardCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipBackwardCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-backward-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407z" }, "children": [] }]
  });
};
BsiSkipBackwardCircleFill.displayName = "BsiSkipBackwardCircleFill";
var BsiSkipBackwardCircleFill_default = BsiSkipBackwardCircleFill;
export {
  BsiSkipBackwardCircleFill,
  BsiSkipBackwardCircleFill_default as default
};

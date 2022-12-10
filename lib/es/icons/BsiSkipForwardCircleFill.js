// src/icons/BsiSkipForwardCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipForwardCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-forward-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093z" }, "children": [] }]
  });
};
BsiSkipForwardCircleFill.displayName = "BsiSkipForwardCircleFill";
var BsiSkipForwardCircleFill_default = BsiSkipForwardCircleFill;
export {
  BsiSkipForwardCircleFill,
  BsiSkipForwardCircleFill_default as default
};

// src/icons/BsiFunnelFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFunnelFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "funnel-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" }, "children": [] }]
  });
};
BsiFunnelFill.displayName = "BsiFunnelFill";
var BsiFunnelFill_default = BsiFunnelFill;
export {
  BsiFunnelFill,
  BsiFunnelFill_default as default
};

// src/icons/BsiFunnel.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFunnel = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "funnel",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" }, "children": [] }]
  });
};
BsiFunnel.displayName = "BsiFunnel";
var BsiFunnel_default = BsiFunnel;
export {
  BsiFunnel,
  BsiFunnel_default as default
};

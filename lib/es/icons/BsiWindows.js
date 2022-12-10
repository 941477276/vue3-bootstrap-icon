// src/icons/BsiWindows.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiWindows = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "windows",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" }, "children": [] }]
  });
};
BsiWindows.displayName = "BsiWindows";
var BsiWindows_default = BsiWindows;
export {
  BsiWindows,
  BsiWindows_default as default
};

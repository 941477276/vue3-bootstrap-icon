// src/icons/BsiExplicitFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiExplicitFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "explicit-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11Zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" }, "children": [] }]
  });
};
BsiExplicitFill.displayName = "BsiExplicitFill";
var BsiExplicitFill_default = BsiExplicitFill;
export {
  BsiExplicitFill,
  BsiExplicitFill_default as default
};

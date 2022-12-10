// src/icons/BsiBrightnessAltLowFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBrightnessAltLowFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "brightness-alt-low-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" }, "children": [] }]
  });
};
BsiBrightnessAltLowFill.displayName = "BsiBrightnessAltLowFill";
var BsiBrightnessAltLowFill_default = BsiBrightnessAltLowFill;
export {
  BsiBrightnessAltLowFill,
  BsiBrightnessAltLowFill_default as default
};

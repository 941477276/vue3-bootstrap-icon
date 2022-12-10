// src/icons/BsiBrightnessLowFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBrightnessLowFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "brightness-low-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" }, "children": [] }]
  });
};
BsiBrightnessLowFill.displayName = "BsiBrightnessLowFill";
var BsiBrightnessLowFill_default = BsiBrightnessLowFill;
export {
  BsiBrightnessLowFill,
  BsiBrightnessLowFill_default as default
};

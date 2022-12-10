// src/icons/BsiFastForwardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFastForwardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "fast-forward-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" }, "children": [] }]
  });
};
BsiFastForwardFill.displayName = "BsiFastForwardFill";
var BsiFastForwardFill_default = BsiFastForwardFill;
export {
  BsiFastForwardFill,
  BsiFastForwardFill_default as default
};

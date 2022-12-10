// src/icons/BsiBellFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBellFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bell-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" }, "children": [] }]
  });
};
BsiBellFill.displayName = "BsiBellFill";
var BsiBellFill_default = BsiBellFill;
export {
  BsiBellFill,
  BsiBellFill_default as default
};

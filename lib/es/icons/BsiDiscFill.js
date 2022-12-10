// src/icons/BsiDiscFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDiscFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "disc-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z" }, "children": [] }]
  });
};
BsiDiscFill.displayName = "BsiDiscFill";
var BsiDiscFill_default = BsiDiscFill;
export {
  BsiDiscFill,
  BsiDiscFill_default as default
};

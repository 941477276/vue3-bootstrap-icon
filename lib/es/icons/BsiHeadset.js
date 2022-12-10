// src/icons/BsiHeadset.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHeadset = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "headset",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" }, "children": [] }]
  });
};
BsiHeadset.displayName = "BsiHeadset";
var BsiHeadset_default = BsiHeadset;
export {
  BsiHeadset,
  BsiHeadset_default as default
};

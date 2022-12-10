// src/icons/BsiMouse2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMouse2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "mouse2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z" }, "children": [] }]
  });
};
BsiMouse2.displayName = "BsiMouse2";
var BsiMouse2_default = BsiMouse2;
export {
  BsiMouse2,
  BsiMouse2_default as default
};

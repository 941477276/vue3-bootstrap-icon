// src/icons/BsiMouse2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMouse2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "mouse2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z" }, "children": [] }]
  });
};
BsiMouse2Fill.displayName = "BsiMouse2Fill";
var BsiMouse2Fill_default = BsiMouse2Fill;
export {
  BsiMouse2Fill,
  BsiMouse2Fill_default as default
};

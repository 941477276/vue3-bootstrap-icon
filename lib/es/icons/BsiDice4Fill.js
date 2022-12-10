// src/icons/BsiDice4Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDice4Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dice-4-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }, "children": [] }]
  });
};
BsiDice4Fill.displayName = "BsiDice4Fill";
var BsiDice4Fill_default = BsiDice4Fill;
export {
  BsiDice4Fill,
  BsiDice4Fill_default as default
};

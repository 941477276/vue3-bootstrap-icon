// src/icons/BsiDice1Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDice1Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dice-1-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }, "children": [] }]
  });
};
BsiDice1Fill.displayName = "BsiDice1Fill";
var BsiDice1Fill_default = BsiDice1Fill;
export {
  BsiDice1Fill,
  BsiDice1Fill_default as default
};

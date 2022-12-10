// src/icons/BsiDice1.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDice1 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dice-1",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "circle", "nodeType": 1, "attrs": { "cx": "8", "cy": "8", "r": "1.5" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" }, "children": [] }]
  });
};
BsiDice1.displayName = "BsiDice1";
var BsiDice1_default = BsiDice1;
export {
  BsiDice1,
  BsiDice1_default as default
};

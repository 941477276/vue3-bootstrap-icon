// src/icons/BsiDice3.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDice3 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dice-3",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }]
  });
};
BsiDice3.displayName = "BsiDice3";
var BsiDice3_default = BsiDice3;
export {
  BsiDice3,
  BsiDice3_default as default
};

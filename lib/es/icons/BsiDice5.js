// src/icons/BsiDice5.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDice5 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dice-5",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }]
  });
};
BsiDice5.displayName = "BsiDice5";
var BsiDice5_default = BsiDice5;
export {
  BsiDice5,
  BsiDice5_default as default
};

// src/icons/BsiCaretUpFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretUpFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-up-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" }, "children": [] }]
  });
};
BsiCaretUpFill.displayName = "BsiCaretUpFill";
var BsiCaretUpFill_default = BsiCaretUpFill;
export {
  BsiCaretUpFill,
  BsiCaretUpFill_default as default
};

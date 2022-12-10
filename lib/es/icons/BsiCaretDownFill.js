// src/icons/BsiCaretDownFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretDownFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-down-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" }, "children": [] }]
  });
};
BsiCaretDownFill.displayName = "BsiCaretDownFill";
var BsiCaretDownFill_default = BsiCaretDownFill;
export {
  BsiCaretDownFill,
  BsiCaretDownFill_default as default
};

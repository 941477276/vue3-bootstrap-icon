// src/icons/BsiExclamationDiamondFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiExclamationDiamondFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "exclamation-diamond-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" }, "children": [] }]
  });
};
BsiExclamationDiamondFill.displayName = "BsiExclamationDiamondFill";
var BsiExclamationDiamondFill_default = BsiExclamationDiamondFill;
export {
  BsiExclamationDiamondFill,
  BsiExclamationDiamondFill_default as default
};

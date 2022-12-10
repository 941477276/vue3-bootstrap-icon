// src/icons/BsiDiamondFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDiamondFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "diamond-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" }, "children": [] }]
  });
};
BsiDiamondFill.displayName = "BsiDiamondFill";
var BsiDiamondFill_default = BsiDiamondFill;
export {
  BsiDiamondFill,
  BsiDiamondFill_default as default
};

// src/icons/BsiEggFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEggFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "egg-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z" }, "children": [] }]
  });
};
BsiEggFill.displayName = "BsiEggFill";
var BsiEggFill_default = BsiEggFill;
export {
  BsiEggFill,
  BsiEggFill_default as default
};

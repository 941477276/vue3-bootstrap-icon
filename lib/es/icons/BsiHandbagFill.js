// src/icons/BsiHandbagFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHandbagFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "handbag-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" }, "children": [] }]
  });
};
BsiHandbagFill.displayName = "BsiHandbagFill";
var BsiHandbagFill_default = BsiHandbagFill;
export {
  BsiHandbagFill,
  BsiHandbagFill_default as default
};

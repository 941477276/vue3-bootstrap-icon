// src/icons/BsiFileMinusFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileMinusFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-minus-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiFileMinusFill.displayName = "BsiFileMinusFill";
var BsiFileMinusFill_default = BsiFileMinusFill;
export {
  BsiFileMinusFill,
  BsiFileMinusFill_default as default
};

// src/icons/BsiHeartbreakFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHeartbreakFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "heartbreak-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z" }, "children": [] }]
  });
};
BsiHeartbreakFill.displayName = "BsiHeartbreakFill";
var BsiHeartbreakFill_default = BsiHeartbreakFill;
export {
  BsiHeartbreakFill,
  BsiHeartbreakFill_default as default
};

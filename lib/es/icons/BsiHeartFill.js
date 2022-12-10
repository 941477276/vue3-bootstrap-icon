// src/icons/BsiHeartFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHeartFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "heart-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" }, "children": [] }]
  });
};
BsiHeartFill.displayName = "BsiHeartFill";
var BsiHeartFill_default = BsiHeartFill;
export {
  BsiHeartFill,
  BsiHeartFill_default as default
};

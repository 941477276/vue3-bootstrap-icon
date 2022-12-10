// src/icons/BsiUniversalAccess.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUniversalAccess = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "universal-access",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" }, "children": [] }]
  });
};
BsiUniversalAccess.displayName = "BsiUniversalAccess";
var BsiUniversalAccess_default = BsiUniversalAccess;
export {
  BsiUniversalAccess,
  BsiUniversalAccess_default as default
};

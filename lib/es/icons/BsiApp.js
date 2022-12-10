// src/icons/BsiApp.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiApp = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "app",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" }, "children": [] }]
  });
};
BsiApp.displayName = "BsiApp";
var BsiApp_default = BsiApp;
export {
  BsiApp,
  BsiApp_default as default
};

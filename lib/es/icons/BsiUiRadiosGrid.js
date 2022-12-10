// src/icons/BsiUiRadiosGrid.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUiRadiosGrid = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "ui-radios-grid",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" }, "children": [] }]
  });
};
BsiUiRadiosGrid.displayName = "BsiUiRadiosGrid";
var BsiUiRadiosGrid_default = BsiUiRadiosGrid;
export {
  BsiUiRadiosGrid,
  BsiUiRadiosGrid_default as default
};

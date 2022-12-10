// src/icons/BsiCaretDownSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretDownSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-down-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" }, "children": [] }]
  });
};
BsiCaretDownSquareFill.displayName = "BsiCaretDownSquareFill";
var BsiCaretDownSquareFill_default = BsiCaretDownSquareFill;
export {
  BsiCaretDownSquareFill,
  BsiCaretDownSquareFill_default as default
};

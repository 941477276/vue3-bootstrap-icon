// src/icons/BsiFileSpreadsheet.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileSpreadsheet = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-spreadsheet",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1H4zm9 6h-3v2h3V7zm0 3h-3v2h3v-2zm0 3h-3v2h2a1 1 0 0 0 1-1v-1zm-4 2v-2H6v2h3zm-4 0v-2H3v1a1 1 0 0 0 1 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2zm3-2v2h3V7H6zm3 3H6v2h3v-2z" }, "children": [] }]
  });
};
BsiFileSpreadsheet.displayName = "BsiFileSpreadsheet";
var BsiFileSpreadsheet_default = BsiFileSpreadsheet;
export {
  BsiFileSpreadsheet,
  BsiFileSpreadsheet_default as default
};

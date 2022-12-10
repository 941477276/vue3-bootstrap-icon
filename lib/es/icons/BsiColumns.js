// src/icons/BsiColumns.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiColumns = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "columns",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z" }, "children": [] }]
  });
};
BsiColumns.displayName = "BsiColumns";
var BsiColumns_default = BsiColumns;
export {
  BsiColumns,
  BsiColumns_default as default
};

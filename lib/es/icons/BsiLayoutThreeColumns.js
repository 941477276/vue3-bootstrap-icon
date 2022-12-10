// src/icons/BsiLayoutThreeColumns.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutThreeColumns = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-three-columns",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z" }, "children": [] }]
  });
};
BsiLayoutThreeColumns.displayName = "BsiLayoutThreeColumns";
var BsiLayoutThreeColumns_default = BsiLayoutThreeColumns;
export {
  BsiLayoutThreeColumns,
  BsiLayoutThreeColumns_default as default
};

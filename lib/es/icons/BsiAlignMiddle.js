// src/icons/BsiAlignMiddle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAlignMiddle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "align-middle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" }, "children": [] }]
  });
};
BsiAlignMiddle.displayName = "BsiAlignMiddle";
var BsiAlignMiddle_default = BsiAlignMiddle;
export {
  BsiAlignMiddle,
  BsiAlignMiddle_default as default
};

// src/icons/BsiGrid1x2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGrid1x2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "grid-1x2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" }, "children": [] }]
  });
};
BsiGrid1x2Fill.displayName = "BsiGrid1x2Fill";
var BsiGrid1x2Fill_default = BsiGrid1x2Fill;
export {
  BsiGrid1x2Fill,
  BsiGrid1x2Fill_default as default
};

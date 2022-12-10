// src/icons/BsiGrid1x2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGrid1x2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "grid-1x2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" }, "children": [] }]
  });
};
BsiGrid1x2.displayName = "BsiGrid1x2";
var BsiGrid1x2_default = BsiGrid1x2;
export {
  BsiGrid1x2,
  BsiGrid1x2_default as default
};

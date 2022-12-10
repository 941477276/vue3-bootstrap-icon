// src/icons/BsiCheck2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheck2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, "children": [] }]
  });
};
BsiCheck2.displayName = "BsiCheck2";
var BsiCheck2_default = BsiCheck2;
export {
  BsiCheck2,
  BsiCheck2_default as default
};

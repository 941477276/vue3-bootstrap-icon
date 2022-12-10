// src/icons/BsiArrow90degRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrow90degRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-90deg-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" }, "children": [] }]
  });
};
BsiArrow90degRight.displayName = "BsiArrow90degRight";
var BsiArrow90degRight_default = BsiArrow90degRight;
export {
  BsiArrow90degRight,
  BsiArrow90degRight_default as default
};

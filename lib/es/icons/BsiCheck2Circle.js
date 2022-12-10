// src/icons/BsiCheck2Circle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheck2Circle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check2-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" }, "children": [] }]
  });
};
BsiCheck2Circle.displayName = "BsiCheck2Circle";
var BsiCheck2Circle_default = BsiCheck2Circle;
export {
  BsiCheck2Circle,
  BsiCheck2Circle_default as default
};

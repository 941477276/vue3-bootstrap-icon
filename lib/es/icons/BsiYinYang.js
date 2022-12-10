// src/icons/BsiYinYang.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiYinYang = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "yin-yang",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z" }, "children": [] }]
  });
};
BsiYinYang.displayName = "BsiYinYang";
var BsiYinYang_default = BsiYinYang;
export {
  BsiYinYang,
  BsiYinYang_default as default
};

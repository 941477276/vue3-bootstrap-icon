// src/icons/BsiPlayCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlayCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "play-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" }, "children": [] }]
  });
};
BsiPlayCircle.displayName = "BsiPlayCircle";
var BsiPlayCircle_default = BsiPlayCircle;
export {
  BsiPlayCircle,
  BsiPlayCircle_default as default
};

// src/icons/BsiPlayCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlayCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "play-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" }, "children": [] }]
  });
};
BsiPlayCircleFill.displayName = "BsiPlayCircleFill";
var BsiPlayCircleFill_default = BsiPlayCircleFill;
export {
  BsiPlayCircleFill,
  BsiPlayCircleFill_default as default
};

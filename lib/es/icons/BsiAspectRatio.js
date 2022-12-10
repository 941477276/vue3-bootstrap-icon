// src/icons/BsiAspectRatio.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAspectRatio = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "aspect-ratio",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" }, "children": [] }]
  });
};
BsiAspectRatio.displayName = "BsiAspectRatio";
var BsiAspectRatio_default = BsiAspectRatio;
export {
  BsiAspectRatio,
  BsiAspectRatio_default as default
};

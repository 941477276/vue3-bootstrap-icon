// src/icons/BsiCameraReelsFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCameraReelsFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "camera-reels-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" }, "children": [] }]
  });
};
BsiCameraReelsFill.displayName = "BsiCameraReelsFill";
var BsiCameraReelsFill_default = BsiCameraReelsFill;
export {
  BsiCameraReelsFill,
  BsiCameraReelsFill_default as default
};

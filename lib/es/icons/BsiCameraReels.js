// src/icons/BsiCameraReels.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCameraReels = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "camera-reels",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" }, "children": [] }]
  });
};
BsiCameraReels.displayName = "BsiCameraReels";
var BsiCameraReels_default = BsiCameraReels;
export {
  BsiCameraReels,
  BsiCameraReels_default as default
};

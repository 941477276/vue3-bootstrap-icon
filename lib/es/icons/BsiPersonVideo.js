// src/icons/BsiPersonVideo.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonVideo = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-video",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z" }, "children": [] }]
  });
};
BsiPersonVideo.displayName = "BsiPersonVideo";
var BsiPersonVideo_default = BsiPersonVideo;
export {
  BsiPersonVideo,
  BsiPersonVideo_default as default
};

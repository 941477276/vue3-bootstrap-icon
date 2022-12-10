// src/icons/BsiWindowFullscreen.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiWindowFullscreen = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "window-fullscreen",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" }, "children": [] }]
  });
};
BsiWindowFullscreen.displayName = "BsiWindowFullscreen";
var BsiWindowFullscreen_default = BsiWindowFullscreen;
export {
  BsiWindowFullscreen,
  BsiWindowFullscreen_default as default
};

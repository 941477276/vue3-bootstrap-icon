// src/icons/BsiPlay.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlay = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "play",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" }, "children": [] }]
  });
};
BsiPlay.displayName = "BsiPlay";
var BsiPlay_default = BsiPlay;
export {
  BsiPlay,
  BsiPlay_default as default
};

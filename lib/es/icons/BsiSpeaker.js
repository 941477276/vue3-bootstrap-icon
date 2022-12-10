// src/icons/BsiSpeaker.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSpeaker = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "speaker",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" }, "children": [] }]
  });
};
BsiSpeaker.displayName = "BsiSpeaker";
var BsiSpeaker_default = BsiSpeaker;
export {
  BsiSpeaker,
  BsiSpeaker_default as default
};

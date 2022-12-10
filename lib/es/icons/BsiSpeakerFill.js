// src/icons/BsiSpeakerFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSpeakerFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "speaker-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" }, "children": [] }]
  });
};
BsiSpeakerFill.displayName = "BsiSpeakerFill";
var BsiSpeakerFill_default = BsiSpeakerFill;
export {
  BsiSpeakerFill,
  BsiSpeakerFill_default as default
};

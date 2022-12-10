// src/icons/BsiVoicemail.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiVoicemail = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "voicemail",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 8.5A3.49 3.49 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z" }, "children": [] }]
  });
};
BsiVoicemail.displayName = "BsiVoicemail";
var BsiVoicemail_default = BsiVoicemail;
export {
  BsiVoicemail,
  BsiVoicemail_default as default
};

// src/icons/BsiMusicNoteBeamed.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMusicNoteBeamed = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "music-note-beamed",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 11V2h1v9h-1zM6 3v10H5V3h1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" }, "children": [] }]
  });
};
BsiMusicNoteBeamed.displayName = "BsiMusicNoteBeamed";
var BsiMusicNoteBeamed_default = BsiMusicNoteBeamed;
export {
  BsiMusicNoteBeamed,
  BsiMusicNoteBeamed_default as default
};

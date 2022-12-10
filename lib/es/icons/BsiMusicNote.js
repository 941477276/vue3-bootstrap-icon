// src/icons/BsiMusicNote.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMusicNote = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "music-note",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M9 3v10H8V3h1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" }, "children": [] }]
  });
};
BsiMusicNote.displayName = "BsiMusicNote";
var BsiMusicNote_default = BsiMusicNote;
export {
  BsiMusicNote,
  BsiMusicNote_default as default
};

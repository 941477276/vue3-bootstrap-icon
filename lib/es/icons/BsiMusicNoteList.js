// src/icons/BsiMusicNoteList.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMusicNoteList = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "music-note-list",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M12 3v10h-1V3h1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiMusicNoteList.displayName = "BsiMusicNoteList";
var BsiMusicNoteList_default = BsiMusicNoteList;
export {
  BsiMusicNoteList,
  BsiMusicNoteList_default as default
};

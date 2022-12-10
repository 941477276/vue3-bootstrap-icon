// src/icons/BsiMusicPlayer.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMusicPlayer = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "music-player",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm1 0v3h6V3H5zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" }, "children": [] }]
  });
};
BsiMusicPlayer.displayName = "BsiMusicPlayer";
var BsiMusicPlayer_default = BsiMusicPlayer;
export {
  BsiMusicPlayer,
  BsiMusicPlayer_default as default
};

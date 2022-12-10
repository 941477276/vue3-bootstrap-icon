// src/icons/BsiFileEarmarkPlay.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkPlay = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-play",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" }, "children": [] }]
  });
};
BsiFileEarmarkPlay.displayName = "BsiFileEarmarkPlay";
var BsiFileEarmarkPlay_default = BsiFileEarmarkPlay;
export {
  BsiFileEarmarkPlay,
  BsiFileEarmarkPlay_default as default
};

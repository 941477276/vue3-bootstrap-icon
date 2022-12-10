// src/icons/BsiFileEarmarkX.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkX = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-x",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" }, "children": [] }]
  });
};
BsiFileEarmarkX.displayName = "BsiFileEarmarkX";
var BsiFileEarmarkX_default = BsiFileEarmarkX;
export {
  BsiFileEarmarkX,
  BsiFileEarmarkX_default as default
};

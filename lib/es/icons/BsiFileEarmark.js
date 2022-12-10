// src/icons/BsiFileEarmark.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmark = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" }, "children": [] }]
  });
};
BsiFileEarmark.displayName = "BsiFileEarmark";
var BsiFileEarmark_default = BsiFileEarmark;
export {
  BsiFileEarmark,
  BsiFileEarmark_default as default
};

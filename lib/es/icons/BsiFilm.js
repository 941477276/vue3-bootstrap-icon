// src/icons/BsiFilm.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilm = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "film",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" }, "children": [] }]
  });
};
BsiFilm.displayName = "BsiFilm";
var BsiFilm_default = BsiFilm;
export {
  BsiFilm,
  BsiFilm_default as default
};

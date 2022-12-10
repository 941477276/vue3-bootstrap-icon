// src/icons/BsiPlayBtn.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlayBtn = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "play-btn",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" }, "children": [] }]
  });
};
BsiPlayBtn.displayName = "BsiPlayBtn";
var BsiPlayBtn_default = BsiPlayBtn;
export {
  BsiPlayBtn,
  BsiPlayBtn_default as default
};

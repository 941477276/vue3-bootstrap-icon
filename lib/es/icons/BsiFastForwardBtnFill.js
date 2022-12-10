// src/icons/BsiFastForwardBtnFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFastForwardBtnFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "fast-forward-btn-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2Zm4.271 1.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445Z" }, "children": [] }]
  });
};
BsiFastForwardBtnFill.displayName = "BsiFastForwardBtnFill";
var BsiFastForwardBtnFill_default = BsiFastForwardBtnFill;
export {
  BsiFastForwardBtnFill,
  BsiFastForwardBtnFill_default as default
};

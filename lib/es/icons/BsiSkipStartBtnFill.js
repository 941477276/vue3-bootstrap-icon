// src/icons/BsiSkipStartBtnFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipStartBtnFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-start-btn-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.71-6.907L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z" }, "children": [] }]
  });
};
BsiSkipStartBtnFill.displayName = "BsiSkipStartBtnFill";
var BsiSkipStartBtnFill_default = BsiSkipStartBtnFill;
export {
  BsiSkipStartBtnFill,
  BsiSkipStartBtnFill_default as default
};

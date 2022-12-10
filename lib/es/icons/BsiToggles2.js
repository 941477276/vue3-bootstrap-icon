// src/icons/BsiToggles2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiToggles2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "toggles2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" }, "children": [] }]
  });
};
BsiToggles2.displayName = "BsiToggles2";
var BsiToggles2_default = BsiToggles2;
export {
  BsiToggles2,
  BsiToggles2_default as default
};

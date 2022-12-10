// src/icons/BsiBox2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBox2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "box2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" }, "children": [] }]
  });
};
BsiBox2Fill.displayName = "BsiBox2Fill";
var BsiBox2Fill_default = BsiBox2Fill;
export {
  BsiBox2Fill,
  BsiBox2Fill_default as default
};

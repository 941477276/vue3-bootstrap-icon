// src/icons/BsiBox2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBox2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "box2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" }, "children": [] }]
  });
};
BsiBox2.displayName = "BsiBox2";
var BsiBox2_default = BsiBox2;
export {
  BsiBox2,
  BsiBox2_default as default
};

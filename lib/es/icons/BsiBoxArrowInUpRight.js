// src/icons/BsiBoxArrowInUpRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBoxArrowInUpRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "box-arrow-in-up-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" }, "children": [] }]
  });
};
BsiBoxArrowInUpRight.displayName = "BsiBoxArrowInUpRight";
var BsiBoxArrowInUpRight_default = BsiBoxArrowInUpRight;
export {
  BsiBoxArrowInUpRight,
  BsiBoxArrowInUpRight_default as default
};

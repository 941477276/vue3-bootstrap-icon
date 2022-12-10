// src/icons/BsiPersonVideo2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonVideo2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-video2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" }, "children": [] }]
  });
};
BsiPersonVideo2.displayName = "BsiPersonVideo2";
var BsiPersonVideo2_default = BsiPersonVideo2;
export {
  BsiPersonVideo2,
  BsiPersonVideo2_default as default
};

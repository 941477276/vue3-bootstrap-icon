// src/icons/BsiImageAlt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiImageAlt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "image-alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z" }, "children": [] }]
  });
};
BsiImageAlt.displayName = "BsiImageAlt";
var BsiImageAlt_default = BsiImageAlt;
export {
  BsiImageAlt,
  BsiImageAlt_default as default
};

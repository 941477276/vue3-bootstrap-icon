// src/icons/BsiIndent.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiIndent = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "indent",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z" }, "children": [] }]
  });
};
BsiIndent.displayName = "BsiIndent";
var BsiIndent_default = BsiIndent;
export {
  BsiIndent,
  BsiIndent_default as default
};

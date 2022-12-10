// src/icons/BsiFileBarGraphFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileBarGraphFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-bar-graph-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" }, "children": [] }]
  });
};
BsiFileBarGraphFill.displayName = "BsiFileBarGraphFill";
var BsiFileBarGraphFill_default = BsiFileBarGraphFill;
export {
  BsiFileBarGraphFill,
  BsiFileBarGraphFill_default as default
};

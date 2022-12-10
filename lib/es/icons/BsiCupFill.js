// src/icons/BsiCupFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCupFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cup-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" }, "children": [] }]
  });
};
BsiCupFill.displayName = "BsiCupFill";
var BsiCupFill_default = BsiCupFill;
export {
  BsiCupFill,
  BsiCupFill_default as default
};

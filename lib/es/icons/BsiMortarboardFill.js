// src/icons/BsiMortarboardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMortarboardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "mortarboard-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" }, "children": [] }]
  });
};
BsiMortarboardFill.displayName = "BsiMortarboardFill";
var BsiMortarboardFill_default = BsiMortarboardFill;
export {
  BsiMortarboardFill,
  BsiMortarboardFill_default as default
};

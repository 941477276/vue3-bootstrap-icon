// src/icons/BsiJournalArrowDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiJournalArrowDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "journal-arrow-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" }, "children": [] }]
  });
};
BsiJournalArrowDown.displayName = "BsiJournalArrowDown";
var BsiJournalArrowDown_default = BsiJournalArrowDown;
export {
  BsiJournalArrowDown,
  BsiJournalArrowDown_default as default
};

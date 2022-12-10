// src/icons/BsiCalendar3Range.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar3Range = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar3-range",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 10a1 1 0 0 0 0-2H1v2h6zm2-3h6V5H9a1 1 0 0 0 0 2z" }, "children": [] }]
  });
};
BsiCalendar3Range.displayName = "BsiCalendar3Range";
var BsiCalendar3Range_default = BsiCalendar3Range;
export {
  BsiCalendar3Range,
  BsiCalendar3Range_default as default
};

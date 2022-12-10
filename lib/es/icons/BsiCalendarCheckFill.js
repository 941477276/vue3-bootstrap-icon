// src/icons/BsiCalendarCheckFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarCheckFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-check-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" }, "children": [] }]
  });
};
BsiCalendarCheckFill.displayName = "BsiCalendarCheckFill";
var BsiCalendarCheckFill_default = BsiCalendarCheckFill;
export {
  BsiCalendarCheckFill,
  BsiCalendarCheckFill_default as default
};

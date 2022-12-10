// src/icons/BsiCalendarHeartFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendarHeartFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar-heart-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" }, "children": [] }]
  });
};
BsiCalendarHeartFill.displayName = "BsiCalendarHeartFill";
var BsiCalendarHeartFill_default = BsiCalendarHeartFill;
export {
  BsiCalendarHeartFill,
  BsiCalendarHeartFill_default as default
};

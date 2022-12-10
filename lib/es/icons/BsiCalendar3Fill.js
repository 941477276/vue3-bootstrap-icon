// src/icons/BsiCalendar3Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCalendar3Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "calendar3-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z" }, "children": [] }]
  });
};
BsiCalendar3Fill.displayName = "BsiCalendar3Fill";
var BsiCalendar3Fill_default = BsiCalendar3Fill;
export {
  BsiCalendar3Fill,
  BsiCalendar3Fill_default as default
};

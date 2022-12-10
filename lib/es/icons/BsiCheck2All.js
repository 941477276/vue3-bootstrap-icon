// src/icons/BsiCheck2All.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheck2All = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check2-all",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" }, "children": [] }]
  });
};
BsiCheck2All.displayName = "BsiCheck2All";
var BsiCheck2All_default = BsiCheck2All;
export {
  BsiCheck2All,
  BsiCheck2All_default as default
};

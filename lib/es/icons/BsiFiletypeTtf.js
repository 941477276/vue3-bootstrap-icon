// src/icons/BsiFiletypeTtf.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFiletypeTtf = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filetype-ttf",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.928 15.849v-3.337h2.269v3.337h.794v-3.337h1.137v-.662H0v.662h1.134v3.337h.794Zm5.315-1.59v1.59h-.791V11.85H9v.653H7.243v1.117h1.605v.638H7.243Z" }, "children": [] }]
  });
};
BsiFiletypeTtf.displayName = "BsiFiletypeTtf";
var BsiFiletypeTtf_default = BsiFiletypeTtf;
export {
  BsiFiletypeTtf,
  BsiFiletypeTtf_default as default
};
// src/icons/BsiEnvelopeX.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEnvelopeX = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "envelope-x",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0Z" }, "children": [] }]
  });
};
BsiEnvelopeX.displayName = "BsiEnvelopeX";
var BsiEnvelopeX_default = BsiEnvelopeX;
export {
  BsiEnvelopeX,
  BsiEnvelopeX_default as default
};

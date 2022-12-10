// src/icons/BsiTypeItalic.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTypeItalic = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "type-italic",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" }, "children": [] }]
  });
};
BsiTypeItalic.displayName = "BsiTypeItalic";
var BsiTypeItalic_default = BsiTypeItalic;
export {
  BsiTypeItalic,
  BsiTypeItalic_default as default
};

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/BsiOpticalAudio.ts
var BsiOpticalAudio_exports = {};
__export(BsiOpticalAudio_exports, {
  BsiOpticalAudio: () => BsiOpticalAudio,
  default: () => BsiOpticalAudio_default
});
module.exports = __toCommonJS(BsiOpticalAudio_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiOpticalAudio = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "optical-audio",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM8 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3.05a2.5 2.5 0 0 0 0-4.9V4.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.354.146l-2 2A.5.5 0 0 0 2 4.5v2.05a2.5 2.5 0 0 0 0 4.9v3.05Zm1-.5v-3a.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 0-3A.5.5 0 0 0 3 7V4.707L4.707 3h6.586L13 4.707V7a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v3H3Z" }, "children": [] }]
  });
};
BsiOpticalAudio.displayName = "BsiOpticalAudio";
var BsiOpticalAudio_default = BsiOpticalAudio;

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

// src/icons/BsiWebcamFill.ts
var BsiWebcamFill_exports = {};
__export(BsiWebcamFill_exports, {
  BsiWebcamFill: () => BsiWebcamFill,
  default: () => BsiWebcamFill_default
});
module.exports = __toCommonJS(BsiWebcamFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiWebcamFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "webcam-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.644 11.094a.5.5 0 0 1 .356-.15h2a.5.5 0 0 1 .356.15c.175.177.39.347.603.496a7.166 7.166 0 0 0 .752.456l.01.006h.003A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.002-.001.01-.006a3.517 3.517 0 0 0 .214-.116 7.5 7.5 0 0 0 .539-.34c.214-.15.428-.319.603-.496ZM7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2Zm6 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" }, "children": [] }]
  });
};
BsiWebcamFill.displayName = "BsiWebcamFill";
var BsiWebcamFill_default = BsiWebcamFill;

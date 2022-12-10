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

// src/icons/BsiAirplaneFill.ts
var BsiAirplaneFill_exports = {};
__export(BsiAirplaneFill_exports, {
  BsiAirplaneFill: () => BsiAirplaneFill,
  default: () => BsiAirplaneFill_default
});
module.exports = __toCommonJS(BsiAirplaneFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiAirplaneFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "airplane-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" }, "children": [] }]
  });
};
BsiAirplaneFill.displayName = "BsiAirplaneFill";
var BsiAirplaneFill_default = BsiAirplaneFill;

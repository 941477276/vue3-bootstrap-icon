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

// src/icons/BsiEasel3Fill.ts
var BsiEasel3Fill_exports = {};
__export(BsiEasel3Fill_exports, {
  BsiEasel3Fill: () => BsiEasel3Fill,
  default: () => BsiEasel3Fill_default
});
module.exports = __toCommonJS(BsiEasel3Fill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiEasel3Fill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "easel3-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z" }, "children": [] }]
  });
};
BsiEasel3Fill.displayName = "BsiEasel3Fill";
var BsiEasel3Fill_default = BsiEasel3Fill;

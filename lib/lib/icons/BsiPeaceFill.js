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

// src/icons/BsiPeaceFill.ts
var BsiPeaceFill_exports = {};
__export(BsiPeaceFill_exports, {
  BsiPeaceFill: () => BsiPeaceFill,
  default: () => BsiPeaceFill_default
});
module.exports = __toCommonJS(BsiPeaceFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiPeaceFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "peace-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 13.292A8 8 0 0 0 8.5.015v7.778l5.5 5.5zm-.708.708L8.5 9.206v6.778a7.967 7.967 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.967 7.967 0 0 0 7.5 15.985zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5z" }, "children": [] }]
  });
};
BsiPeaceFill.displayName = "BsiPeaceFill";
var BsiPeaceFill_default = BsiPeaceFill;

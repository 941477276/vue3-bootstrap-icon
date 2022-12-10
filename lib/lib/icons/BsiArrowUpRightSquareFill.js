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

// src/icons/BsiArrowUpRightSquareFill.ts
var BsiArrowUpRightSquareFill_exports = {};
__export(BsiArrowUpRightSquareFill_exports, {
  BsiArrowUpRightSquareFill: () => BsiArrowUpRightSquareFill,
  default: () => BsiArrowUpRightSquareFill_default
});
module.exports = __toCommonJS(BsiArrowUpRightSquareFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiArrowUpRightSquareFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "arrow-up-right-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" }, "children": [] }]
  });
};
BsiArrowUpRightSquareFill.displayName = "BsiArrowUpRightSquareFill";
var BsiArrowUpRightSquareFill_default = BsiArrowUpRightSquareFill;

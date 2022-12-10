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

// src/icons/BsiArrowUpRightCircleFill.ts
var BsiArrowUpRightCircleFill_exports = {};
__export(BsiArrowUpRightCircleFill_exports, {
  BsiArrowUpRightCircleFill: () => BsiArrowUpRightCircleFill,
  default: () => BsiArrowUpRightCircleFill_default
});
module.exports = __toCommonJS(BsiArrowUpRightCircleFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiArrowUpRightCircleFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "arrow-up-right-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" }, "children": [] }]
  });
};
BsiArrowUpRightCircleFill.displayName = "BsiArrowUpRightCircleFill";
var BsiArrowUpRightCircleFill_default = BsiArrowUpRightCircleFill;

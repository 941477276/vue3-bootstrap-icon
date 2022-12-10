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

// src/icons/BsiArrowCounterclockwise.ts
var BsiArrowCounterclockwise_exports = {};
__export(BsiArrowCounterclockwise_exports, {
  BsiArrowCounterclockwise: () => BsiArrowCounterclockwise,
  default: () => BsiArrowCounterclockwise_default
});
module.exports = __toCommonJS(BsiArrowCounterclockwise_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiArrowCounterclockwise = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "arrow-counterclockwise",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" }, "children": [] }]
  });
};
BsiArrowCounterclockwise.displayName = "BsiArrowCounterclockwise";
var BsiArrowCounterclockwise_default = BsiArrowCounterclockwise;

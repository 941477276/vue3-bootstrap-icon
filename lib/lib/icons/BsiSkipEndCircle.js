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

// src/icons/BsiSkipEndCircle.ts
var BsiSkipEndCircle_exports = {};
__export(BsiSkipEndCircle_exports, {
  BsiSkipEndCircle: () => BsiSkipEndCircle,
  default: () => BsiSkipEndCircle_default
});
module.exports = __toCommonJS(BsiSkipEndCircle_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSkipEndCircle = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "skip-end-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" }, "children": [] }]
  });
};
BsiSkipEndCircle.displayName = "BsiSkipEndCircle";
var BsiSkipEndCircle_default = BsiSkipEndCircle;

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

// src/icons/BsiBullseye.ts
var BsiBullseye_exports = {};
__export(BsiBullseye_exports, {
  BsiBullseye: () => BsiBullseye,
  default: () => BsiBullseye_default
});
module.exports = __toCommonJS(BsiBullseye_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBullseye = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "bullseye",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }]
  });
};
BsiBullseye.displayName = "BsiBullseye";
var BsiBullseye_default = BsiBullseye;

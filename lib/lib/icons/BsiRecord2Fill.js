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

// src/icons/BsiRecord2Fill.ts
var BsiRecord2Fill_exports = {};
__export(BsiRecord2Fill_exports, {
  BsiRecord2Fill: () => BsiRecord2Fill,
  default: () => BsiRecord2Fill_default
});
module.exports = __toCommonJS(BsiRecord2Fill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiRecord2Fill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "record2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" }, "children": [] }]
  });
};
BsiRecord2Fill.displayName = "BsiRecord2Fill";
var BsiRecord2Fill_default = BsiRecord2Fill;

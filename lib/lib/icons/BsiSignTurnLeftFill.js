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

// src/icons/BsiSignTurnLeftFill.ts
var BsiSignTurnLeftFill_exports = {};
__export(BsiSignTurnLeftFill_exports, {
  BsiSignTurnLeftFill: () => BsiSignTurnLeftFill,
  default: () => BsiSignTurnLeftFill_default
});
module.exports = __toCommonJS(BsiSignTurnLeftFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignTurnLeftFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-turn-left-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7 8.466a.25.25 0 0 1-.41.192L4.23 6.692a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V6h1.5A2.5 2.5 0 0 1 11 8.5V11h-1V8.5A1.5 1.5 0 0 0 8.5 7H7v1.466Z" }, "children": [] }]
  });
};
BsiSignTurnLeftFill.displayName = "BsiSignTurnLeftFill";
var BsiSignTurnLeftFill_default = BsiSignTurnLeftFill;

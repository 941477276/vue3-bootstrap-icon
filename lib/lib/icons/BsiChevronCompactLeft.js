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

// src/icons/BsiChevronCompactLeft.ts
var BsiChevronCompactLeft_exports = {};
__export(BsiChevronCompactLeft_exports, {
  BsiChevronCompactLeft: () => BsiChevronCompactLeft,
  default: () => BsiChevronCompactLeft_default
});
module.exports = __toCommonJS(BsiChevronCompactLeft_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiChevronCompactLeft = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "chevron-compact-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" }, "children": [] }]
  });
};
BsiChevronCompactLeft.displayName = "BsiChevronCompactLeft";
var BsiChevronCompactLeft_default = BsiChevronCompactLeft;

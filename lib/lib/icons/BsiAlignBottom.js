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

// src/icons/BsiAlignBottom.ts
var BsiAlignBottom_exports = {};
__export(BsiAlignBottom_exports, {
  BsiAlignBottom: () => BsiAlignBottom,
  default: () => BsiAlignBottom_default
});
module.exports = __toCommonJS(BsiAlignBottom_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiAlignBottom = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "align-bottom",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "rect", "nodeType": 1, "attrs": { "width": "4", "height": "12", "x": "6", "y": "1", "rx": "1" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z" }, "children": [] }]
  });
};
BsiAlignBottom.displayName = "BsiAlignBottom";
var BsiAlignBottom_default = BsiAlignBottom;

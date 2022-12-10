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

// src/icons/BsiWindowSplit.ts
var BsiWindowSplit_exports = {};
__export(BsiWindowSplit_exports, {
  BsiWindowSplit: () => BsiWindowSplit,
  default: () => BsiWindowSplit_default
});
module.exports = __toCommonJS(BsiWindowSplit_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiWindowSplit = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "window-split",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z" }, "children": [] }]
  });
};
BsiWindowSplit.displayName = "BsiWindowSplit";
var BsiWindowSplit_default = BsiWindowSplit;

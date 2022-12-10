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

// src/icons/BsiStoplights.ts
var BsiStoplights_exports = {};
__export(BsiStoplights_exports, {
  BsiStoplights: () => BsiStoplights,
  default: () => BsiStoplights_default
});
module.exports = __toCommonJS(BsiStoplights_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiStoplights = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "stoplights",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-.4-1.833-1.5-2-2h2V8c-1.2-.4-1.833-1.5-2-2h2V4c-1.2-.4-1.833-1.5-2-2h2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6z" }, "children": [] }]
  });
};
BsiStoplights.displayName = "BsiStoplights";
var BsiStoplights_default = BsiStoplights;

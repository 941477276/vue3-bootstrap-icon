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

// src/icons/BsiTerminal.ts
var BsiTerminal_exports = {};
__export(BsiTerminal_exports, {
  BsiTerminal: () => BsiTerminal,
  default: () => BsiTerminal_default
});
module.exports = __toCommonJS(BsiTerminal_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiTerminal = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "terminal",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" }, "children": [] }]
  });
};
BsiTerminal.displayName = "BsiTerminal";
var BsiTerminal_default = BsiTerminal;

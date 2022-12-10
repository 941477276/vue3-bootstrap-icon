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

// src/icons/BsiPalette2.ts
var BsiPalette2_exports = {};
__export(BsiPalette2_exports, {
  BsiPalette2: () => BsiPalette2,
  default: () => BsiPalette2_default
});
module.exports = __toCommonJS(BsiPalette2_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiPalette2 = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "palette2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 12.995V13a3.07 3.07 0 0 0 0-.005z" }, "children": [] }]
  });
};
BsiPalette2.displayName = "BsiPalette2";
var BsiPalette2_default = BsiPalette2;

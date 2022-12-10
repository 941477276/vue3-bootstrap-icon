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

// src/icons/BsiMouse3Fill.ts
var BsiMouse3Fill_exports = {};
__export(BsiMouse3Fill_exports, {
  BsiMouse3Fill: () => BsiMouse3Fill,
  default: () => BsiMouse3Fill_default
});
module.exports = __toCommonJS(BsiMouse3Fill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiMouse3Fill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "mouse3-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5.069A15.328 15.328 0 0 0 7 0c-.593 0-1.104.157-1.527.463-.418.302-.717.726-.93 1.208-.386.873-.522 2.01-.54 3.206l4.497 1V.069zM3.71 5.836 3.381 6A2.5 2.5 0 0 0 2 8.236v2.576C2 13.659 4.22 16 7 16h2c2.78 0 5-2.342 5-5.188V8.123l-9-2v.003l.008.353c.007.3.023.715.053 1.175.063.937.186 2.005.413 2.688a.5.5 0 1 1-.948.316c-.273-.817-.4-2-.462-2.937A30.16 30.16 0 0 1 4 6.003c0-.034.003-.067.01-.1l-.3-.067zM14 7.1V5.187c0-1.13-.272-2.044-.748-2.772-.474-.726-1.13-1.235-1.849-1.59A7.495 7.495 0 0 0 9.5.212v5.887l4.5 1z" }, "children": [] }]
  });
};
BsiMouse3Fill.displayName = "BsiMouse3Fill";
var BsiMouse3Fill_default = BsiMouse3Fill;

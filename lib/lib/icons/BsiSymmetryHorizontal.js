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

// src/icons/BsiSymmetryHorizontal.ts
var BsiSymmetryHorizontal_exports = {};
__export(BsiSymmetryHorizontal_exports, {
  BsiSymmetryHorizontal: () => BsiSymmetryHorizontal,
  default: () => BsiSymmetryHorizontal_default
});
module.exports = __toCommonJS(BsiSymmetryHorizontal_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSymmetryHorizontal = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "symmetry-horizontal",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z" }, "children": [] }]
  });
};
BsiSymmetryHorizontal.displayName = "BsiSymmetryHorizontal";
var BsiSymmetryHorizontal_default = BsiSymmetryHorizontal;

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

// src/icons/BsiSignNoParking.ts
var BsiSignNoParking_exports = {};
__export(BsiSignNoParking_exports, {
  BsiSignNoParking: () => BsiSignNoParking,
  default: () => BsiSignNoParking_default
});
module.exports = __toCommonJS(BsiSignNoParking_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignNoParking = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-no-parking",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm5.29-3.416L9.63 8.923C10.5 8.523 11 7.66 11 6.586c0-1.482-.955-2.584-2.538-2.584H5.5v.79L3.416 2.71a7 7 0 0 1 9.874 9.874Zm-.706.707A7 7 0 0 1 2.71 3.417l2.79 2.79V12h1.283V9.164h1.674l4.127 4.127ZM8.726 8.019 6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Zm-1.949-.534.59.59h-.59v-.59Z" }, "children": [] }]
  });
};
BsiSignNoParking.displayName = "BsiSignNoParking";
var BsiSignNoParking_default = BsiSignNoParking;

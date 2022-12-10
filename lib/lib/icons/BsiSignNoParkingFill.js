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

// src/icons/BsiSignNoParkingFill.ts
var BsiSignNoParkingFill_exports = {};
__export(BsiSignNoParkingFill_exports, {
  BsiSignNoParkingFill: () => BsiSignNoParkingFill,
  default: () => BsiSignNoParkingFill_default
});
module.exports = __toCommonJS(BsiSignNoParkingFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignNoParkingFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-no-parking-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13.292 14A8 8 0 0 1 2 2.707l3.5 3.5V12h1.283V9.164h1.674L13.292 14Zm.708-.708-4.37-4.37C10.5 8.524 11 7.662 11 6.587c0-1.482-.955-2.584-2.538-2.584H5.5v.79L2.708 2.002A8 8 0 0 1 14 13.293Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.777 7.485v.59h.59l-.59-.59Zm1.949.535L6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Z" }, "children": [] }]
  });
};
BsiSignNoParkingFill.displayName = "BsiSignNoParkingFill";
var BsiSignNoParkingFill_default = BsiSignNoParkingFill;

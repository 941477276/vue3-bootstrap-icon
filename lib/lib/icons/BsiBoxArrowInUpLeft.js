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

// src/icons/BsiBoxArrowInUpLeft.ts
var BsiBoxArrowInUpLeft_exports = {};
__export(BsiBoxArrowInUpLeft_exports, {
  BsiBoxArrowInUpLeft: () => BsiBoxArrowInUpLeft,
  default: () => BsiBoxArrowInUpLeft_default
});
module.exports = __toCommonJS(BsiBoxArrowInUpLeft_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBoxArrowInUpLeft = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "box-arrow-in-up-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z" }, "children": [] }]
  });
};
BsiBoxArrowInUpLeft.displayName = "BsiBoxArrowInUpLeft";
var BsiBoxArrowInUpLeft_default = BsiBoxArrowInUpLeft;

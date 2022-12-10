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

// src/icons/BsiCheck2All.ts
var BsiCheck2All_exports = {};
__export(BsiCheck2All_exports, {
  BsiCheck2All: () => BsiCheck2All,
  default: () => BsiCheck2All_default
});
module.exports = __toCommonJS(BsiCheck2All_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCheck2All = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "check2-all",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" }, "children": [] }]
  });
};
BsiCheck2All.displayName = "BsiCheck2All";
var BsiCheck2All_default = BsiCheck2All;

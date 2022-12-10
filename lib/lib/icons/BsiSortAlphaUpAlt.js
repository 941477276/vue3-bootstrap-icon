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

// src/icons/BsiSortAlphaUpAlt.ts
var BsiSortAlphaUpAlt_exports = {};
__export(BsiSortAlphaUpAlt_exports, {
  BsiSortAlphaUpAlt: () => BsiSortAlphaUpAlt,
  default: () => BsiSortAlphaUpAlt_default
});
module.exports = __toCommonJS(BsiSortAlphaUpAlt_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSortAlphaUpAlt = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sort-alpha-up-alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" }, "children": [] }]
  });
};
BsiSortAlphaUpAlt.displayName = "BsiSortAlphaUpAlt";
var BsiSortAlphaUpAlt_default = BsiSortAlphaUpAlt;

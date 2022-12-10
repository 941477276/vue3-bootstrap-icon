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

// src/icons/BsiEarbuds.ts
var BsiEarbuds_exports = {};
__export(BsiEarbuds_exports, {
  BsiEarbuds: () => BsiEarbuds,
  default: () => BsiEarbuds_default
});
module.exports = __toCommonJS(BsiEarbuds_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiEarbuds = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "earbuds",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z" }, "children": [] }]
  });
};
BsiEarbuds.displayName = "BsiEarbuds";
var BsiEarbuds_default = BsiEarbuds;

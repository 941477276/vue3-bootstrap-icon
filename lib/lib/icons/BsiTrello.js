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

// src/icons/BsiTrello.ts
var BsiTrello_exports = {};
__export(BsiTrello_exports, {
  BsiTrello: () => BsiTrello,
  default: () => BsiTrello_default
});
module.exports = __toCommonJS(BsiTrello_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiTrello = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "trello",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 0 0 1.902 16h12.199A1.902 1.902 0 0 0 16 14.09V1.9A1.902 1.902 0 0 0 14.1 0ZM7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367Zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633l.01 4.284Z" }, "children": [] }]
  });
};
BsiTrello.displayName = "BsiTrello";
var BsiTrello_default = BsiTrello;

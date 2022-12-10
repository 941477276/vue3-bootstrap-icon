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

// src/icons/BsiSignYieldFill.ts
var BsiSignYieldFill_exports = {};
__export(BsiSignYieldFill_exports, {
  BsiSignYieldFill: () => BsiSignYieldFill,
  default: () => BsiSignYieldFill_default
});
module.exports = __toCommonJS(BsiSignYieldFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignYieldFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-yield-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.48 5.323h-.28v1.353h.28c.372 0 .54-.222.54-.674 0-.45-.169-.68-.54-.68Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.022 14.434a1.131 1.131 0 0 0 1.96 0l6.857-11.667c.457-.778-.092-1.767-.98-1.767H1.144c-.889 0-1.437.99-.98 1.767l6.857 11.667ZM5.506 6.232V7H5.11v-.76L4.44 5h.44l.424.849h.016L5.748 5h.428l-.67 1.232ZM6.628 5v2h-.396V5h.396Zm.684 1.676h.895V7H6.919V5h1.288v.324h-.895v.513h.842v.303h-.842v.536Zm1.521-.013h.848V7H8.437V5h.396v1.663Zm.97.337V5h.73c.608 0 .895.364.895.995 0 .636-.291 1.005-.895 1.005h-.73Z" }, "children": [] }]
  });
};
BsiSignYieldFill.displayName = "BsiSignYieldFill";
var BsiSignYieldFill_default = BsiSignYieldFill;

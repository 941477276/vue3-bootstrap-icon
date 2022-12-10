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

// src/icons/BsiBorderInner.ts
var BsiBorderInner_exports = {};
__export(BsiBorderInner_exports, {
  BsiBorderInner: () => BsiBorderInner,
  default: () => BsiBorderInner_default
});
module.exports = __toCommonJS(BsiBorderInner_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBorderInner = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "border-inner",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.969 0H0v.969h.5V1h.469V.969H1V.5H.969V0zm.937 1h.938V0h-.938v1zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938v1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 7.5H16v1H8.5V16h-1V8.5H0v-1h7.5V0h1v7.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.406 1h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031V1zM1 2.844v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM1 4.719V3.78H0v.938h1zm14-.938v.938h1V3.78h-1zM1 6.594v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM0 9.406v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zM0 16h.969v-.5H1v-.469H.969V15H.5v.031H0V16zm1.906 0h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm3.75 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875-.5v.5H16v-.969h-.5V15h-.469v.031H15v.469h.031z" }, "children": [] }]
  });
};
BsiBorderInner.displayName = "BsiBorderInner";
var BsiBorderInner_default = BsiBorderInner;

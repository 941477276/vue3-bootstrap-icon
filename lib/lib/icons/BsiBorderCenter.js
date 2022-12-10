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

// src/icons/BsiBorderCenter.ts
var BsiBorderCenter_exports = {};
__export(BsiBorderCenter_exports, {
  BsiBorderCenter: () => BsiBorderCenter,
  default: () => BsiBorderCenter_default
});
module.exports = __toCommonJS(BsiBorderCenter_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBorderCenter = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "border-center",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.969 0H0v.969h.5V1h.469V.969H1V.5H.969V0zm.937 1h.938V0h-.938v1zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938v1zM7.531.969V1h.938V.969H8.5V.5h-.031V0H7.53v.5H7.5v.469h.031zM9.406 1h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031V1zM1 2.844v-.938H0v.938h1zm6.5-.938v.938h1v-.938h-1zm7.5 0v.938h1v-.938h-1zM1 4.719V3.78H0v.938h1zm6.5-.938v.938h1V3.78h-1zm7.5 0v.938h1V3.78h-1zM1 6.594v-.938H0v.938h1zm6.5-.938v.938h1v-.938h-1zm7.5 0v.938h1v-.938h-1zM0 8.5v-1h16v1H0zm0 .906v.938h1v-.938H0zm7.5 0v.938h1v-.938h-1zm8.5.938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm7.5 0v.938h1v-.938h-1zm8.5.938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm7.5 0v.938h1v-.938h-1zm8.5.938v-.938h-1v.938h1zM0 16h.969v-.5H1v-.469H.969V15H.5v.031H0V16zm1.906 0h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm1.875-.5v.5h.938v-.5H8.5v-.469h-.031V15H7.53v.031H7.5v.469h.031zm1.875.5h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875-.5v.5H16v-.969h-.5V15h-.469v.031H15v.469h.031z" }, "children": [] }]
  });
};
BsiBorderCenter.displayName = "BsiBorderCenter";
var BsiBorderCenter_default = BsiBorderCenter;

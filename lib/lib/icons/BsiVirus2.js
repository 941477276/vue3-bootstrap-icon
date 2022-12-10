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

// src/icons/BsiVirus2.ts
var BsiVirus2_exports = {};
__export(BsiVirus2_exports, {
  BsiVirus2: () => BsiVirus2,
  default: () => BsiVirus2_default
});
module.exports = __toCommonJS(BsiVirus2_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiVirus2 = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "virus2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 0a1 1 0 0 0-1 1v1.143c0 .557-.407 1.025-.921 1.24-.514.214-1.12.162-1.513-.231l-.809-.809a1 1 0 1 0-1.414 1.414l.809.809c.394.394.445.999.23 1.513C3.169 6.593 2.7 7 2.144 7H1a1 1 0 0 0 0 2h1.143c.557 0 1.025.407 1.24.921.214.514.163 1.12-.231 1.513l-.809.809a1 1 0 0 0 1.414 1.414l.809-.809c.394-.394.999-.445 1.513-.23.514.214.921.682.921 1.24V15a1 1 0 1 0 2 0v-1.143c0-.557.407-1.025.921-1.24.514-.214 1.12-.162 1.513.231l.809.809a1 1 0 0 0 1.414-1.414l-.809-.809c-.393-.394-.445-.999-.23-1.513.214-.514.682-.921 1.24-.921H15a1 1 0 1 0 0-2h-1.143c-.557 0-1.025-.407-1.24-.921-.214-.514-.162-1.12.231-1.513l.809-.809a1 1 0 0 0-1.414-1.414l-.809.809c-.394.393-.999.445-1.513.23-.514-.214-.92-.682-.92-1.24V1a1 1 0 0 0-1-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }, "children": [] }]
  });
};
BsiVirus2.displayName = "BsiVirus2";
var BsiVirus2_default = BsiVirus2;

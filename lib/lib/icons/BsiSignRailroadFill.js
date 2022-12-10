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

// src/icons/BsiSignRailroadFill.ts
var BsiSignRailroadFill_exports = {};
__export(BsiSignRailroadFill_exports, {
  BsiSignRailroadFill: () => BsiSignRailroadFill,
  default: () => BsiSignRailroadFill_default
});
module.exports = __toCommonJS(BsiSignRailroadFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignRailroadFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-railroad-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L4.224 3.162 8 6.94l3.777-3.777L9.049.435Zm3.274 7.425v-.862h.467c.28 0 .467.154.467.44 0 .28-.182.421-.475.421h-.459Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.838 4.223 9.06 8l3.777 3.777 2.727-2.728c.58-.58.58-1.519 0-2.098l-2.727-2.728Zm.03 2.361c.591 0 .935.334.935.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584h1.064Zm-1.091 6.254L8 9.06l-3.777 3.777 2.728 2.727c.58.58 1.519.58 2.098 0l2.728-2.727Zm-8.953-5.84v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44h-.467Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.162 11.777 6.94 8 3.162 4.223.435 6.951c-.58.58-.58 1.519 0 2.098l2.727 2.728Zm-.86-5.193h1.065c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584Z" }, "children": [] }]
  });
};
BsiSignRailroadFill.displayName = "BsiSignRailroadFill";
var BsiSignRailroadFill_default = BsiSignRailroadFill;

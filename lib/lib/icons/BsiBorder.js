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

// src/icons/BsiBorder.ts
var BsiBorder_exports = {};
__export(BsiBorder_exports, {
  BsiBorder: () => BsiBorder,
  default: () => BsiBorder_default
});
module.exports = __toCommonJS(BsiBorder_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBorder = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "border",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 0h.969v.5H1v.469H.969V1H.5V.969H0V0zm2.844 1h-.938V0h.938v1zm1.875 0H3.78V0h.938v1zm1.875 0h-.938V0h.938v1zm.937 0V.969H7.5V.5h.031V0h.938v.5H8.5v.469h-.031V1H7.53zm2.813 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zM15.5 1h-.469V.969H15V.5h.031V0H16v.969h-.5V1zM1 1.906v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM1 3.78v.938H0V3.78h1zm6.5.938V3.78h1v.938h-1zm7.5 0V3.78h1v.938h-1zM1 5.656v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM.969 8.5H.5v-.031H0V7.53h.5V7.5h.469v.031H1v.938H.969V8.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875-.031V8.5H7.53v-.031H7.5V7.53h.031V7.5h.938v.031H8.5v.938h-.031zm1.875.031h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.406 0h-.469v-.031H15V7.53h.031V7.5h.469v.031h.5v.938h-.5V8.5zM0 10.344v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 12.22v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 14.094v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM.969 16H0v-.969h.5V15h.469v.031H1v.469H.969v.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H7.5v-.469h.031V15h.938v.031H8.5v.469h-.031v.5H7.53zm2.813 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H15v-.469h.031V15h.469v.031h.5V16h-.969z" }, "children": [] }]
  });
};
BsiBorder.displayName = "BsiBorder";
var BsiBorder_default = BsiBorder;

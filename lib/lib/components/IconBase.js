"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/IconBase.ts
var IconBase_exports = {};
__export(IconBase_exports, {
  default: () => IconBase_default
});
module.exports = __toCommonJS(IconBase_exports);
var import_vue = require("vue");
var buildNode = function(childrens) {
  if (childrens.length == 0) {
    return [];
  }
  return childrens.filter((vdomChild) => {
    return vdomChild.nodeType == 1 && vdomChild.nodeName != "svg" || vdomChild.nodeType == 3 && vdomChild.text != " ";
  }).map((vdomChild) => {
    let children = vdomChild.children || [];
    return vdomChild.noteType == 3 ? vdomChild.text : (0, import_vue.h)(
      vdomChild.nodeName,
      {
        ...vdomChild.attrs
      },
      children.length > 0 ? buildNode(children) : []
    );
  });
};
function IconBase(props) {
  let svgChildren = buildNode(props.svgChildrenVDom);
  return (0, import_vue.h)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "1em",
    height: props.height || "1em",
    fill: props.fill || "currentColor",
    viewBox: props.viewBox || "0 0 1024 1024",
    ariaHidden: props.ariaHidden === true ? "true" : "false",
    focusable: props.focusable === true ? "true" : "false",
    "data-icon": "bs-icon-" + props.iconName
  }, svgChildren);
}
IconBase.props = ["width", "height", "fill", "viewBox", "ariaHidden", "focusable", "iconName", "svgChildrenVDom"];
IconBase.inheritAttrs = false;
var IconBase_default = IconBase;

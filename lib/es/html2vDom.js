var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// scripts/html2vDom.js
var require_html2vDom = __commonJS({
  "scripts/html2vDom.js"(exports, module) {
    module.exports = function html2vDom(htmlStr) {
      var tagNameRegexp = /^([xa-zA-Z0-9\-_$]+)\s/;
      var tagNameRegexp2 = /^([a-zA-Z0-9\-_$]+)\s*>/;
      let endTagNameRegexp = /^\/([a-zA-Z0-9\-]+)>/;
      let attrSplitor = "|=__=|";
      var vdomResult = [];
      var domStack = [];
      var remainderHtml = htmlStr;
      let quotCount = 0;
      var currentChars = "";
      let appendTextNode = function(domStackTop) {
        if (currentChars.length === 0) {
          return;
        }
        let text = currentChars.trim();
        if (text.length === 0) {
          text = " ";
        }
        if (domStackTop) {
          if (domStackTop.nodeType == 8 && text.substr(-2) == "--") {
            text = text.substr(0, text.length - 2);
          }
          domStackTop.children.push({
            nodeType: 3,
            status: 3,
            text
          });
          currentChars = "";
        }
      };
      while (remainderHtml.length > 0) {
        let firstChar = remainderHtml.charAt(0);
        remainderHtml = remainderHtml.substr(1);
        let domStackTop = domStack[domStack.length - 1];
        let domStackTopStatus = domStackTop && domStackTop.status;
        if (firstChar === "<" && quotCount == 0) {
          if (domStackTopStatus == 1 && endTagNameRegexp.test(remainderHtml)) {
            let endTagName = RegExp.$1;
            if (endTagName === domStackTop.nodeName) {
              appendTextNode(domStackTop);
              domStackTop.status = 3;
              currentChars = "";
              domStack.pop();
              remainderHtml = remainderHtml.substr(1 + endTagName.length + 1);
              continue;
            }
          }
          if (domStackTop && domStackTop.status == 1) {
            appendTextNode(domStackTop);
          }
          if (tagNameRegexp.test(remainderHtml) || tagNameRegexp2.test(remainderHtml)) {
            let tagName = RegExp.$1;
            let vdom = {
              nodeName: tagName,
              nodeType: 1,
              attrs: {},
              status: 0,
              children: []
            };
            if (vdomResult.length == 0 || !domStackTop) {
              vdomResult.push(vdom);
            }
            if (domStackTop) {
              domStackTop.children.push(vdom);
            }
            domStack.push(vdom);
            remainderHtml = remainderHtml.substr(tagName.length);
          } else if (remainderHtml.substr(0, 3) == "!--") {
            let vdom = {
              name: "comment",
              nodeType: 8,
              status: 1,
              children: []
            };
            if (vdomResult.length == 0 || !domStackTop) {
              vdomResult.push(vdom);
            }
            if (domStackTop) {
              domStackTop.children.push(vdom);
            }
            domStack.push(vdom);
            remainderHtml = remainderHtml.substr(3);
          }
        } else if (firstChar === "=") {
          if (domStackTopStatus == 0 && quotCount == 0) {
            currentChars += attrSplitor;
          } else {
            currentChars += firstChar;
          }
        } else if (firstChar === " " && domStackTopStatus == 0 && quotCount == 0) {
          let nextChar = remainderHtml.charAt(0);
          if (nextChar != " ") {
            let attr = currentChars.trim();
            if (attr.length > 0) {
              domStackTop.attrs[currentChars.trim()] = void 0;
              currentChars = "";
            }
          } else {
            currentChars += firstChar;
          }
        } else if (firstChar === '"' && currentChars.charAt(currentChars.length - 1) != "\\") {
          if (domStackTopStatus == 0) {
            quotCount += 1;
            if (quotCount == 2 && currentChars.indexOf(attrSplitor) > -1) {
              let attrInfo = currentChars.split(attrSplitor);
              let domAttrName = (attrInfo[0] || "").trim();
              if (domAttrName) {
                domStackTop.attrs[domAttrName] = attrInfo[1];
              }
              currentChars = "";
              quotCount = 0;
            }
          } else {
            currentChars += firstChar;
          }
        } else if (firstChar == ">") {
          let currentCharLast = currentChars.charAt(currentChars.length - 1);
          if (domStackTopStatus == 0 && quotCount == 0) {
            if (currentCharLast === "/") {
              let remainderChars = currentChars.substr(0, currentChars.length - 1).trim();
              if (remainderChars.length > 0) {
                domStackTop.attrs[remainderChars] = void 0;
              }
              domStackTop.status = 3;
              domStack.pop();
            } else {
              let remainderChars = currentChars.trim();
              if (remainderChars.length > 0) {
                domStackTop.attrs[remainderChars] = void 0;
              }
              domStackTop.status = 1;
            }
            currentChars = "";
          } else if (domStackTopStatus == 1 && quotCount == 0 && currentChars.substr(-2) == "--") {
            appendTextNode(domStackTop);
            domStackTop.status = 3;
            domStack.pop();
          } else {
            currentChars += firstChar;
          }
        } else {
          currentChars += firstChar;
        }
      }
      return vdomResult;
    };
  }
});
export default require_html2vDom();

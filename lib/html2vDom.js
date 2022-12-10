module.exports = function html2vDom (htmlStr) {
  var tagNameRegexp = /^([xa-zA-Z0-9\-_$]+)\s/; // 截取标签名称正则
  var tagNameRegexp2 = /^([a-zA-Z0-9\-_$]+)\s*>/; // 截取标签名称正则
  let endTagNameRegexp = /^\/([a-zA-Z0-9\-]+)>/; // 截取结束标签名正则，如:/div>、/div>fsdfsdf>dfsdf
  let attrSplitor = '|=__=|'; // 属性名与属性值的分割符
  var vdomResult = [];
  var domStack = []; // 当前dom栈
  var remainderHtml = htmlStr; // 剩余的字符串
  let quotCount = 0; // 引号数量
  var currentChars = '';
  // let attrName = ''; // 标签属性名
  // 往栈顶节点添加文本节点
  let appendTextNode = function (domStackTop) {
    if (currentChars.length === 0) {
      return;
    }
    let text = currentChars.trim();
    // console.log('遇到了文本节点：', currentChars, domStackTop);
    if (text.length === 0) { // 如果文本节点全是空格，则只保留一个有效空格，因为html规范如此
      text = ' ';
    }
    if (domStackTop) {
      if (domStackTop.nodeType == 8 && text.substr(-2) == '--') {
        text = text.substr(0, text.length - 2);
      }
      domStackTop.children.push({
        nodeType: 3,
        status: 3,
        text: text
      });
      currentChars = '';
    }
  }
  while (remainderHtml.length > 0) {
    let firstChar = remainderHtml.charAt(0);
    remainderHtml = remainderHtml.substr(1);
    // console.log('firstchar', firstChar);
    let domStackTop = domStack[domStack.length - 1]; // 获取栈顶元素
    let domStackTopStatus = domStackTop && domStackTop.status;
    // console.log('currentChars', currentChars);
    if (firstChar === '<' && quotCount == 0) {
      // console.log('遇到“<”号，并且没有被引号引起', tagNameRegexp.test(remainderHtml), remainderHtml);
      if (domStackTopStatus == 1 && endTagNameRegexp.test(remainderHtml)) { // 如果栈顶节点已经解析完开始标签，此时遇到“<”则判断是否该开始解析结束标签了
        let endTagName = RegExp.$1;
        if (endTagName === domStackTop.nodeName) { // 如果结束标签与开始标签相等则该标签解析完成
          // console.log('【' + endTagName + '】标签解析结束');
          // 结束标签解析完成前若有字符都视为节点的文本
          appendTextNode(domStackTop);
          domStackTop.status = 3;
          currentChars = '';
          domStack.pop();
          // console.log('【' + endTagName + '】标签解析结束后的栈顶：', domStack.slice());
          // 1 + endTagName.length + 1 = ('/' + 标签名 + '>')
          remainderHtml = remainderHtml.substr(1 + endTagName.length + 1);
          continue;
        }
      }
      if (domStackTop && domStackTop.status == 1) { // 遇到节点的文本节点
        // 开始标签解析完成后，遇到下一个节点开始标签前的内容视为当前节点文本
        appendTextNode(domStackTop);
      }
      if (tagNameRegexp.test(remainderHtml) || tagNameRegexp2.test(remainderHtml)) { // 如果第一个字符是“<”并且可以获取标签名称则表示遇到了一个节点（这2个正则的判断顺序别弄错了，否责会解析错误）
        let tagName = RegExp.$1;
        // console.log('遇到新标签：', tagName, domStackTop);
        let vdom = {
          nodeName: tagName,
          nodeType: 1, // 1--dom节点，3--文本节点，8--注释节点
          attrs: {},
          status: 0, // 标签解析状态，0--开始标签解析中，1--开始标签解析完成，2--结束标签解析中，3--结束标签解析完成
          children: []
        }
        if (vdomResult.length == 0 || !domStackTop) {
          vdomResult.push(vdom);
        }
        if (domStackTop) {
          domStackTop.children.push(vdom);
        }
        domStack.push(vdom);
        remainderHtml = remainderHtml.substr(tagName.length);
      } else if (remainderHtml.substr(0, 3) == '!--') { // 如果后面3个字符为“!--”表示遇到了注释节点
        // console.log('遇到注释节点');
        let vdom = {
          name: 'comment',
          nodeType: 8, // 1--dom节点，3--文本节点，8--注释节点
          status: 1, // 标签解析状态，0--开始标签解析中，1--开始标签解析完成，2--结束标签解析中，3--结束标签解析完成
          children: []
        }
        if (vdomResult.length == 0 || !domStackTop) {
          vdomResult.push(vdom);
        }
        if (domStackTop) {
          domStackTop.children.push(vdom);
        }
        domStack.push(vdom);
        remainderHtml = remainderHtml.substr(3);
      }

      // return;
    }  else if (firstChar === '=') { // 遇到"="号
      // console.log('遇到了等于号', domStackTopStatus, domStackTopStatus, quotCount);
      if (domStackTopStatus == 0 && quotCount == 0) { // 处于开始标签解析中，此时遇到等于号表示遇到了节点属性的开始
        currentChars += attrSplitor;
      } else {
        currentChars += firstChar;
      }
    } else if (firstChar === ' ' && domStackTopStatus == 0 && quotCount == 0) { // 开始标签解析中遇到了空格
      // console.log('遇到了空格', domStackTopStatus, domStackTopStatus, quotCount);
      let nextChar = remainderHtml.charAt(0);

      if (nextChar != ' ') { // 如果下一个字符不是空格，说明currentChars为节点的属性并且是没有属性值的属性
        let attr = currentChars.trim();
        if (attr.length > 0) {
          // console.log('添加没有属性值的属性：', currentChars.trim());
          domStackTop.attrs[currentChars.trim()] = void 0;
          currentChars = '';
        }
      } else {
        currentChars += firstChar;
      }
    } else if (firstChar === '"' && currentChars.charAt(currentChars.length - 1) != '\\') { // 遇到双引号并且引号没有被注释
      // console.log('遇到了引号', domStackTopStatus);
      if (domStackTopStatus == 0) { // 处于开始标签解析中，此时遇到引号表示遇到了节点的属性值的开始或结束
        quotCount += 1;
        if (quotCount == 2 && currentChars.indexOf(attrSplitor) > -1) { // 凑成一对引号，此时读取属性值结束
          let attrInfo = currentChars.split(attrSplitor);
          let domAttrName = (attrInfo[0] || '').trim();
          // console.log('attrInfo', attrInfo);
          // 设置属性及属性值
          if (domAttrName) {
            domStackTop.attrs[domAttrName] = attrInfo[1];
          }
          currentChars = '';
          quotCount = 0;
        }
      } else {
        currentChars += firstChar;
      }
    } else if (firstChar == '>') { // 遇到">"号
      // console.log('遇到了“>”号', domStackTopStatus);
      let currentCharLast = currentChars.charAt(currentChars.length - 1);
      if (domStackTopStatus == 0 && quotCount == 0) { // 处于开始标签解析中，并且不在引号中，说明此时遇到了开始标签的结束
        if (currentCharLast === '/') { // 如果最后个字符为“/”表示遇到了单标签的结束
          // console.log('【' + domStackTop.nodeName + '】单标签解析结束！');
          let remainderChars = currentChars.substr(0, currentChars.length - 1).trim();
          if (remainderChars.length > 0) { // 如果还有剩余字符则当做节点的属性
            // console.log('单标签节点添加没有属性值的属性：', remainderChars);
            domStackTop.attrs[remainderChars] = void 0;
          }
          domStackTop.status = 3; // 设置节点状态为已完成
          domStack.pop(); // 栈顶节点出栈
        }/*  else if (currentChars.substr(-2) == '--') { // 如果最后2个字符为“--”表示遇到了注释节点的结束
                            console.log('注释节点解析结束！');
                            appendTextNode(domStackTop);
                            domStackTop.status = 3;
                            domStack.pop();
                        } */ else { // 开始标签的结束
          // console.log('开始标签的结束', domStackTop);
          let remainderChars = currentChars.trim();
          if (remainderChars.length > 0) {
            // console.log('开始标签的结束前还有字符，当做没有属性值的属性：', remainderChars);
            domStackTop.attrs[remainderChars] = void 0;
          }
          domStackTop.status = 1;
        }
        currentChars = '';
      } else if (domStackTopStatus == 1 && quotCount == 0 && currentChars.substr(-2) == '--') { // 如果最后2个字符为“--”表示遇到了注释节点的结束
        // console.log('注释节点解析结束！', currentChars);
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
  // console.log('vdom解析结果：', vdomResult);
  return vdomResult;
};

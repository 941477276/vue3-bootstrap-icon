/**
 * 复制文本
 * @param value 文本值
 * @returns {number}
 */
export function copyText (value) {
  if (!value) {
    return -1;
  }
  if (!document.execCommand) {
    // Message.error('浏览器不支持')
    return -2;
  }
  try {
    const selectText = (textbox, startIndex, stopIndex) => {
      if (textbox.createTextRange) {
        // ie
        const range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex); // 起始光标
        range.moveEnd('character', stopIndex - startIndex); // 结束光标
        range.select(); // 不兼容苹果
      } else {
        // firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex);
        textbox.focus();
      }
    };
    const copyEl = document.createElement('input');
    copyEl.value = value;
    copyEl.setAttribute('readonly', 'readonly');
    copyEl.setAttribute('class', 'copy-dpape');
    document.body.appendChild(copyEl);
    selectText(copyEl, 0, value.length);
    if (document.execCommand('copy')) {
      copyEl.blur();
      document.execCommand('copy');
      document.body.removeChild(copyEl);
      return 1;
    }
  } catch (e) {
    console.log(e);
    return 2;
  }
}

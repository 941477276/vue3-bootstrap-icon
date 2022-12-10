const path = require('path');
const fs = require('fs');
const {
  writeFileSync,
  deleteFolder,
  mkdir
} = require('./utils');

// 构建图标组件
function generateIcons () {
  // 目标存放svg根目录
  const targetSvgRootDir = path.resolve(__dirname, '../svg');
  // 存放svg icon根目录
  const targetIconsRootDir = path.resolve(__dirname, '../src/icons');
  // 获取bootstrap icon版本
  const bootstrapIconsVersion = require('bootstrap-icons/package.json').version;
  let iconsVersionPath = path.resolve(targetIconsRootDir, 'version.json');
  // 构建时的版本
  let iconsVersion = fs.existsSync(iconsVersionPath) ? require(iconsVersionPath) : null;

  let bootstrapIconsVersionPath = path.resolve(targetSvgRootDir, 'bootstrap-icons-version.json');
  let localBootstrapIconsVersion = fs.existsSync(bootstrapIconsVersionPath) ? require(bootstrapIconsVersionPath).version : '';
  if (localBootstrapIconsVersion === iconsVersion) { // 如果bootstrap icons图标与本地保存的图标的版本一致则不进行构建
    console.warn('[generate icons Tip]: The old and new bootstrap icons are consistent and will not be updated');
    return;
  }
  // 获取icon组件模板
  const iconComponentTemp = require(path.resolve(__dirname, '../src/template.js'));
  console.log('开始构建图标组件---------------');
  // 移除原有的存放icon目录
  deleteFolder(targetIconsRootDir);
  // 再创建目录
  mkdir(targetIconsRootDir);

  let iconsIndexContent = [];
  fs.readdirSync(targetSvgRootDir).forEach(dirName => {
    let dirPath = path.resolve(targetSvgRootDir, dirName);
    if (!fs.statSync(dirPath).isDirectory()) {
      return;
    }
    fs.readdirSync(dirPath).forEach(fileFullName => {
      if (!fileFullName.endsWith('.js')) {
        return;
      }
      let svgInfo = require(path.resolve(dirPath, fileFullName));
      let iconName = 'bsi-' + svgInfo.name;
      // 将名称转为单词首字母大写格式
      iconName = ('-' + iconName).replace(/-(\w{1})/g, function ($matched, $1) {
        return $1.toUpperCase();
      });
      let svgVDom = svgInfo.svgVDom[0];
      let svgChildrenVDom = svgVDom.children.filter(vdomChild => {
        delete vdomChild.status;
        return vdomChild.nodeType == 1 || (vdomChild.nodeType == 3 && vdomChild.text != ' ');
      });
      let data = {
        iconDisplayName: iconName,
        svgName: svgInfo.name,
        isFilled: svgInfo.isFilled,
        viewBox: svgVDom.attrs.viewBox,
        svgChildrenVDom: JSON.stringify(svgChildrenVDom)
        // svgVDom: JSON.stringify(svgVDom)
      };
      let iconContent = iconComponentTemp.trim().replace(/<%= (\w+) %>/g, function ($macthed, $1) {
        return data[$1];
      });
      // index.ts内容
      iconsIndexContent.push(`export { default as ${iconName} } from './${iconName}';\r\n`);
      writeFileSync(path.resolve(targetIconsRootDir, iconName + '.ts'), iconContent);
    });
  });

  // 生产index.ts
  writeFileSync(path.resolve(targetIconsRootDir, 'index.ts'), `
// this file is generate by ../../scripts/generate.js
// do not edit manually
${iconsIndexContent.join('')}`.trim());

  // 写入构建时的bootstrap版本
  writeFileSync(iconsVersionPath, JSON.stringify({
    version: bootstrapIconsVersion
  }, null, 2))
  console.log('图标组件构建完成！---------------');
};

generateIcons();

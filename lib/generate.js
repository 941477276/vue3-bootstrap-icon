const path = require('path');
const fs = require('fs');
const {
  writeFileSync,
  deleteFolder,
  mkdir
} = require('./utils');
const html2vDom = require('./html2vDom');

// 输出的vue文件模板
const vueFileTemplateTS = `
// this file is generate by 'bs-icon/generate.js'
import {
  FunctionalComponent,
  createVNode
} from 'vue';
import { BsIcon } from 'bs-icon';

export interface BsIconProps {
  width: string;
  height: string;
  fill: string;
  viewBox: string;
  ariaHidden: boolean;
  focusable: boolean;
}

export interface <%= iconDisplayName %>Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const <%= iconDisplayName %>: <%= iconDisplayName %>Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    ...<%= attrs %>,
    iconName: '<%= svgName %>',
    isFilled: <%= isFilled %>,
    viewBox: props.viewBox || '<%= viewBox %>',
    svgChildrenVDom: <%= svgChildrenVDom %>
  });
};
<%= iconDisplayName %>.displayName = '<%= iconDisplayName %>';
export { <%= iconDisplayName %> };
export default <%= iconDisplayName %>;
`;

const vueFileTemplateJS = `
// this file is generate by 'bs-icon/generate.js'
import {
  createVNode
} from 'vue';
import { BsIcon } from 'bs-icon';

// define icon component
const <%= iconDisplayName %> = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    ...<%= attrs %>,
    iconName: '<%= svgName %>',
    isFilled: <%= isFilled %>,
    viewBox: props.viewBox || '<%= viewBox %>',
    svgChildrenVDom: <%= svgChildrenVDom %>
  });
};
<%= iconDisplayName %>.displayName = '<%= iconDisplayName %>';
export { <%= iconDisplayName %> };
export default <%= iconDisplayName %>;
`;

// 构建图标组件
function generateIcons (options = {}) {
  let {
    svgContent, // svg内容
    svgFilePath, // svg文件路径
    svgDir, // 存放svg目录
    outdir, // 图标文件输出目录
    // ourfileName, // 图标文件输出名称
    outfile, // 图标文件输出路径
    ignoreFunction, // 需排除的文件
    keepDirStructure = true, // 输出图标文件时是否保留svg原文件中的目录结构
    componentNamePrefix = 'bsi', // 组件名称前缀
    ts = false, // 是否为ts文件
    attrs = {} // 添加到图标组件中到自定义属性
  } = options;

  if (!svgFilePath && !svgContent && !svgDir) {
    console.log('[Tip] No svg to build!');
    return;
  }
  if (svgFilePath && !outfile && !outdir) {
    console.log('[Tip] Missing outdir or outfile!');
    return;
  }
  if (svgContent && !outfile) {
    console.log('[Tip] Missing outfile!');
    return;
  }
  console.log('start build icon---------------');

  let svgContentInfos = [];
  if (svgContent) {
    let outfileParsed = path.parse(outfile);
    let outfileNew = outfileParsed.ext ? outfile : outfile + (ts ? '.ts' : '.js');
    svgContentInfos = [{
      fileName: outfileParsed.base,
      outfile: outfileNew,
      svgContent
    }];
  } else if (svgFilePath) {
    if (fs.existsSync(svgFilePath)) {
      let fileName = '';
      let outfileNew;
      let dir;
      if (outfile) {
        let outfileParsed = path.parse(outfile);
        outfileNew = outfileParsed.ext ? outfile : outfile + (ts ? '.ts' : '.js');
        fileName = outfileParsed.name;
      } else {
        dir = outdir;
        fileName = path.parse(svgFilePath).name;
      }
      svgContentInfos = [{
        fileName,
        outfile: outfileNew,
        dir,
        svgContent: fs.readFileSync(svgFilePath, 'utf-8')
      }];
    } else {
      console.log(`[warning] ${svgFilePath} not exist`);
    }
  } else {
    if (!fs.existsSync(svgDir)) {
      console.log(`[warning] "${svgDir}" not exist!`);
      return;
    }
    let readSvg = function (svgPath) {
      let allow = true;
      if (typeof ignoreFunction == 'function') {
        allow = ignoreFunction(svgPath);
      }
      if (!allow) {
        return false;
      }
      return fs.readFileSync(svgPath, 'utf-8');
    };
    let getSvgContent = function (dir) {
      if (!fs.statSync(dir).isDirectory()) {
        if (path.parse(dir).ext === '.svg') {
          let svgContent = readSvg(dir);
          if (svgContent !== false) {
            svgContentInfos.push({
              dir: path.parse(dir).dir,
              fileName: dir,
              svgContent
            });
          }
        }
        return;
      }
      fs.readdirSync(dir).forEach(dirSubFileName => {
        let filePath = path.resolve(dir, dirSubFileName);
        if (!fs.statSync(filePath).isDirectory() && path.parse(dirSubFileName).ext === '.svg') {
          let svgContent = readSvg(filePath);
          if (svgContent !== false) {
            svgContentInfos.push({
              dir: path.parse(filePath).dir,
              fileName: dirSubFileName,
              svgContent
            });
          }
          return;
        }
        getSvgContent(filePath);
      });
    };
    getSvgContent(svgDir);
  }
  svgContentInfos.forEach(svgInfoItem => {
    let svgName = path.parse(svgInfoItem.fileName).name;
    let iconName = componentNamePrefix + svgName;
    // 将名称转为单词首字母大写格式
    iconName = ('-' + iconName).replace(/-(\w{1})/g, function ($matched, $1) {
      return $1.toUpperCase();
    });
    let svgVDom = html2vDom(svgInfoItem.svgContent)[0];
    // console.log('svgVDom', svgVDom);
    let svgChildrenVDom = svgVDom.children.filter(vdomChild => {
      delete vdomChild.status;
      return vdomChild.nodeType == 1 || (vdomChild.nodeType == 3 && vdomChild.text != ' ');
    });
    let data = {
      iconDisplayName: iconName,
      svgName: svgName,
      isFilled: svgName.endsWith('fill'),
      viewBox: svgVDom.attrs.viewBox,
      svgChildrenVDom: JSON.stringify(svgChildrenVDom),
      attrs: JSON.stringify(attrs)
    };
    let template = svgInfoItem.outfile ? (svgInfoItem.outfile.endsWith('.js') ? vueFileTemplateJS : vueFileTemplateJS): (ts ? vueFileTemplateTS : vueFileTemplateJS);
    let iconContent = template.trim().replace(/<%= (\w+) %>/g, function ($macthed, $1) {
      return data[$1];
    });
    // console.log(svgInfoItem);
    if (svgInfoItem.outfile) {
      writeFileSync(svgInfoItem.outfile, iconContent);
    } else {
      let outDir = keepDirStructure ? svgInfoItem.dir.replace(svgDir, outdir) : outdir;
      let fileName = svgName + (ts ? '.ts' : '.js');
      // console.log('outDir', outDir);
      // console.log('build (', svgInfoItem.dir + '/' + fileName + ')', path.parse(svgInfoItem.dir).dir);
      writeFileSync(outDir + '/' + fileName, iconContent);
    }
  });
  console.log('icon build completed！---------------');
};

/* generateIcons({
  // svgContent, // svg内容
  svgFilePath: path.resolve(__dirname, '../svg/filled/0-circle-fill.svg'), // svg文件路径
  // svgDir, // 存放svg目录
  // outdir, // 图标文件输出目录
  // ourfileName, // 图标文件输出名称
  outfile: path.resolve(__dirname, '../custom-icons/0-circle-fill.js'), // 图标文件输出路径
  // ignoreFunction, // 需排除的文件
  keepDirStructure: false, // 输出图标文件时是否保留svg原文件中的目录结构
  componentNamePrefix: 'my', // 组件名称前缀
  // ts = false, // 是否为ts文件
  attrs: { // 添加到图标组件中到自定义属性
    className: 'my-custom-icon'
  }
}); */

/* generateIcons({
  // svgContent, // svg内容
  svgFilePath: path.resolve(__dirname, '../svg/filled/1-circle-fill.svg'), // svg文件路径
  // svgDir, // 存放svg目录
  outdir: path.resolve(__dirname, '../custom-icons'), // 图标文件输出目录
  // ourfileName, // 图标文件输出名称
  // outfile: path.resolve(__dirname, '../custom-icons/0-circle-fill.js'), // 图标文件输出路径
  // ignoreFunction, // 需排除的文件
  keepDirStructure: false, // 输出图标文件时是否保留svg原文件中的目录结构
  componentNamePrefix: 'my', // 组件名称前缀
  ts: true, // 是否为ts文件
  attrs: { // 添加到图标组件中到自定义属性
    className: 'my-custom-icon'
  }
}); */

generateIcons({
  // svgContent, // svg内容
  // svgFilePath: path.resolve(__dirname, '../svg/filled/1-circle-fill.svg'), // svg文件路径
  svgDir: path.resolve(__dirname, '../svg'), // 存放svg目录
  outdir: path.resolve(__dirname, '../custom-icons'), // 图标文件输出目录
  // ourfileName, // 图标文件输出名称
  // outfile: path.resolve(__dirname, '../custom-icons/0-circle-fill.js'), // 图标文件输出路径
  // ignoreFunction, // 需排除的文件
  keepDirStructure: true, // 输出图标文件时是否保留svg原文件中的目录结构
  componentNamePrefix: 'my', // 组件名称前缀
  ts: true, // 是否为ts文件
  attrs: { // 添加到图标组件中到自定义属性
    className: 'my-custom-icon'
  }
});

// console.log(path.parse('../svg/filled/0-circle-fill.svg'));
module.exports = generateIcons;

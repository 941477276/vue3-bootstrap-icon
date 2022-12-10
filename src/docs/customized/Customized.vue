<template>
<div class="customized-page">
  <div class="container-xxl">
    <div class="lead customized-icon-lead">
      <!--<h4><code>vue3-bootstrap-icon</code>提供了2种方式来实现自定义图标：</h4>-->
      <i18n-t keypath="customized.customizedIconLead" tag="h4">
        <template #bsIconVue><code>vue3-bootstrap-icon</code></template>
      </i18n-t>
      <ol>
        <!--<li>使用vue3-bootstrap-icon提供的<code>BsIcon</code>组件</li>-->
        <i18n-t keypath="customized.custmizeWay1">
          <template #bsicon><code>BsIcon</code></template>
        </i18n-t>
        <li><!--使用vue3-bootstrap-icon提供的生成工具-->{{$t('customized.custmizeWay2')}}</li>
      </ol>
    </div>

    <div class="usage-guide">
      <!--<h2>使用<code>BsIcon</code>组件创建自定义图标</h2>-->
      <i18n-t keypath="customized.usageGuide1Title" tag="h2"></i18n-t>
<pre class="language-javascript" ref="codeExample1Ref">
import {
  createVNode
} from 'vue';
// <!--导入BsIcon-->{{$t('customized.importBsIcon')}}
import {
  BsIcon
} from 'vue3-bootstrap-icon';
// <!--导入html字符串转虚拟dom工具函数-->{{$t('customized.importHtml2vDom')}}
import html2vDom from 'vue3-bootstrap-icon/html2vDom';

// <!--定义svg内容-->{{$t('customized.defineSvgContent')}}
const svg = `&lt;svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
  &lt;path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"/&gt;
  &lt;path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"/&gt;
&lt;/svg&gt;`;

export function TestIcon4CircleFill () {
  // <!--将svg字符串转换成虚拟dom-->{{$t('customized.svgHtml2VDom')}}
  const svgVDom = html2vDom(svg)[0];
  return createVNode(BsIcon, {
    iconName: 'test-icon-4-circle-fill', // <!--图标名称-->{{$t('customized.iconName')}}
    isFilled: true, // <!--图标是否为填充类型的-->{{$t('customized.isFilledIcon')}}
    viewBox: svgVDom.attrs.viewBox, // svg的viewBox属性
    svgChildrenVDom: svgVDom.children, // <!--svg的子内容-->{{$t('customized.svgChildrenVDom')}}
    // 'class': 'test-icon'
  });
}
</pre>
      <h2><!--使用vue3-bootstrap-icon生成工具生成自定义图标-->{{$t('customized.usageGuide2Title')}}</h2>
      <!--假设我们的项目目录结构是这样的：-->{{$t('customized.usageGuide2Title')}}
<pre class="language-markup">
  a-test-project
    + node_modules
    + public
    - src
      + components
      - svgs
        star.svg
        mobile-phone.svg
        1-circle-outlined.svg
      App.vue
      main.js
</pre>
    <!--<p>那么我们需要在项目根目录下创建一个<code>generate-icon.js</code>（js文件名称随意取一个）</p>-->
    <i18n-t keypath="customized.createGenerateIconJsFile" tag="p">
      <template #jsFileName><code>generate-icon.js</code></template>
    </i18n-t>
<pre ref="codeExample2Ref" class="language-javascript code-example2">
const path = require('path');
  // <!--导入构建工具-->{{$t('customized.importGenerateTool')}}
const generateIcons = require('vue3-bootstrap-icon/generate');

/*  // <!--单个构建-->{{$t('customized.generateSingle')}}
generateIcons({
  svgFilePath: path.resolve(__dirname, './src/svg/filled/1-circle-outlined.svg'), // <!--svg文件路径-->{{$t('customized.svgFilePath')}}
  outfile: path.resolve(__dirname, './src/components/icons/1-circle-outlined.js'), // <!--图标文件输出路径-->{{$t('customized.outfile')}}
  // outdir: path.resolve(__dirname, './src/components/icons'), // <!--图标文件输出目录，outdir与outfile任选一-->{{$t('customized.outdir1')}}
  componentNamePrefix: 'my', // <!--组件名称前缀-->{{$t('customized.componentNamePrefix')}}
  // ts: true, // <!--是否为ts文件-->{{$t('customized.isTs')}}
  attrs: { // <!--添加到图标组件中到自定义属性-->{{$t('customized.customAttr')}}
    'class': 'my-custom-icon'
  }
}); */

// <!--批量构建-->{{$t('customized.batchGenerate')}}
generateIcons({
  svgDir: path.resolve(__dirname, './src/svgs'), // <!--存放svg目录-->{{$t('customized.svgDir')}}
  outdir: path.resolve(__dirname, './src/components/icons'), // <!--图标文件输出目录-->{{$t('customized.outdir2')}}
  ignoreFunction: [], // <!--需排除的文件名称-->{{$t('customized.ignoreFunction')}}
  keepDirStructure: true, // <!--输出图标文件时是否保留svg原文件中的目录结构-->{{$t('customized.keepDirStructure')}}
  componentNamePrefix: 'my', // <!--组件名称前缀-->{{$t('customized.componentNamePrefix')}}
  // ts: true, // <!--是否为ts文件-->{{$t('customized.isTs')}}
  attrs: { // <!--添加到图标组件中到自定义属性-->{{$t('customized.customAttr')}}
    'class': 'my-custom-icon'
  }
});
</pre>
      <!--<p>接下拉就可以在命令行工具里运行命令：<code>node ./generate-icon.js</code>，
        命令运行完成后将会在<code>/src/components/icons</code>目录下生成3个 <code>.js</code> 结尾的组件文件，每个组件都有默认导出及命名导出，
        命名导出都名称就是组件文件名称：</p>-->
      <i18n-t keypath="customized.runCommand" tag="p">
        <template #command>
          <code>node ./generate-icon.js</code>
        </template>
        <template #iconsDir>
          <code>/src/components/icons</code>
        </template>
        <template #fileExt><code>.js</code></template>
      </i18n-t>
      <pre class="language-markup">
  a-test-project
    + node_modules
    + public
    - src
      - components
        - icons
          MyStar.js
          MyMobilePhone.js
          My1CircleOutlined.js
      + svgs
      App.vue
      main.js
</pre>
      <p><!--接下来你可以这样导入组件：-->{{$t('customized.useComponent')}}</p>
      <pre ref="codeExample3Ref" class="language-javascript">
        import MyStar from './components/icons/MyStar.js';
        // import { MyStar } from './components/icons/MyStar.js';
        import { MyMobilePhone } from './components/icons/MyMobilePhone.js';
      </pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  onUnmounted,
  inject
} from 'vue';
import prism from 'prismjs';
// import "prismjs/themes/prism-coy.css";
import 'prism-themes/themes/prism-atom-dark.css';

export default defineComponent({
  name: 'Customized',
  setup () {
    let appInjection: any = inject('appInjection');
    let codeExample1Ref = ref();
    let codeExample2Ref = ref();
    let codeExample3Ref = ref();

    let onLangChange = function () {
      prism.highlightElement(codeExample1Ref.value);
      prism.highlightElement(codeExample2Ref.value);
      prism.highlightElement(codeExample3Ref.value);
    };
    appInjection && appInjection.addLangChangeEvent(onLangChange);
    onMounted(function () {
      /* prism.highlightElement(codeExample1Ref.value);
      prism.highlightElement(codeExample2Ref.value);
      prism.highlightElement(codeExample3Ref.value); */
      onLangChange();
    });
    onUnmounted(function () {
      appInjection && appInjection.removeLangChangeEvent(onLangChange);
    });

    return {
      codeExample1Ref,
      codeExample2Ref,
      codeExample3Ref
    };
  }
});
</script>

<style lang="scss" scoped>
@import "customized";
</style>

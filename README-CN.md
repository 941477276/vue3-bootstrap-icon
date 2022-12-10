# Bootstrap Icon Vue
基于`vue3`的Bootstrap图标的免费、开源的图标组件库，所有图标均来自 [Bootstrap官方图标库](https://github.com/twbs/icons)

## 安装 
**npm**
`npm install vue3-bootstrap-icon -S`

**yarn**
`yarn add vue3-bootstrap-icon --save`

## 使用
```
<template>
  <BsiBootstrap />
  <BsiGithub />
</template>

<script setup>
  /* // 不推荐使用这种方式导入，因为库中有上千个图标组件，即有上千模块，在开发的时候webpack会把这
  // 上千个模块都加载进去，这会导致webpack热更新速度变慢
  // import { BsiBootstrap } from 'vue3-bootstrap-icon'; */
  import { BsiBootstrap } from 'vue3-bootstrap-icon/icons/BsiBootstrap';
  // 图标组件名称即是组件文件名称
  import { BsiGithub } from 'vue3-bootstrap-icon/icons/BsiGithub';
</script>
```
[文档与示例](https://941477276.github.io/bootstrap-icon-vue/dist/)

## 组件props

| 参数 | 说明                                                | 类型 | 默认值 | 版本    |
|:----|:--------------------------------------------------|:----|:-------|:------|
|width| 图标宽度                                              |stringnumber|1em| -- |
|height| 图标高度                                              |stringnumber|1em|--|
|fill| 图标填充颜色                                            |string|currentColor|--|
|viewBox| svg的viewBox属性，默认从svg中读取，若读取不到则使用"0 0 1024 1024"   |string|--|
|ariaHidden| ariaHidden属性值                                     |boolean|true|--|
|focusable| focusable属性值                                      |boolean|false|--|

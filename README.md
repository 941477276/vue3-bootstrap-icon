# Bootstrap Icon Vue
A free and open-source icon component library for Bootstrap icons based on `vue3`, all icons are from [Bootstrap official icon library](https://github.com/twbs/icons)

[中文文档](./README-CN.md)
## Install 
**npm**
`npm install vue3-bootstrap-icon -S`

**yarn**
`yarn add vue3-bootstrap-icon --save`

## Usage
```
<template>
  <BsiBootstrap />
  <BsiGithub />
</template>

<script setup>
  /* // It is not recommended to use this method to import, because there are thousands of icon components in the library, that is, thousands of modules, 
    // and webpack will load these thousands of modules during development, which will slow down the hot update speed of webpack
  // import { BsiBootstrap } from 'vue3-bootstrap-icon'; */
  import { BsiBootstrap } from 'vue3-bootstrap-icon/icons/BsiBootstrap';
  // The icon component name is the component file name
  import { BsiGithub } from 'vue3-bootstrap-icon/icons/BsiGithub';
</script>
```
[Documentation and Examples](https://941477276.github.io/bootstrap-icon-vue/dist/)

## Component props

| Parameter  | Illustrate                                      | Type         | Default value | Version |
|:-----------|:------------------------------------------------|:-------------|:--------------|:--------|
| width      | icon width                                            | stringnumber | 1em           | --      |
| height     | icon height                                            | stringnumber | 1em           | --      |
| fill       | Icon fill color                                          | string       | currentColor  | --      |
| viewBox    | The viewBox attribute of svg, read from svg by default, if it cannot be read, use "0 0 1024 1024" | string       | --            |
| ariaHidden | ariaHidden attribute value                                   | boolean      | true          | --      |
| focusable  | focusable attribute value                                    | boolean      | false         | --      |

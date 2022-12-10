/**
 * 设置esbuild构建时模块是否为external的插件
 * @param filterRegexp 模块过滤正则，可选
 * @param callback 回调函数，esbuild解析到该模块时会执行该函数，如果该函数返回true那么该模块会被设置为external
 * @returns {{name: string, setup(*): void}}
 */
function esbuildSetExternalPlugin (filterRegexp, callback) {
  let filter = filterRegexp instanceof RegExp ? filterRegexp : /./;
  callback = typeof callback == 'function' ? callback : (typeof filterRegexp == 'function' ? filterRegexp : () => false);
  return {
    name: 'my-esbuild-plugin',
    setup (build) {
      // onResolve钩子是一个路径解析的钩子，是esbuild去解析路径的时候触发的，也就是你执行import ... from ...的时候会调用onResolve钩子
      build.onResolve({ filter: filter }, function (args) {
        // console.log('args', args);
        // let modulePath = args.path;
        // let external = modulePath.includes('/components/');
        let external = !!callback(args.path, args);
        return {
          // 错误信息
          // errors: [],
          // 是否需要 external (如果该模块为external，则esbuild构建时不会去加载该模块，而是保留原有的import xxx from 'yyy'代码)
          external
          // namespace 标识
          // namespace: 'env-ns';
          // 模块路径
          // path: args.path,
          // 额外绑定的插件数据
          // pluginData: null,
          // 插件名称
          // pluginName: 'xxx',
          // 设置为 false，如果模块没有被用到，模块代码将会在产物中会删除。否则不会这么做
          // sideEffects: false,
          // 添加一些路径后缀，如`?xxx`
          // suffix: '?xxx',
          // 警告信息
          // warnings: [],
          // 仅仅在 Esbuild 开启 watch 模式下生效
          // 告诉 Esbuild 需要额外监听哪些文件/目录的变化
          // watchDirs: [],
          // watchFiles: []
        };
      });
    }
  };
}

module.exports = esbuildSetExternalPlugin;

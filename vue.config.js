module.exports = {
  // 基本路径
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'production' ? 'production-sub-path' : '/',
  // 构建时输出目录
  outputDir: 'dist',
  // 存放静态资源目录
  assetsDir: 'static',
  // html的输出路径
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 多页面配置
  pages: {
    index: {
      // page的入口文件
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'portfolio',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // subpage: 'src/subpage/main.js'
  },
  // 保存时用eslint检查，设为error时，检查出错误会使编译失败
  lintOnSave: true,
  runtimeCompiler: false,
  // babel-loader 会默认忽略所有 node_modules 中的文件,想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  crossorigin: '',
  // 在生成的 HTML 中的<link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)，构建后的文件是部署在 CDN 上的,启用该选项可以提供额外的安全性
  integrity: false,

  // Webpack相关配置
  // 值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西,也可以返回一个被克隆或合并过的配置版本
  configureWebpack: () => {}, // (Object | Function),
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: () => {},

  // css相关配置
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // eslint-disable-next-line quotes
        prependData: `@import "@/assets/style/index.scss";`
      }
    },
    requireModuleExtension: false
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     // target: 'https://iyxy.top',//开发网关
    //     target: 'http://app.rmsdmedia.com',
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    before: app => { }
    // }
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  pwa: {},
  pluginOptions: { }
}

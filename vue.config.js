module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',

    compress: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/project-repository/',
    // publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
    disableHostCheck: true,
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.compilerOptions.preserveWhitespace = true;
  //       return options;
  //     });
  // },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
}

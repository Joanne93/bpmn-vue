const path = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: {
    module: {
      rules: [
          {
            test: /\.xml$/,  // 要加载的文件后缀，无引号
            use: [              // 使用的加载器
                'xml-loader'
            ]
          }
      ]
    },
    resolve: {
      alias: {
        '@static': path.resolve(__dirname, '../static'),
        '@root': path.resolve(__dirname, '../'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '_v': path.resolve(__dirname, './src/views'),
        '_c': path.resolve(__dirname, './src/components'),
      },
      extensions: ['.js', '.vue']
    }
  }
}

// const path = require('path')

// const resolve = dir => path.join(__dirname, dir)

// module.exports = {
//     chainWebpack: config => {
//         config.resolve.alias
//             .set('@', resolve('src'))
//             .set('@assets', resolve('src/assets'))
//             .end()
//         config.module
//             .rule('raw-loader')
//             .test(/.(bpmn|xml)$/)
//             .use('raw-loader')
//             .loader('raw-loader')
//             // .options({
//             //     esModule: true
//             // })
//             .end()
//     }
// }
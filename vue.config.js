// vue.config.js
module.exports = {
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error' 
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8085,
      https: false,
      hotOnly: false,
      proxy: {
        // dce url
        '/webapi': {
          target: 'http://192.168.1.39:17001',
          ws: true,
          changOrigin: true, // 接口跨域
          pathRewrite: {
            '^/webapi': '/webapi' //路径重写 ''
          }
        },
  
        // deploy url
        '/api': {
          target: 'http://192.168.1.39:17001',
          ws: true,
          changOrigin: true, // 接口跨域
          pathRewrite: {
            '^/api': '/api' //路径重写'/api
          }
        },
      },
      before: app => {
          console.log('app:::', app);
      }
    }
  }
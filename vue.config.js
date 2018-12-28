// const goods = require("./data/goods.json")
module.exports = {
  baseUrl: '/', // 根路径
  outputDir: 'dist', // 打包的目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint,在保存时校验格式,有效值: true || false || 'error'
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: 'localhost', // 真机测试'0.0.0.0', 本机'127.0.0.0'
    port: 8080, // 服务端口
    https: false, // 如果true的话,会出现安全警告
    hotOnly: false, // 热更新
    proxy: null,
    // 配置跨域,设置代理
    // '/api': {
    //   target: 'http://47.107.167.164:8080', // 跨域地址
    //   ws: true, // 是否跨域
    //   changOrigin: true,
    //   pathRewrite: { // 重命名路径名
    //     '^/api': 'api'
    //   }
    // }
    before: app => {}
    // before: app => { // 加载相应的 json 数据
    //   http://loaclhost:8080/api/goods 打开这个网址就可以看到goods数据
    //   app.get('/api/goods', (req, res) => {
    //     res.json(goods)
    //   })
    // }
  }
}

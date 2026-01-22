// vue.config.js
const path = require('path')

module.exports = {
    // transpileDependencies 应该是数组
    transpileDependencies: [],

    // 开发服务器配置
    devServer: {
        port: 8080,        // 端口号
        open: true,        // 自动打开浏览器
        hot: true,         // 热更新
        host: 'localhost'  // 主机名
    },

    // 构建配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    },

    // 生产环境配置
    productionSourceMap: false,  // 关闭 source map 以减小包体积

    // CSS 配置
    css: {
        extract: false     // 开发环境下不提取 CSS
    }
}
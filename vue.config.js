module.exports = {
    lintOnSave: false, //相当于关闭eslint-loader严格模式
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://1.116.64.64:5004/api2',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },

            }

        }
    }
}
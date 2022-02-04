const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'ec2-52-78-116-115.ap-northeast-2.compute.amazonaws.com:8080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
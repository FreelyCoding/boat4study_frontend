module.exports = {
    // 配置路径别名
    configureWebpack: {
        devServer: {
			proxy: {
			  '/prefix/api/user/list': {
				target: 'http://123.249.3.32',
				pathRewrite: {
				  '^/prefix': ''
				}
			  }
			},
					
            // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
            disableHostCheck: true
        }
    }
    // productionSourceMap: false,
}

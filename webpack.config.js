
module exports = {
	module: {
		//这个节点，用于配置所有 第三方加载器
		rules: [
			{
				test: /\.less$/, // 配置处理 less 文件第三方 loader 规则
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	}
}

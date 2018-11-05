const path=require('path');
// 导入在内存中生成的html页面的插件
// 只要是插件 都一定要放到plugins节点
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
// 这个配置文件其实就是一个js文件 通过node中的模块操作向外暴露了一个配置对象
module.exports={
	// 在配置文件中要手动指定入口文件和出口文件
	entry:path.join(__dirname,'./src/main.js'),//表示要使用webpack要打包哪个文件
	//输出文件的相关配置
	output:
	{
		path:path.join(__dirname,'./dist'),//指定 打包好的文件 输出到哪个目录中去
		filename:'bundle.js',//这是指定输出的文件的名称
	},
	plugins:
	[
	//创建一个在内存中生成hmtl页面的插件
		new htmlWebpackPlugin(
		{
			// 指定模板页面 将来会根据指定的页面路径生成内存中的页面
			template: path.join(__dirname,'./src/index.html'),
			//指定生成的页面的名称
			filename:'index.html',
		}),
		new VueLoaderPlugin(),
	],
	module:
	{
		// 这个节点用于配置所有的第三方模块加载器
		rules:
		[
			//所有第三方模块的匹配规则 
			// 正则表达式 匹配以.css结尾的文件 让style-loder和css-loder处理
			{test:/\.css$/, use:['style-loader','css-loader']},
			//这是配置 .less文件的第三方loader规则
			{test:/\.less$/, use:['style-loader','css-loader','less-loader']},
			// 配置处理.sass第三方loader规则
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			//处理图片路径的 loader 
			//limit给定的值，是图片的大小，单位时 byte字节 如果我们引用的图片大于或等于给定的limit值 
			// 则不会被转为 base64格式的字符串 如果图片小于给定的limit值 则会被转成base64格式字符串
			//&后面是图片名称为原来本身的图片 -前面代表为前 8 位哈希值
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=155391&name=[hash:8]-[name].[ext]'},
			//处理字体文件
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			//处理 es6新语法
			//在配置babel的loader规则时候 必须把node_modules目录 通过exclude选项排除掉
			// 原因有2个： 1.如果不排 node_modules 则babel会把modules目录中所有的第三方js文件都打包编译，消耗cpu资源和时间
			//            2.哪怕最终 babel把node_modules中的 js转换完毕了 但是项目也无法正常运行
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			//处理.vue文件的loader
			{test:/\.vue$/,use:'vue-loader'},
		],
	},
};

//当我们在控制台 输入webpack命令执行的时候 webpack做了一下几步
// 1.webpack发现我们并没有通过命令的形式指定入口和出口
// 2.webpack就会向根目录查找webpack.config.js的配置文件
// 3.当找到配置文件后 webpack会去解析执行这个配置文件 当解析执行完配置文件后 得到了配置文件汇总导出的配置对象
// 4 当webpack拿到配置对象后 就拿到了配置对象中指定的入口和出口 然后进行打包构建
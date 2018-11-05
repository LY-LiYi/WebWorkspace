// 这个mian.js是我们项目的js入口文件
// 1 导入jquery 
// import ***  from ***是es6中导入模块的方式
// 由于es6太高级 浏览器解析不了 所有 这一行会报错
import $ from 'jquery';
// const $=require('jquery');

// 使用import语法导入css样式表
import './css/index.css';
import './css/index.less';
import './css/index.scss';
// 注意 如果要通过路径的形式 去引入node_modules中相关的文件 可以直接省略路径前面的node_modules这一路径 直接写包的名称 然后后面跟上具体的文件路径
import 'bootstrap/dist/css/bootstrap.css';
// 注意 webpack默认只能打包js文件 无法处理其他非js文件
// 如果要处理非js文件需要手动安装一些合适的第三方loader加载器
// 1.如果想要打包处理css文件 需要安装 npm i style-loader css-loader -D

//class关键字，是es6中提供的新语法 是用来实现 es6 中面向对象编程的方式
class Person
{
	static info={name:'zs',age:20};
}

console.log(Person.info);

$(function()
	{
		$('li:odd').css('backgroundColor','red');
		$('li:even').css('backgroundColor','green');
	});
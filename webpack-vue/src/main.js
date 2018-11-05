//入口文件
//如何在webpack构建项目中使用 Vue进行开发
// 注意 在webpack中 使用import Vue from 'vue'导入的vue构造函数功能不完整 
// 只提供了runtime-only的方式 并没有提供网页中的那种方式
// import Vue from 'vue'
// var Vue=require('vue');

import Vue from '../node_modules/vue/dist/vue.js';


// var login={template:'<h1>这是login组件 使用网页中的形式创建出来的组件</h1>'}

//导入login组件
import login from './login.vue'

var vm=new Vue(
	{
		el:'#app',
		data:
		{
			msg:'123',
		},
		methods:{},
		// components:
		// {
		// 	login,
		// },
		render:function(createElements)
		{
			return createElements(login);
		}
	});
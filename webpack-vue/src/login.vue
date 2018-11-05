<template>
	<div>
		<h1>这是登录组件 使用vue定义的组件----{{msg}}</h1>
	</div>
</template>

<script type="text/javascript">
	export default
	{
		// 组件中的data必须是function
		data:function()
		{
			return {msg:'1299993'};
		},
		methods:
		{
			show:function()
			{
				console.log('调用了login.vue中的show方法');
			}
		},
		
	};
</script>

<style type="">
	
</style>
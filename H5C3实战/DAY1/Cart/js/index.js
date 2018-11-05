$(function()
	{
		// 初始化fullpage组件
		// 1 设置每一个屏幕的背景颜色
		// 2 设置屏幕的对齐方式 默认为垂直居中的 改成顶部对齐
		// 3 设置指示器
		$(".container").fullpage(
			{
				// 配置每一屏的颜色
				sectionsColor: ['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04579','#84d9ed','#8ac060','#4560e6'],
				//对齐方式
				verticalCentered: false, 
				// 右侧指示器
				navigation: true,
			});
	});
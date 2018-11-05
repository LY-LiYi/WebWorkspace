$(function()
	{
		//nav栏直播鼠标进入和离开事件
		$(".nav-left-live").on("mouseover",function()
			{
				$(".live-box").fadeIn("norma",function()
				{
					$(this).css('display', 'block');
				});
			}).on("mouseleave",function(){
				$(".live-box").fadeOut("norma",function()
				{
					$(this).css('display', 'none');
				});
			});
		//nav栏下载APP鼠标进入和离开事件
		$(".nav-left-dowload").on("mouseover",function()
			{
				$(".app-orcode-box").fadeIn("slow",function()
				{
					$(this).css('display', 'block');
				});
			}).on("mouseleave",function(){
				$(".app-orcode-box").fadeOut("slow",function()
				{
					$(this).css('display', 'none');
				});
			});
		// 用户头像鼠标经过和离开事件
		$(".nav-right-item").on("mouseenter",function()
		{
			$(".nac-right-item-img").find("img").css({
				"width": '63px',
				"height": '63px',
				"margin-top":'18px',
				"margin-left":'0px',
			});
			$(".nav-right-item-list").fadeIn("slow",function()
				{
					$(this).css('display', 'block');
				});
			$(".nav-right-item a .big-vip").css({
				'display': 'inline-block',
			});
		}).on("mouseleave",function()
		{
			$(".nac-right-item-img").find("img").css({
				"width": '35px',
				"height": '35px',
				"margin-top":'3px',
				"margin-left":'12px',
			});
			$(".nav-right-item-list").fadeIn("slow",function()
				{
					$(this).css('display', 'none');
				});
			$(".nav-right-item a .big-vip").css({
				'display': 'none',
			});
		});


		$(".item-list-per").on("mouseenter",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-537px -407px",
				});
			}).on("mouseleave",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-472px -407px",
				});
			});
		$(".item-list-con").on("mouseenter",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-601px -1046px",
				});
			}).on("mouseleave",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-535px -1046px",
				});
			});
		$(".item-list-wal").on("mouseenter",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-535px -471px",
				});
			}).on("mouseleave",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-471px -471px",
				});
			});
		$(".item-list-live").on("mouseenter",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-536px -854px",
				});
			}).on("mouseleave",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-472px -854px",
				});
			});
		$(".item-list-ord").on("mouseenter",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-1px -14px",
				});
			}).on("mouseleave",function()
			{
				$(this).find('i').css(
				{
					"background-position": "-1px 3px",
				});
			});
		//nav栏消息鼠标进入和离开事件
		$(".nav-right-message").on("mouseenter",function()
			{
				$(".nav-right-message-list").fadeIn("norma",function()
					{
						$(this).css('display', 'block');
				});
			}).on("mouseleave",function(){
				$(".nav-right-message-list").fadeOut("norma",function()
				{
					$(this).css('display', 'none');
				});
			});
		//nav栏投稿鼠标进入和离开事件
		$(".up").on("mouseenter",function()
			{
				$(".up-nav").fadeIn("slow",function()
					{
						$(this).css('display', 'block');
					});
			}).on("mouseleave",function(){
				$(".up-nav").fadeOut("slow",function()
				{
					$(this).css('display', 'none');
				});
			});
		$(".up-nav li").on("mouseenter",function()
		{
			$(this).find('i').css(
			{
				'margin-top': '13px'
			});
			$(this).find('span').css(
			{
				'padding-top': '5px'
			});
		}).on("mouseleave",function()
		{
			$(this).find('i').css(
			{
				'margin-top': '15px'
			});
			$(this).find('span').css(
			{
				'padding-top': '3px'
			});
		});
		//背景页三点鼠标进入和离开事件
		$(".h-user-li").on("mouseenter",function()
			{
				$(".h-user-more-list").fadeIn("norma",function()
					{
						$(this).css('display', 'block');
				});
			});
		$('.h-user-more-list').on("mouseleave",function(){
				$(".h-user-more-list").fadeOut("norma",function()
				{
					$(this).css('display', 'none');
				});
			});
		//关注数进过
		$(".navigator-right .navigator-right-a").on("mouseenter",function()
		{
			$(this).find('p').css(
			{
				'color': '#00a1d6'
			});
		}).on("mouseleave",function()
		{
			$(this).find('.n-p').css(
			{
				'color': '#99a2aa'
			})
			$(this).find('.n-gz').css(
			{
				'color': '#222'
			});
			$(this).find('.n-fs').css(
			{
				'color': '#222'
			});
		});
		// 关注栏定位
		$(window).scroll(function()
		{
			var navheight=parseInt($('.nav-mask').css("height"));
			var wrapperheight=parseInt($(".wrapper").css("height"));
			var navigatorheight=parseInt($(".navigator").css("height"));
			var scrollHeight=navheight+wrapperheight+navigatorheight;
			console.log(navheight);
			if($(window).scrollTop()>=scrollHeight)
			{
				$(".nav-ff").css(
				{
					"position": 'fixed',
					"top":"0px",
					"display":'block',
				});
			};
			if($(window).scrollTop()<scrollHeight)
			{
				$(".nav-ff").css(
				{
					"position": 'relative',
					"z-index":'999',
					"display":'none',
				});
			}
		})
	});
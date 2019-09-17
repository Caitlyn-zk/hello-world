/*登录注册切换*/
$('.actions').click(function(){
		var denglu = $('.register-liset')
		var zhuce = $(".register_page")
		denglu.removeClass('show')
		zhuce.addClass('show')
		
	})
	$('.action').click(function(){
		var denglu = $('.register-liset')
		var zhuce = $(".register_page")
		zhuce.removeClass('show')
		denglu.addClass('show')
		
	})
		
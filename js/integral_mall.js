/*签到*/
$(".sign01").click(function(){
	
	if($(this).hasClass('disabled'))
	return;
	countDown(60)
	
})

function countDown(count) {
	$('.sign01').addClass('disabled')
	
	$('.sign01').html('已签到')
	
	//开启倒计时
	/*var timer = setInterval(function(){
		count--
		
		
	})*/
	
	
}

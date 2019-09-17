/*找回密码页面逻辑*/
var butt = $(".next-step-butt")
butt.click(function(){
	//var index = $(this).index()
	console.log(butt)
	//获取当前元素的祖先
	var parent = $(this).closest(".find-main-bar")
	console.log("afhksdfhwekfue")
	var index = parent.index()
	parent.eq(index).addClass("action")
	parent.eq(index).siblings().removeClass("action")
})


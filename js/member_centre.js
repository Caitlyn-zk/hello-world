/*会员中心逻辑代码*/
$(function(){
	$(".shopping_fingerpost span").click(function(){
		var curLi = $(this).parent().find(".liname")
		var restUl = $(this).parent().siblings(".shopping-bar");
		if(curLi.css("display") == "none") {
			curLi.slideDown();
			curLi.parent().find('b').text("1")
		}else {
			curLi.slideUp();
			curLi.parent().find('b').text("2")
			
		}
		restUl.find('.liname').slideUp();
		restUl.find("b").text(texs)
		
	})
})
/*切换*/
$(".liname").click(function(){
	$(this).addClass('on')
	$(this).siblings().removeClass("on")
	//获取当前元素下标
	var index = $(this).index()
	//找到当前元素的祖先
	var paren = $(this).parents('.member_centre')
	//find查找
	var ele = paren.find(".my-integral")
	ele.eq(index).addClass('show')
	ele.eq(index).siblings().removeClass('show')
	
})
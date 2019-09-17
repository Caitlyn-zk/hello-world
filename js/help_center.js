/*购物指南逻辑*/

$(function(options){
	$(".shopping_fingerpost span").click(function(){
		var curLi = $(this).parent().find(".liname")
		var restUl = $(this).parent().siblings(".shopping-bar");
		
		if(curLi.css("display") == "none") {
			curLi.slideDown();console.log("157485")
			curLi.parent().find('b').text('﹀');
		}else {
			curLi.slideUp();
			curLi.parent().find('b').text('〉')
		}
		restUl.find('.liname').slideUp();
		restUl.find('b').text("〉")
		
	})
})


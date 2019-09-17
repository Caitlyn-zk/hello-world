
//放大镜的封装
(function($){
	
	//封装
	//$.method == $.extend({})
	//$.fn.method == $.fn.extend({}) $.fn 看成obj
	//$().a = function(){}
	//和页面有依赖的用$.fn.method 和页面没有依赖的用$.method
	
	
	//放大镜 页面本身存在的图片 进行效果放大 $.fn.方法
	$.fn.jqzoom = function (options){
		
		//小图 页面本身存在的图片 smallImg  类名 samell-Img
		//区域块 小图上出现的小块 areaBlok  类名 zoom-attr
		//大区域块 限制显示图片的范围 bigBlock  类名 zoom-big
		//大图 小图放大的图片 bigImg 类名big-img
		
		var smallImg = null, areaBlock = null,
			bigBock = null, bigImg = null;
			
			$(this).mouseenter(function(){
				
				smallImg = $(this).find('.samell-Img')
				var smallSrc = smallImg.attr('src')
				
				var bigHtml = `<div class="zoom-big">
								<img class="big-img" src="${smallSrc}" />
							</div>`
				
				$(this).append('<div class="zoom-attr"></div>')
				
				$(this).append(bigHtml)
				
				var bigllSrc = $(this).find('.big-img')
				console.log(bigllSrc)
				
				
				
				areaBlock = $(this).find('.zoom-attr')
				bigBock = $(this).find('.zoom-big')
				bigImg = $(this).find('.big-img')
				
				//计算小区域块的高度
				var blockWidth = smallImg.width()/bigImg.width()*options.offwidth
				var blockHeight = smallImg.height()/bigImg.height()*options.offheight
				
				areaBlock.css({
					width:blockWidth,
					height:blockHeight
				})
				
				//设置大区域的宽高
				bigBock.css({
					width:options.offwidth,
					height:options.offheight
				})
				
				
			})
		$(this).mouseleave(function(){
			//2.移除放大盒子的时候滑块移除
			areaBlock.remove();
			bigBock.remove()
		})
		//3.在放大盒子移动的适合区域块的移动
		//区域块的位置为 鼠标距离页面的坐标 - 盒子距离页面的坐标
		$(this).mousemove(function(event){
			
			//鼠标距离页面的坐标
			var pagex = event.pageX
			var pagey = event.pageY
			
			//盒子距离页面的坐标
			var offsetx = $(this).offset().left
			var offsety = $(this).offset().top
			
			//小图的宽度高度
			var smallImgWidth = smallImg.width()
			var smallImgHeight = smallImg.height()
			
			
			//获取区域块的宽高
			var blockWidth = areaBlock.width()
			var blockHeight = areaBlock.height()
			
			//区域块的位置
			var areax = pagex - offsetx - blockWidth/2
			var areay = pagey - offsety - blockHeight/2
			
			areax = areax < 0 ? 0 : areax
			areay = areay <0 ? 0 :areay
			
			areax = areax > (smallImgWidth-blockWidth) ? (smallImgWidth - blockWidth) : areax
			areay = areay > (smallImgHeight - blockHeight) ? (smallImgHeight - blockHeight) : areay
			
			//计算小区域块的坐标
			areaBlock.css({
				left:areax,
				top:areay
			})
			
			//计算大图的位置
			var bigLeft = areax*bigImg.width()/ smallImgWidth
			var bigTop = areay*bigImg.height()/ smallImgHeight
			 
			bigImg.css({
				left:-bigLeft,
				top:-bigTop
			})
			
		})
		
		
	}
	
})(jQuery)

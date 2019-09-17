/*评论的逻辑*/
var endes = $(".endes")
var fabiao = $(".fabiao")

/*fabiao.click(function(){
	var parent = $(".back-evaluation").prevUntil("div");
	//$("div").siblings("pinlun")
	$("div").closest([".pinlun"]).css({
		display: "block"
	})
	$(".pinlun").prevUntil('div').css({
		display: "block"
		
	})
})*/
fabiao.click(function(){
	$("div").children(".pinlun").css({
		display: "block"
	})
})
endes.click(function(){
	var value = $("[name = content]").val()
		if(value) {
			var html = `<div class="appraise-user clearfix margin-20-t">
									<div class="float-l appraise-name">
										<img class="margin-10-b" src="imgs/goods (6).jpeg"/>
										<samp>用户名</samp>
									</div>
									<div class="appraise-user-one">
										<div class=" evaluate-time">
											<div class="evaluate-good">
												<samp>好评</samp>
												<span class="margin-10-l time">2019</span>
												<span>-</span>
												<span class="time">08</span>
												<span>-</span>
												<span class="time">12</span>
												<!--时-->
												<span class="margin-10-l">1</span>
												<span class="time">6</span>
												<span>:</span>
												<span class="time">1</span>
												<span class="time">0</span>
												<span class="time">:</span>
												<span class="time">4</span>
												<span class="time">4</span>
											</div>
										</div>
										<div class="evaluate-text margin-10-t">
											<span class="overflow lint-heght-18">
											${value}
											</span>
										</div>
										<!--店家发图-->
										<div class="img-goods margin-20-t">
										</div>
									</div>
									<!--店家回复-->
									
								</div>`
			$(html).prependTo($('.appraise-user-main'));
			$("[name=content]").val("")
			$('div').children(".pinlun").css({
				display: "none"
			})
		}
})
		
//税收的条件
console.log($(".rule"))

	$('.rule').click(function(){
		var bue = $(".rule-introduse")
		bue.toggleClass("show")
		//bue.addClass('.show')
	})

//切换好评差评类容
$(".buttm").click(function(){
	$(this).addClass('on')
	$(this).siblings().removeClass("on")
	//获取当前元素下标
	var index = $(this).index()
	//找到当前元素的祖先
	var paren = $(this).parents('.evaluate-appraise')
	//find查找
	var ele = paren.find(".appraise-user-main")
	ele.eq(index).addClass('on')
	ele.eq(index).siblings().removeClass('on')
})

//图左右
$(function(){
		var tLen = 0, 
				vNum = 1, 
				mNum = 1, 
				mTime = 500, 
				iShow = $(".particulars-goods-img"),
				iItems = $(".particulars-goods-img li"),
				mLen = (iItems.eq(0).width() )* mNum,
				cLen = (iItems.length - vNum) * (iItems.eq(0).width() + 10); 

		iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
		//下一张
		$(".next").on({
			click:function(){
					if(tLen < cLen){
						if((cLen - tLen) > mLen){
							iShow.animate({left:"-=" + mLen + "px"}, mTime);
							tLen += mLen;
							cLen -= 100
							console.log(cLen)
						}else{
							iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
							tLen += (cLen - tLen);
							
						}
						console.log(cLen)
					}
			}
		});
		//上一张
		$(".prev").on({
			click:function () {
				if(tLen > 0){
					if(tLen > mLen){
						iShow.animate({left: "+=" + mLen + "px"}, mTime);
						tLen -= mLen;
						cLen += 100
					}else{
						iShow.animate({left: "+=" + tLen + "px"}, mTime);
						tLen = 0;
					}
				}
			}
		})
	});




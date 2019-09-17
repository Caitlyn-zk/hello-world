/*左右点击事件*/


/*其他方法*/
/*待评价*/
$(function(){
		var tLen = 0, 
				vNum = 1, 
				mNum = 1, 
				mTime = 500, 
				iShow = $(".one_list"),
				iItems = $(".one_list .evaluate-imgs"),
				mLen = (iItems.eq(0).width() + 20)* mNum,
				cLen = (iItems.length - vNum) * (iItems.eq(0).width() + 20); 

		iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
		//下一张
		$(".next").on({
			click:function(){
					if(tLen < cLen){
						if((cLen - tLen) > mLen){
							iShow.animate({left:"-=" + mLen + "px"}, mTime);
							tLen += mLen;
							cLen -= 250
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
						cLen += 250
					}else{
						iShow.animate({left: "+=" + tLen + "px"}, mTime);
						tLen = 0;
					}
				}
			}
		})
	});

/*收藏*/
$(function(){
		var tLen = 0, 
				vNum = 1, 
				mNum = 1, 
				mTime = 500, 
				iShow = $(".tow_list"),
				iItems = $(".tow_list .evaluate-imgs"),
				mLen = (iItems.eq(0).width() + 20)* mNum,
				cLen = (iItems.length - vNum) * (iItems.eq(0).width() + 20); 

		iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
		//下一张
		$(".next").on({
			click:function(){
					if(tLen < cLen){
						if((cLen - tLen) > mLen){
							iShow.animate({left:"-=" + mLen + "px"}, mTime);
							tLen += mLen;
							cLen -= 250
							console.log(cLen)
						}else{
							iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
							tLen += (cLen - tLen);
							console.log(cLen+"q")
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
						cLen += 250
					}else{
						iShow.animate({left: "+=" + tLen + "px"}, mTime);
						tLen = 0;
					}
				}
			}
		})
	});


/*推荐*/
$(function(){
		var tLen = 0, 
				vNum = 1, 
				mNum = 1, 
				mTime = 500, 
				iShow = $(".three_list"),
				iItems = $(".three_list .evaluate-imgs"),
				mLen = (iItems.eq(0).width() + 20)* mNum,
				cLen = (iItems.length - vNum) * (iItems.eq(0).width() + 20); 

		iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
		//下一张
		$(".next").on({
			click:function(){
					if(tLen < cLen){
						if((cLen - tLen) > mLen){
							iShow.animate({left:"-=" + mLen + "px"}, mTime);
							tLen += mLen;
							cLen -= 250
							console.log(cLen)
						}else{
							iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
							tLen += (cLen - tLen);
							console.log(cLen+"q")
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
						cLen += 250
					}else{
						iShow.animate({left: "+=" + tLen + "px"}, mTime);
						tLen = 0;
					}
				}
			}
		})
	});
/*我的足迹*/
$(function(){
		var tLen = 0, 
				vNum = 1, 
				mNum = 1, 
				mTime = 500, 
				iShow = $(".four_list"),
				iItems = $(".four_list .evaluate-imgs"),
				mLen = (iItems.eq(0).width() + 20)* mNum,
				cLen = (iItems.length - vNum) * (iItems.eq(0).width() + 20); 

		iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
		//下一张
		$(".next").on({
			click:function(){
					if(tLen < cLen){
						if((cLen - tLen) > mLen){
							iShow.animate({left:"-=" + mLen + "px"}, mTime);
							tLen += mLen;
							cLen -= 250
							console.log(cLen)
						}else{
							iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
							tLen += (cLen - tLen);
							console.log(cLen+"q")
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
						cLen += 250
					}else{
						iShow.animate({left: "+=" + tLen + "px"}, mTime);
						tLen = 0;
					}
				}
			}
		})
	});

/*页面11的js逻辑*/

			//封装函数、图片显示的部分、传入获取到的div，和被点击的序号
			/*function toggle(eles, active) {
				for(var i = eles.length; i--;) {
					eles[i].className = "container"; //先让所有div隐藏
				}
				eles[active].className = "container active";//再让被点击的序号对应的div 显示
			}
			//获取按键和div
			var aBtn = document.getElementsByClassName("btn");
			var aIem = document.getElementsByClassName("container");
			var prev = document.getElementsByClassName("prev");
			var next =  document.getElementsByClassName("next");
			var nowPage = 0; //定义当前页，默认值为0；
			    
			for(var i = aBtn.length; i--;) {
					aBtn[i].tab = i;
					aBtn[i].onclick=function(){
						toggle(aIem,this.tab);
						nowPage=this.tab; //被点击后，保存当前页的序号
					}
			}
		   //下一页
			next[0].onclick = function () {			
					nowPage++;					
					nowPage %= aBtn.length;
					toggle(aIem,nowPage);
			}
			//上一页
			prev[0].onclick=function(){
				nowPage--;
				if(nowPage ==-1){
					nowPage = aBtn.length-1;
				}
				toggle(aIem,nowPage);				
			}*/

/*
 *底部、侧边、头部等公共部分的逻辑 
 * */
//document.getElementById 只能获取一个，数据类型 对象{}
//document.getElementsByName 获取多个，数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()获取一个 且是第一个，对象{}
//document.querySelectorAll() 获取多个 数组[]
var asideLists = document.querySelectorAll(".asidebar-bar-slide")

var car_goods = document.querySelector('.car-goods')
//删除购物车商品
var deleteli = document.querySelectorAll('.delete')
var listParent = document.querySelector('.goods-title-car')



//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间，给每一个单独添加移入时间
for(var i = 0; i<asideLists.length; i++){
	asideLists[i].onmouseenter = function() {
		//this 指向当前函数的执行的对象 li,没有就指向window
		
		//获取子节点
		console.log(this.children[1]);
		var bar = this.children[1];
		if( !bar ){
			return;
		}
		//需要right的值从45变到35
		//定时器 让一个时间延迟执行时间可以之定义
		//setInterval(延缓执行的动作，延迟的时间)
		var right = 45;
		var timer = setInterval(function(){
			right = right-1;
			if(right<=35) {
				//clearInterval（定时器名字）
				clearInterval(timer)
			}else {
				bar.style.right = right+"px";
			}
		},10)
		
	}
}

/*回到顶部*/

var returnTopEle = document.querySelector('.return-top');
returnTopEle.onclick = function() {
	//在函数中定义的变量只有在函数中生效，称之为局部变量
	
	//scrollTop 滚动条距离顶部的距离
	console.log(document.body.scrollTop);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//setInerval(function(){},1000)
	//每隔1000毫秒执行函数一次，不间断一直执行，除非手动关闭
	
	//循环换执行，缓慢进入和退出
	var timer = setInterval(function(){
		scrollTop = scrollTop - 10;
		console.log(scrollTop);
		document.body.scrollTop = scrollTop;
		document.documentElement.scrollTop = scrollTop;
		if(scrollTop <= 0){
			clearInterval(timer);
		}
	},10)
	
	//跳动执行，一次搞定，没有循环
	//针对chrom
	document.body.scrollTop = 0;
	//针对IE firefox
	document.documentElement.scrollTop = 0;
}

//划出点击控件 购物车以及客服
var slideBars = document.querySelectorAll('.aside-slide-bar');
var asideSlide = document.querySelector('.aside-slide');

for(var i = 0;i<slideBars.length;i++){
	
	slideBars[i].onclick = function() {
		//currentStyle获取css样式属性值的 IE 和opera
		//getComputedStyle(获取的属性元素，false) 属于window的方法
		//console.log(asideSlide.currentStyle.right)
		var right ='';
		if(asideSlide.currentStyle) {
			right = asideSlide.currentStyle.right
		}else {
			right = getComputedStyle(asideSlide,false)['right'];
		}
		right = parseInt(right);
		var speed = 0
		
		//classList 获取元素的类型 数据类型的对象
		//classList.add 往元素上添加一个类类型
		//this.classList.remove('on'); 移除类型
		//classname 获取元素类类型名称 数据类型为字符串
		//className.indexOf（）查找类名字字符串中饭是否有on这个类元素下标
		//this.classList.add('asnd')
		//classList = this.classList
		var className = this.className
		console.log(className);
		//当滑块要往回走时 当前点的按钮上有on这个类型
		//并且 right>-264 表示已经出来或者正在出来的状态
		if(right > -265 && className.indexOf('asnd') >= 0 ) {
			//回去
			speed = -12;
			this.classList.remove('asnd');
			
		}else {
			//出来
			speed = 12;
			this.classList.add('asnd')
			
			//显示的是购物车还是客服
			
			//判断是否有购物按钮车专有的类名。
			//如果有 表示显示购物车 没有就显得客服
			var cart = document.querySelector('.slide-goods-car')
			var server = document.querySelector('.slide-service')
			console.log(className.indexOf('asidebar-bar-cart'))
			if( className.indexOf('asidebar-bar-cart') >= 0 ){
				
				//将当前元素的下一个元素节点的on去掉
				this.nextElementSibling.classList.remove('asnd')
				cart.style.display='block'
				server.style.display = 'none'
				
			}else {
				//显示客服
				//将当前元素的上一个元素节点的on去掉
				this.previousElementSibling.classList.remove('asnd')
				server.style.display = 'block'
				cart.style.display = 'none'
			}
		}
		//运动
		var timer = setInterval(function(){
			right += speed;
			if((right >= 35 && speed > 0) || (right <= -265 && speed < 0)){
				clearInterval(timer);
				//asideSlide.style.right = 35 + 'px'	
			}else {
				asideSlide.style.right = right + "px";
			}
		},1)
	}
}
/*删除购物车的商品*/
for(var i = 0 ; i<deleteli.length;i++) {
	deleteli[i].onclick = function() {
		var oLi = this.parentNode
		listParent.removeChild(oLi)
	}
}

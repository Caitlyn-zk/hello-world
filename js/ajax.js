//ajax
//定义网络求情实例
var request = new XMLHttpRequest();
var requesUlr = "http://192.168.97.231:3001/"

//2.打开求情
//request.open(请求类型，请求的地址，是否异步)
//求情类型 后台规定的 请求地址 后台给的
//异步:浏览器执行js代码从上到下依次执行，当遇到ajax请求时，会开新的路线，不会影响后面的执行
request.open('GET',requesUlr+'getBanner',true);
//3、发送请求到后台
//后台会规定是否需要数据
//requst.send(后台需要的数据)
request.send(null);

//请求发送的状态 4个
//0 初始化xmlhttprequest
//1 打开
//2.3.请求发送成功，后台接收成功
//4. 请求完成 后台返回数据成功了

//请求监听状态码
request.onreadystatechange = function() {
	console.log(request.readyState);
	if(request.readyState== 4) {
		console.log(request.responseText);
		var result = JSON.parse(request.responseText);
		
		if (result.success== true) {
			var lists = result.list;
			var slide= document.querySelector('.carosoal-slide')
			var html= `<img src="${requesUlr + lists[lists.length-1].img}" />`;
			
			for(var i =0;i<lists.length;i++) {
				html += `<img src="${requesUlr + lists[i].img}" />`
				
			}
			slide.innerHTML = html
			
			carosoul()
		}
	}
}

request.open('get',requesUlr + 'lists?d=1',true)

request.send();

request.onreadystatechange = function () {
	if (request.readyState == 4) {
		console.log(request.responseText)
	}
}


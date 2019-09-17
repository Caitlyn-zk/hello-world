/**
 *ajaxPackage 封装ajax请求 希望请求多次调用 调用这个请求不同地方 不同地方就以参数形式传入
 * @param options Object
 * dataType json sting
 * success function 回调函数 在参数中传入一个方法 在数据处理完成后调用并将数据传入调用方法
 */

function ajaxPackage (options){
	//1创建请求
	var request = new XMLHttpRequest();
	
	//2.打开请求 request.open(请求类型，请求地址，同步还是异步)
	request.open(options.type || 'get',options.url,options.async || true)
	
	//3.发送请求request.send(data)
	request.send(options.data || null)
	
	//4.监听请求状态
	request.onreadystatechange = function () {
		if (request.readyState  == 4 && request.status == 200) {
			
			var data = request.responseText
			
			if (options.dataType== 'json') {
				data = JSON.parse(data)
			}
			//回调函数方法
			options.success(data)
		}
	}
	
}




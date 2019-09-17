/*信息验证*/
		
		$.extend($.validator,{
			messages: {
				required:"该字段不能为空必须.",
				remote: "Please fix this field.", //远程 发送请求判断
				email: "请输入正确的邮箱.",//邮箱字段
				url: "请输入正确的地址.",//有效地址
				dateISO: "Please enter a valid date (ISO).",//全球时间
				number: "Please enter a valid number.",//数字
				digits: "Please enter only digits.",//小数
				equalTo: "请输入相同的字符.",//等于 例如密码相等
				maxlength: $.validator.format( "Please enter no more than {0} characters." ),
				minlength: $.validator.format( "Please enter at least {0} characters." ),
				rangelength: $.validator.format( "请输入6-18位字符." ),
				range: $.validator.format( "Please enter a value between {0} and {1}." ),//区间
				max: $.validator.format( "Please enter a value less than or equal to {0}." ),
				min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
				step: $.validator.format( "Please enter a multiple of {0}." )
			}
			
			
		});
		
		$('.validateform').validate({
			//验证规则
			rules: {
				password:{
					//表示该字段必填
					required:true,
					rangelength: [6,8]
					
				},
				
				passwords: {
					required:true,
					equalTo:$('[name=password]')
				},
				tel: {
					required:true,
					tel:true
				}
				
			}
		})
		//$.validate.addMethod(验证名字，验证方法，验证错误信息) 自定义验证
		$.validator.addMethod('tel',function(value,element){
			var reg =  /0?(13|14|15|17|18)[0-9]{9}/
			return reg.test(value)
			
		},'请输入手机号')
//更改样式

//4.获取cookie
var cookia = $.cookie('cookia')
	//$.removeCookie('cookia')
if(cookia) {
	countDown(cookia)
}

//获取验证码
console.log($(".get-code"))
$('.get-code').click(function(){
	var _this = this;
	
	if($(this).hasClass('disabled'))
	return;
	countDown(60)
	
})

function countDown(count) {
	$('.get-code').addClass('disabled')
	
	$('.get-code').html(count+'s后重获')
	//开启倒计时
	var timer = setInterval(function(){
		count--
		$('.get-code').html(count+'s后重获')
		
		/*3.设置cookie*/
		$.cookie('cookia',count)
		//取
		console.log($.cookie('cookia'))
		//结束倒计时
		if(count<=0){
			
			clearInterval(timer)
			$('.get-code').removeClass('disabled').html('重新获取')
			$.removeCookie('cookia')
		}
	},1000)
	
}

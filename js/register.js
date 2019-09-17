/*登录页面*/
/*用户名、电话号码*/
function myregr() {
	var phone = document.getElementById('tel').value;
	var t_h = document.getElementById('phonef');
	
	if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(phone) || !/[A-Za-z0-9_\-\u4e00-\u9fa5]+/.test(phone) || /\s/.test(phone)) {
		t_h.style.display = 'block'
		t_h.innerHTML="请输入正确的格式！";
		return false;
	}else {
		t_h.style.display = 'block'
		t_h.innerHTML = "格式正确..";
		return true;
	}
}
/*密码验证*/
function myregrpas() {
	var pass = document.getElementById('iptt').value;
	var pass_t = document.getElementById('passt');
	
	if(!/^[a-zA-Z0-9_-]{8,16}$/.test(pass)) {
		pass_t.style.display = 'block'
		pass_t.innerHTML="请输入正确的密码！";
		return false;
	}else {
		pass_t.style.display = 'block'
		pass_t.innerHTML = "密码格式正确..";
		return true;
	}
	
}


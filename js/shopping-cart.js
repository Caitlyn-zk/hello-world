/*购车全选逻辑代码*/

var checkAll = $('.check-all');
var checkList = $('.goooda-cart input');

checkAll.change(function(){
	console.log(this);
	console.log($(this));
	if(this.checked) {
		checkList.prop('checked',true)
		
	}else {
		checkList.prop('checked',false);
	}
})

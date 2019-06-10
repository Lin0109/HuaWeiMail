//验证手机号
$(function(){
	console.log($('#phone'));
	var telephone = /^1[0-9]{10}$/;
	$('#phone input').blur(function(){
		var x = telephone.test($('#phone input').val());
		console.log($('#phone input').val());
		if(x==false){
			$('.top15').html("请输入正确的手机号");
			$('#phone').css('border','1px solid #ff3320');
		}else{
			$('.top15').html("");
			$('#phone').css('border','1px solid #d9d9d9');
		}
		if($('#phone input').val()==''){
		console.log('1111'+$('#phone input').val());
			$('.top15').html("请输入手机号");
		}
	})
	
	$('#password input').blur(function(){
		if($('#password input').val()==''){
			console.log(1);
			$('.password').html('密码不能为空，请输入密码');
			$('#password').css('border','1px solid #ff3320');
		}else{
			$('.password').html("");
			$('#password').css('border','1px solid #d9d9d9');
		}
		if($('#password02 input').val()==$('#password input').val()){
			$('.password02').html("");
			$('#password02').css('border','1px solid #d9d9d9');
		}
//		else{
//			$('.password02').html("密码输入不正确，请重新输入");
//			$('#password02').css('border','1px solid #ff3320');
//		}
	})
	
	$('#password02 input').blur(function(){
		var password = $('#password input').val();
		console.log(password);
		var password02 = $('#password02 input').val();
		console.log("二号位"+password02);
//		var y = password.test($('#password02 input').val());
		if($('#password02 input').val()==$('#password input').val()){
			$('.password02').html("");
			$('#password02').css('border','1px solid #d9d9d9');
		}else{
			$('.password02').html("密码输入不正确，请重新输入");
			$('#password02').css('border','1px solid #ff3320');
		}
		if($('#password02 input').val()==''){
			console.log(1);
			$('.password02').html('密码不能为空，请输入密码');
			$('#password02').css('border','1px solid #ff3320');
		}
	})
	
})

$(function(){
	//切换登录方式
	$('#zhangHao').click(function(){
		$('#saoMa').removeClass('active');
		$('#zhangHao').addClass('active');
		$('.ZH').css('display','block');
		$('.SM').css('display','none');
	})
	$('#saoMa').click(function(){
		$('#zhangHao').removeClass('active');
		$('#saoMa').addClass('active');
		$('.ZH').css('display','none');
		$('.SM').css('display','block');
	})
	
	console.log($('#userName').val());
	//验证手机号
	var telephone = /^1[0-9]{10}$/;
	$('#userName').blur(function(){
		var x = telephone.test($('#userName').val());
		console.log($('#userName').val());
		if(x==false){
			$('.top15').html("请输入正确的手机号");
		}else{
			$('.top15').html("");
		}
		if($('#userName').val()==''){
		console.log('1111'+$('#userName').val());
			$('.top15').html("请输入手机号");
		}
	})
	$('#password').blur(function(){
		if($('#password').val()==''){
			$('.top15').html("请输入密码");
		}else{
			$('.top15').html('');
		}
	})
	
	//记住账号
	$('.checkBox .check').click(function(){
		$('.checkBox .check i').toggleClass('noCheck checked');
	})
	
	//二维码动画
	$('.qrCodeMain').hover(
		function(){
			$('.qrCodeImg').css('left',20);
			$('.qrCodeHelp').css('opacity',1);
		},
		function(){
			$('.qrCodeImg').css('left',109);
			$('.qrCodeHelp').css('opacity',0);
		}
	)
})
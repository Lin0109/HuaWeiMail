$(function(){
	//出现回到顶部图标，出现锚点导航
	$(document).scroll(function(){
		if($(document).scrollTop()>1000){
			$('.hungBar .hungBar-content .hungBar-top').css('display','block');
		}else{
			$('.hungBar .hungBar-content .hungBar-top').css('display','none');
		}
			
	})
	//回到顶部
	$('.hungBar-top').click(function(){
		$(document).scrollTop(0);
	})
})
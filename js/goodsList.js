$(function(){
	
	$.each(goodsArr, function(index,event) {
		var str01 = `<li>
						<div class="goodsBox">
							<div class="pImg">
								<a href="#">
									<img src=${event.src} />
								</a>
							</div>
							<p class="pName">
								<a href="#">${event.title}</a>
							</p>
							<p class="pPrice">${event.price}</p>
							<div class="pButtom">
								<div class="pBox bRed">
									<a href="#">选购</a>
								</div>
								<div class="pBox">367人评价</div>
							</div>
						</div>
					</li>`;
		$('.channelList ul').append(str01);
	});
	
	//出现回到顶部图标，出现锚点导航
	var running = false;
	$(document).scroll(function(){
		if($(document).scrollTop()>600){
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
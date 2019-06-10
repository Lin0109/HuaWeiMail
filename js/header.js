$(function(){
	//搜索框聚焦
	$('.search-bar-form .text').on('focus',function(){
		console.log(1);
		$('.search-text').css('display','none');
	})
	$('.search-bar-form .text').on('blur',function(){
		$('.search-text').css('display','block');
	})
		
	//动态生成header下拉图标
	$.each(headerImg, function(index,event) {
		var str = `<li class="goodItem">
						<a href="#" class="goods">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('.goodsList').append(str);
	});

	//下拉菜单
	$('#first').on('mouseover',function(){
		$('.naverSub').css('height','280px');
		$('.naverTab').css('box-shadow','0 3px 3px 0 rgba(121,121,121,0.26)');
	})
	$('#first').on('mouseout',function(){
		$('.naverSub').css('height','0');
		$('.naverTab').css('box-shadow','none');
	})
	$('.naverSub').on('mouseover',function(){
		$('.naverSub').css('height','280px');
		$('.naverTab').css('box-shadow','0 3px 3px 0 rgba(121,121,121,0.26)');
	})
	$('.naverSub').on('mouseout',function(){
		$('.naverSub').css('height','0');
		$('.naverTab').css('box-shadow','none');
	})
})
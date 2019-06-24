$(function(){
	//顶部广告关闭
	$('.button-top-banner-close').click(function(){
		$('.top-banner').css('display','none');
		$('#nav').css('top','114px');
	})
	
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
	
	
	//大图透明度轮播
	slider();
	function slider(){
		inter();
		var iNow = 0;
		var timer;
		for(var i=0;i<$('.slider-img').length;i++){
			bind(i);
		}	
		function bind(index){
			$('.slider-middle-span span').eq(index).hover(function(){
				console.log($('.slider-middle-span span').eq(index));
				clearInterval(timer);
				iNow = index+1;
				changePic( index );
				inter();
			})
		}	
		function changePic( index ){
			for(var j=0;j<$('.slider-img').length;j++){
				$('.slider-img').eq(j).css('opacity',0);
				$('.slider-middle-span span').eq(j).css('backgroundColor','transparent');
				if(j==index){
					$('.slider-img').eq(index).css('opacity',1);
					$('.slider-middle-span span').eq(index).css('backgroundColor','white');
				}
			}
		}
		//定时器
		function inter(){
			timer = setInterval(function(){
				if(iNow>7){
					iNow = 0;
				}
				changePic(iNow);
				iNow++;
			},3000)
		}
	}
	
	//精品动态生成
	$.each(honerGoods01, function(index,event) {
		var str01 = `<li class="honerItem">
								<div class="honerGoodsImg">
									<img src=${event.src} />
								</div>
								<p class="honerGoodsTitle">${event.title}</p>
								<p class="honerGoodsInfo">${event.info}</p>
								<p class="honerGoodsPrice">${event.price}</p>
							</li>`;
		$('.channelHoner .honerGoodsList').append(str01);
	});
	
	//手机动态生成
	$.each(honerGoods02, function(index,event) {
		var str02 = `<a href="#">
							<li class="honerItem span373 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src} />
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsInfo">${event.info}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow01 .span790').append(str02);
	});
	
	//笔记本动态生成
	$.each(honerGoods03, function(index,event) {
		var str03 = `<a href="#">
							<li class="honerItem span373 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src} />
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsInfo">${event.info}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow02 .span790').append(str03);
	});
	
	//手表
	$.each(honerGoods04, function(index,event) {
		var str04 = `<a href="#">
							<li class="honerItem span373 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src} />
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsInfo">${event.info}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow03 .span790').append(str04);
	});
	
	//家居
	$.each(honerGoods05, function(index,event) {
		var str05 = `<a href="#">
							<li class="honerItem span410 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src}>
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow04 .span860').append(str05);
	});
	
	//家居
	$.each(honerGoods06, function(index,event) {
		var str06 = `<a href="#">
							<li class="honerItem span266 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src}>
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsInfo">${event.info}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow04 .span860').append(str06);
	});
	
	
	//配件
	$.each(honerGoods07, function(index,event) {
		var str07 = `<a href="#">
							<li class="honerItem span410 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src}>
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow05 .span860').append(str07);
	});
	
	//配件
	$.each(honerGoods08, function(index,event) {
		var str08 = `<a href="#">
							<li class="honerItem span266 honerItem02">
								<div class="honerGoodsImg">
									<img src=${event.src}>
								</div>
								<div class="honerGoodsPro">
									<p class="honerGoodsTitle">${event.title}</p>
									<p class="honerGoodsInfo">${event.info}</p>
									<p class="honerGoodsPrice">${event.price}</p>
								</div>
							</li>
						</a>`;
		$('#flow05 .span860').append(str08);
	});
	
	
	
	
})

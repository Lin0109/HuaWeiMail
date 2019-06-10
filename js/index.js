$(function(){
	//顶部广告关闭
	$('.button-top-banner-close').click(function(){
		$('.top-banner').css('display','none');
	})
	
	//搜索框聚焦
	$('.search-bar-form .text').focus(function(){
		$('.search-text').css('display','none');
	})
	$('.search-bar-form .text').blur(function(){
		$('.search-text').css('display','block');
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
			},2000)
		}
		//向前
		$('.before').click(function(){
			clearInterval(timer);
			iNow --;
			if(iNow<0){
				iNow = $('.slider-img').length-1;
			}
			changePic(iNow);
			inter();
		})
		//向后
		$('.after').click(function(){
			clearInterval(timer);
			iNow ++;
			if(iNow>$('.slider-img').length-1){
				iNow = 0;
			}
			changePic(iNow);
			inter();
		})
	}
	
	//广告垂直轮播
	var jNow = 0;		
	setInterval(function(){
		jNow++;
		if(jNow>5){
			jNow = 1;
			moveTop();
			$('.move-top').css('transition','');
		}
		else{
			$('.move-top').css('transition','1s');
			moveTop();
		}
	},3000)
	function moveTop(){
		var nowtop = -jNow*43;
		$('.move-top').css('margin-top',nowtop);
	}
	
	//第一部分goods动态添加
	$.each(goods, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('.span-968 .goods-list').append(str);
	});
	
	//lunbo-goods动态添加
	$.each(lunboGoods, function(index,event) {
		var str01 = `<li class="goods-item">
						<a href="#" class="goods">
							<div class="goods-box">
								<p class="goods-img">
									<img src=${event.src} />
								</p>
								<div class="goods-info">${event.info}&nbsp;</div>
							</div>
							<div class="goods-title">${event.title}</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('.lunbo-02').append(str01);
	});
	
	//精品推荐水平轮播
	var count = 0;
	var w =-( $('.lunbo-02').width()-1210 );
	//向前
	$('.goods-prev').click(function(){
		count --;
		var before = -count*1210;
		$('.lunbo-02').css('left',before);
		var left = $('.lunbo-02').position().left + 1210;
		console.log(left);
		if(left>=0&&left<1210){
			console.log(left);
			$('#jpPrev').css('display','none');
		}
		if(left > w){
			$('#jpNext').css('display','block');
		}
	})
	//向后
	$('.goods-next').click(function(){
		count ++;
		var after = -count*1210;
		$('.lunbo-02').css('left',after);
		var left = $('.lunbo-02').position().left - 1210;
		if(left < 0){
			$('#jpPrev').css('display','block');
		}
		if(left <= w){
			$('.lunbo-02').css('left',w)
			$('#jpNext').css('display','none');
		}
	})
	
	//广告轮播home-banner
	inter01();
	var tNow = 0;
	for(var i=0;i<$('.ec-slider-item').length;i++){
		bind(i);
	}		
	function bind(index){
		$('.ec-slider-nav span').eq(index).hover(function(){
			clearInterval(timer01);
			tNow = index+1;
			changePic01( index );
			inter01();
		})
	}
	function changePic01( index ){
			for(var j=0;j<$('.ec-slider-item').length;j++){
				$('.ec-slider-item').eq(j).css('opacity',0);
				$('.ec-slider-nav span').eq(j).css('backgroundColor','transparent');
				if(j==index){
					$('.ec-slider-item').eq(index).css('opacity',1);
					$('.ec-slider-nav span').eq(index).css('backgroundColor','white');
				}
			}
		}
	//定时器
	function inter01(){
		timer01 = setInterval(function(){
			if(tNow>7){
				tNow = 0;
			}
			changePic01(tNow);
			tNow++;
		},2000)
	}
	
	//第二部分goods01动态添加
	$.each(goods01, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goods01 .goods-list').append(str);
	});
	
	//笔记本电脑动态添加
	$.each(goodsPC, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsPC .goods-list').append(str);
	});
	
	//平板动态添加
	$.each(goodsPb, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsPb .goods-list').append(str);
	});
	
	//穿戴动态添加
	$.each(goodsCd, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsCd .goods-list').append(str);
	});
	
	//goodsCdLunbo动态添加
	$.each(goodsCdLunbo, function(index,event) {
		var str01 = `<li class="goods-item">
						<a href="#" class="goods">
							<div class="goods-box">
								<p class="goods-img">
									<img src=${event.src} />
								</p>
								<div class="goods-info">${event.info}&nbsp;</div>
							</div>
							<div class="goods-title">${event.title}</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsCdLunbo').append(str01);
	});
	
	
	//智能穿戴水平轮播
	var count01 = 0;
	var w01 =-( $('#goodsCd .lunbo-03').width()-1214 );
	//向前
	$('#goodsCd .goodsPrev').click(function(){
		count01 --;
		var before = -count01*1210;
		$('#goodsCd .lunbo-03').css('left',before);
		var left01 = $('#goodsCd .lunbo-03').position().left + 1210;
		console.log('left01'+left01);
		if(left01>=0&&left01<1210){
			console.log(left01);
			$('#goodsCd .goodsPrev').css('display','none');
		}
		if(left01 > w01){
			$('#goodsCd .goodsNext').css('display','block');
		}
	})
	//向后
	$('#goodsCd .goodsNext').click(function(){
		count01 ++;
		var after = -count01*1210;
		$('#goodsCd .lunbo-03').css('left',after);
		var left01 = $('#goodsCd .lunbo-03').position().left - 1210;
		console.log('left01-after'+left01);
		if(left01 < 0){
			$('#goodsCd .goodsPrev').css('display','block');
		}
		if(left01 <= w01){
			$('#goodsCd .lunbo-03').css('left',w01);
			$('#goodsCd .goodsNext').css('display','none');
		}
	})
	
	//家居动态添加
	$.each(goodsJu, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsJu .goods-list').append(str);
	});
	
	//家居轮播动态添加
	$.each(goodsJuLunbo, function(index,event) {
		var str01 = `<li class="goods-item">
						<a href="#" class="goods">
							<div class="goods-box">
								<p class="goods-img">
									<img src=${event.src} />
								</p>
								<div class="goods-info">${event.info}&nbsp;</div>
							</div>
							<div class="goods-title">${event.title}</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsJuLunbo').append(str01);
	});
	
	
	//智能家居水平轮播
	var count02 = 0;
	var w02 =-( $('#goodsJu .lunbo-03').width()-1214 );
	//向前
	$('#goodsJu .goodsPrev').click(function(){
		count02 --;
		var before = -count02*1210;
		$('#goodsJu .lunbo-03').css('left',before);
		var left02 = $('#goodsJu .lunbo-03').position().left + 1210;
		console.log('left02'+left02);
		if(left02>=0&&left02<1210){
			$('#goodsJu .goodsPrev').css('display','none');
		}
		if(left02 > w02){
			$('#goodsJu .goodsNext').css('display','block');
		}
	})
	//向后
	$('#goodsJu .goodsNext').click(function(){
		count02 ++;
		var after = -count02*1210;
		$('#goodsJu .lunbo-03').css('left',after);
		var left02 = $('#goodsJu .lunbo-03').position().left - 1210;
		if(left02 < 0){
			$('#goodsJu .goodsPrev').css('display','block');
		}
		if(left02 <= w02){
			$('#goodsJu .lunbo-03').css('left',w02);
			$('#goodsJu .goodsNext').css('display','none');
		}
	})
	
	//热销配件动态添加
	$.each(goodsRx, function(index,event) {
		var str = `<li class="goods-item">
						<a class="goods" href="#">
							<p class="goods-img">
								<img src=${event.src} />
							</p>
							<div class="goods-title">${event.title}</div>
							<div class="goods-info">${event.info}&nbsp;</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsRx .goods-list').append(str);
	});
	
	//热销配件轮播动态添加
	$.each(goodsRxLunbo, function(index,event) {
		var str01 = `<li class="goods-item">
						<a href="#" class="goods">
							<div class="goods-box">
								<p class="goods-img">
									<img src=${event.src} />
								</p>
								<div class="goods-info">${event.info}&nbsp;</div>
							</div>
							<div class="goods-title">${event.title}</div>
							<div class="goods-price">${event.price}</div>
						</a>
					</li>`;
		$('#goodsRxLunbo').append(str01);
	});
	
	
	//智能家居水平轮播
	var count03 = 0;
	var w03 =-( $('#goodsRx .lunbo-03').width()-1214 );
	//向前
	$('#goodsRx .goodsPrev').click(function(){
		count03 --;
		var before = -count03*1210;
		$('#goodsRx .lunbo-03').css('left',before);
		var left03 = $('#goodsRx .lunbo-03').position().left + 1210;
		if(left03>=0&&left03<1210){
			$('#goodsRx .goodsPrev').css('display','none');
		}
		if(left03 > w03){
			$('#goodsRx .goodsNext').css('display','block');
		}
	})
	//向后
	$('#goodsRx .goodsNext').click(function(){
		count03 ++;
		var after = -count03*1210;
		$('#goodsRx .lunbo-03').css('left',after);
		var left03 = $('#goodsRx .lunbo-03').position().left - 1210;
		if(left03 < 0){
			$('#goodsRx .goodsPrev').css('display','block');
		}
		if(left03 <= w03){
			$('#goodsRx .lunbo-03').css('left',w03);
			$('#goodsRx .goodsNext').css('display','none');
		}
	})
	
	var m01 = $('#goods01').offset().top;
	var m02 = $('#goodsPC').offset().top;
	var m03 = $('#goodsPb').offset().top;
	var m04 = $('#goodsCd').offset().top;
	var m05 = $('#goodsJu').offset().top;
	var m06 = $('#goodsRx').offset().top;
	//出现回到顶部图标，出现锚点导航
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		if(top>1000){
			$('.hungBar .hungBar-content .hungBar-top').css('display','block');
		}else{
			$('.hungBar .hungBar-content .hungBar-top').css('display','none');
		}
		if(top>2200&top<6900){
			$('.event-right').css('transform','translate(0,0)');
		}else{
			$('.event-right').css('transform','translate(100px,0)');
		}
		
		if(top>=m01){
			change(0);
		}
		if(top>=m02){
			change(1);
		}
		if(top>=m03){
			change(2);
		}
		if(top>=m04){
			change(3);
		}
		if(top>=m05){
			change(4);
		}
		if(top>=m06){
			change(5);
		}
	})
	//回到顶部
	$('.hungBar-top').click(function(){
		$(document).scrollTop(0);
	})
	
	function change(nowindex){		
		$('.hover-list li').each(function(index, element){
			console.log(element);
			if(index == nowindex){
				console.log('222222'+index)
				$('.hover-list li a').eq(index).css('color','#CB242B');
			    $('.event-right .hover-list li div').eq(index).css('height','18px');
			}else{
				$('.hover-list li a').eq(index).css('color','#999999');
				$('.event-right .hover-list li div').eq(index).css('height','0px');
			}
		})
	}
	
})
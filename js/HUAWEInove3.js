$(function(){
	
	$('.choosePic a').each(function(index){
		$('.choosePic a').eq(index).click(function(){
			$('.choosePic a').removeClass('current');
			$('.choosePic a').eq(index).addClass('current');
		})
	})
	
	$('.chooseBb a').each(function(index){
		$('.chooseBb a').eq(index).click(function(){
			$('.chooseBb a').removeClass('current');
			$('.chooseBb a').eq(index).addClass('current');
		})
	})
	
	$('.choosePic a').eq(0).click(function(){
		$('.lunboBox ul').empty();
		$('.productImg img').attr('src','img/product/proRed01.jpg');
		//动态生成header下拉图标
		$.each(lunboImgRed, function(index,event) {
			var str = `<li>
							<img src=${event.src} />
						</li>`;
			$('.lunboBox ul').append(str);
		});
		
		//切换图片路径
		$('.lunboBox ul li').each(function(index,event){
			$('.lunboBox ul li').eq(0).addClass('current');
			$('.lunboBox ul li').eq(index).hover(function(){
				$('.lunboBox ul li').removeClass('current');
				$('.lunboBox ul li').eq(index).addClass('current');
			})
		})
		$('.lunboBox ul li').hover(function(){
			iNow  = $('.lunboBox ul li').index(this);
			changePic01();
		})			
		function changePic01(){
			var s = iNow+1;
			var path = 'img/product/proRed0'+s+'.jpg';
			$('.productImg img').attr('src',path);
		}
	})
	
	$('.choosePic a').eq(1).click(function(){
		$('.lunboBox ul').empty();
		$('.productImg img').attr('src','img/product/proGolden01.jpg');
		//动态生成header下拉图标
		$.each(lunboImgGolden, function(index,event) {
			var str = `<li>
							<img src=${event.src} />
						</li>`;
			$('.lunboBox ul').append(str);
		});
		
		//切换图片路径
		$('.lunboBox ul li').each(function(index,event){
			$('.lunboBox ul li').eq(0).addClass('current');
			$('.lunboBox ul li').eq(index).hover(function(){
				$('.lunboBox ul li').removeClass('current');
				$('.lunboBox ul li').eq(index).addClass('current');
			})
		})
		$('.lunboBox ul li').hover(function(){
			iNow  = $('.lunboBox ul li').index(this);
			changePic01();
		})			
		function changePic01(){
			var s = iNow+1;
			var path = 'img/product/proGolden0'+s+'.jpg';
			$('.productImg img').attr('src',path);
		}
	})
	
	//动态生成header下拉图标
	$.each(lunboImgRed, function(index,event) {
		var str = `<li>
						<img src=${event.src} />
					</li>`;
		$('.lunboBox ul').append(str);
	});
	
	//切换图片路径
	$('.lunboBox ul li').each(function(index,event){
		$('.lunboBox ul li').eq(0).addClass('current');
		$('.lunboBox ul li').eq(index).hover(function(){
			$('.lunboBox ul li').removeClass('current');
			$('.lunboBox ul li').eq(index).addClass('current');
		})
	})
	$('.lunboBox ul li').hover(function(){
		iNow  = $('.lunboBox ul li').index(this);
		changePic();
	})			
	function changePic(){
		var s = iNow+1;
		var path = 'img/product/proRed0'+s+'.jpg';
		$('.productImg img').attr('src',path);
	}
	
	//放大镜
	$('.productImg').hover(
		function(){
			$('.square').css('display','block');
			$('.bigImg').css('display','block');
		},
		function(){
			$('.square').css('display','none');
			$('.bigImg').css('display','none');
		}
	)	
	$('.productImg').mousemove(function(event){
			
		var nowleft = Math.floor(event.pageX - $('.productImg').offset().left-112.5);
		var nowtop = event.pageY - $('.productImg').offset().top-112.5;
		
		if(nowleft<0){
			nowleft = 0;
		}
		if(nowleft>225){
			nowleft = 225;
		}
		if(nowtop<0){
			nowtop = 0;
		}
		if(nowtop>225){
			nowtop = 225;
		}
		
		$('.square').css({
			'left':nowleft,
			'top':nowtop
		});
		$('.bigImg img').css({
			'left':-nowleft*2,
			'top':-nowtop*2
		});
	})
	
	
	disabled();
	function disabled(){
		if($('#proStockText').val()==1){
			$('#sub').css('cursor','not-allowed');
		}
	}
	//加
	$('#add').click(function(){
		var count = Number($('#proStockText').val())+1;
		$('#proStockText').val(count);
		$('#proStockText').attr('value',count);
		if($('#proStockText').val()>1){
			$('#sub').css('cursor','pointer');
		}
	})
	//减
	$('#sub').click(function(){
		if($('#proStockText').val()>1){
			var count = Number($('#proStockText').val())-1;
			$('#proStockText').val(count);
			$('#proStockText').attr('value',count);
		}
		if($('#proStockText').val()==1){
			$('#sub').css('cursor','not-allowed');
		}
	})
	$('#proStockText').blur(function(){
		if($('#proStockText').val()>1){
			$('#sub').css('cursor','pointer');
		}else{
			$('#sub').css('cursor','not-allowed');
		}
	})
	
	
	//吸顶
	$(document).scroll(function(){
		$('#nav').attr("data-fixed",$(document).scrollTop() >= 970 ? "fixed":"");
		$('#nav p').attr("data-fixed",$(document).scrollTop() >= 970 ? "fixed":"");
		if($(document).scrollTop() >= 970){
			$('#nav .proBtn02').css('visibility','visible');
		}else{
			$('#nav .proBtn02').css('visibility','hidden');
		}
	})
	
	//锚点导航
	$('#nav a').each(function(index){
		$('#nav a').eq(index).click(function(){
			$('#nav a').removeClass('red');
			$('#nav a').eq(index).addClass('red');
		})
	})
	
	
	//动态生成商品详情
	$.each(introImg, function(index,event) {
		var str01 = `<li>
						<img src=${event.src} />
					</li>`;
		$('#intro').append(str01);
	});
	
	//吸顶变换样式
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top);
		if(top>0&top<6096){
			$('#nav a').removeClass('red');
			$('#nav a').eq(0).addClass('red');
		}
		if(top>6096&top<7162){
			$('#nav a').removeClass('red');
			$('#nav a').eq(1).addClass('red');
		}
		if(top>7162&top<7903){
			$('#nav a').removeClass('red');
			$('#nav a').eq(2).addClass('red');
		}
		if(top>7903){
			$('#nav a').removeClass('red');
			$('#nav a').eq(3).addClass('red');
		}
	})
	
	
})
	
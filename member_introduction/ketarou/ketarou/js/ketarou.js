

$(function () { //アニメーション
  

	var Ele_char  = document.getElementById('char');
	var Char = Ele_char.getBoundingClientRect();
	var TalkFlag = 0;
	var KeyFlag =0;
	char.style.posLeft = 800;//初期位置
	char.style.posTop = 20;
		
	var checkCanvace = function(charx, chary){//当たり判定
		if(charx >= 800 && charx <= 900 && chary >=1100 && chary <=1250){//鍵の座標
			KeyFlag = 1;
			$("#Key").fadeOut();
		}

		if(KeyFlag == 1){//キャンバスの表示 
			if(charx >= 20 && charx <= 110 && chary >=120 && chary <=168){
				$("#Keyblock").fadeOut();
				$("#canvace").fadeIn(1500);
				TalkFlag=1;
			}else{
				$("#canvace").fadeOut();
				TalkFlag=0;
			}
		}
	}
	
    //アニメーションの関数
    var spriteAnimation = function() {
        var $jsAnime = $('.char'); 
     		
		var move= function(){		//キーボードで動かす	
			$jsAnime.addClass('idol');
			$('html').keydown(function(e){
				switch(e.which){
				case 75: //k[↓]
					removeanimeClass();
					$('body').addClass('noscroll');
					$jsAnime.addClass('Fwalk');
					var y = char.style.posTop;
					y = y + 8;
					char.style.posTop = y;
					checkCanvace(char.style.posLeft,char.style.posTop);
					break;
					
				case 76: // l[→]
					removeanimeClass();
					$jsAnime.addClass('Lwalk');
					var x = char.style.posLeft;
					x = x + 8;
					char.style.posLeft = x;
					checkCanvace(char.style.posLeft,char.style.posTop);
					break;
					
				case 73: //i[↑]
					removeanimeClass();
					$('body').addClass('noscroll');
					$jsAnime.addClass('Bwalk');
					var y = char.style.posTop;
					y = y - 8;
					char.style.posTop = y;
					checkCanvace(char.style.posLeft,char.style.posTop);
					break;
					
				case 74: // j[←]
					removeanimeClass();
					$jsAnime.addClass('Rwalk');
					var x = char.style.posLeft;
					x = x - 8;
					char.style.posLeft = x;
					checkCanvace(char.style.posLeft,char.style.posTop);
					break;
					
				case 83: // [s]
					if(TalkFlag==1){
					removeanimeClass();
					$jsAnime.addClass('sleep');
						$("#overlay").fadeIn();
					}
					break;
					
				case 84://[t]
					if(TalkFlag==1){
						removeanimeClass();
						$jsAnime.addClass('bow');
					}
					break;
					
				case 82://[r]
						if(TalkFlag==1){
						removeanimeClass();
						$jsAnime.addClass('turn');
						}
					break;
	
				}
				
			})
			
	
			$('html').keyup(function(e){  //通常時idol
				switch(e.which){
				case 73:
				case 74:
				case 75:
				case 76:	
					removeanimeClass();
					$jsAnime.addClass('idol');
					break;
				}	
			})	
		
			$('html').keypress(function(e){//デバック用
				switch(e.which){
				case 33:
					$("#canvace").fadeIn(1500);
					break;
				}
			})
		}
	
        //フレームリセット用の関数
        var removeanimeClass = function(){
			$jsAnime.removeClass("Fwalk");
			$jsAnime.removeClass("Bwalk");
			$jsAnime.removeClass("Lwalk");
			$jsAnime.removeClass("Rwalk");
            $jsAnime.removeClass("fall");
            $jsAnime.removeClass("idol");
			$jsAnime.removeClass("bow");
			$jsAnime.removeClass("turn");
			$jsAnime.removeClass("sleep");
        }	
		move(); //フレーム１の関数を呼び出す
    }
    //アニメーション発火
    spriteAnimation();
});



$(function(){//画像表示
	var nX;
	var nY;
	var dElm = document.documentElement , dBody = document.body;
	$("#samune li img").click(function() {
		var h = this.naturalHeight;
		var w = this.naturalWidth;
		var url =$(this).attr('src');
	
		//X座標を取得する
		 nX = dElm.scrollLeft || dBody.scrollLeft;
		//Y座標を取得する
		 nY = dElm.scrollTop || dBody.scrollTop;
		
		$("#overlay").empty().append('<img src="' + url + '"/>', '<p id ="close">close<p/>');
		if($(window).height()<=h && $(window).width()<=w)
			$("#overlay").css({width: w, height: h , opacity: '1'});
		else if($(window).height()<=h && $(window).width()>w){
			$("#overlay").css({width: '100%', height: h , opacity: '1'});
		}else if($(window).height()>h && $(window).width()<=w)
			$("#overlay").css({width: w, height: '100%' , opacity: '1'});
		else 	$("#overlay").css({width: '100%', height: '100%' , opacity: '1'});
		$("#overlay").css({display: 'block'});
		$(".wrapper").css({display: 'none'});
		

	
	});
	$("#overlay").click(function() {
		$(".wrapper").css({display: 'block'});		
		$("#overlay").css({display:'none'});
		setTimeout(function(){//画面ズレ防止
			dElm.scrollLeft  =nX;
			dBody.scrollLeft　=nX;
			dElm.scrollTop =nY;
			dBody.scrollTop = nY;}	,10);
	});
	
});

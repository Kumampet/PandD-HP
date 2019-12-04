//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//----------------------------以下、ギャラリー用----------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
$(function(){
  //テキストリンクをクリックしたら
  $(".modal-open").click(function(){
    var id = $(this).attr("id");//クリックされたアイコンのIDを取得する
    var illust_src = $("#"+id+" img").attr("src");//取得したIDの配下にある画像のリンクを取得
    var p = $("#"+id+" .illust-comment").html();//取得したIDの配下にあるこめんとのHTML構文を取得

    //-------------------------HTML改変----------------------------------
    $("#modal-window").append("<div id='illust-container'></div>");
    if(p!=undefined){
      $("#illust-container").append("<p id='comment'>"+p+"</p>");//コメントがあればコメントを挿入
    }
    $("#illust-container").append("<img id='illust_preview' src=''/>");//イラストコンテナにimgタグを挿入する
    $('#illust_preview').attr("src", illust_src);//imgのsrcを取得したsrcに書き換える

    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');
    //画面中央を計算する関数を実行
    modalResize();

    //モーダルウィンドウを表示
    $("#modal-bg,#modal-window").fadeIn("slow");

    //------------------------------------------------------------------
    $("#illust-container").click(function(){
      $("#comment").toggle();
    });
    //---------------------事後処理-------------------------------------
    //画面のどこかをクリックしたらモーダルを閉じる
    $("#modal-bg,.close_btn").click(function(){
      $("#modal-window,#modal-bg").fadeOut("slow",function(){
        //閉じると同時に内容をすべてクリアして初期化する役割も担わせる
        $('#modal-bg').remove();
        $('#illust-container').remove();
        $('#illust_preview').remove();
        $('#comment').remove();
      });
    });
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
    $(window).resize(modalResize);
    function modalResize(){

      var w = $(window).width();
      var h = $(window).height();

      var cw = $("#modal-window").outerWidth();
      var ch = $("#modal-window").outerHeight();

      //取得した値をcssに追加する
      $("#modal-window").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
      });
    }
  });
});

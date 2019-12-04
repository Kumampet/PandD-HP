$(function(){
  //テキストリンクをクリックしたら
  $(".modal-open").click(function(){
    //クリックされた名前のIDを取得する。誰がクリックされたのかを識別する
    var id = $(this).attr("id");//誰かの判別ID格納
    var hn = $("#"+id+" p.name").text();//IDに基づいたハンドルネーム格納
    var job = $("#"+id+" p.job").text();//その人の役職格納
    var hobby = $("#"+id+" .hobby").html();//趣味格納
    var com = $("#"+id+" .comment").html();//一言コメント
    var join = $("#"+id+" ul.join").html();//参加ゲーム
    var images = $("#"+id+" .images").html();//添付画像
    var music = $("#"+id+" .audio").html();//添付音声
    var link = $("#"+id+" .link").html();//外部リンク
    var nodata = "No Data..."//データがないときに表示させる文字列のマクロ的な何か

    //----------デバッグ用---------------
    //alert(audio);
    //-------------------------
    //---------------モーダル内の情報の書き換えを行う----------------
    //----ハンドルネーム----
    $("#hn").text(hn);
    //----役職----
    $("#job").text(job);
    //----趣味----
    if(hobby == ""){
      $("#hobby").text(nodata);
    }else{
      $("#hobby").html(hobby);
    }
    //----一言コメント----
    if(com == ""){
      $("#comment").text("No Comment...");
    }else{
      $("#comment").html(com);
    }
    //参加ゲーム
    if(join == undefined){
      $("#join").append("<li>"+nodata+"</li>");
    }else{
      $("#join").append(join);
    }
    //添付画像
    if(images != undefined){
      $(".user-info-container").append("<h3 id='gallery'>Gallery</h3>");
      $(".user-info-container").append("<div id='user-image'>"+images+"</div>");
    }
    //添付音声
    if(music != undefined){
      $(".user-info-container").append("<h3 id='music'>Music</h3>");
      $(".user-info-container").append("<div id='user-audio'>"+music+"</div>");
    }
    //外部リンク
    if(link != undefined){
      $(".user-info-container").append("<h3 id='music'>Link</h3>");
      $(".user-info-container").append("<div id='user-link'>"+link+"</div>");
    }
    //----------------------------------------------------------
    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');
    //画面中央を計算する関数を実行
    modalResize();

    //モーダルウィンドウを表示
    $("#modal-bg,#modal-main").fadeIn("slow");

    //スクロール一の初期化
    $("#modal-main").scrollTop(0);

    //---------------------事後処理-------------------------------------
    //画面のどこかをクリックしたらモーダルを閉じる
    $("#modal-bg,.close_btn").click(function(){
      $("#modal-main,#modal-bg").fadeOut("slow",function(){
        //閉じると同時に内容をすべてクリアして初期化する役割も担わせる
        $('#modal-bg').remove() ;
        $("#hn").text();
        $("#job").text();
        $("#hobby").text();
        $("#comment").text();
        $("#user-image").remove();
        $("#user-audio").remove();
        $("#join li").remove();
        $("#gallery").remove();
        $("#music").remove();
        $("#link").remove();
        $("#user-link").remove();
      });
    });
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
    $(window).resize(modalResize);
    function modalResize(){

      var w = $(window).width();
      var h = $(window).height();

      var cw = $("#modal-main").outerWidth();
      var ch = $("#modal-main").outerHeight();

      //取得した値をcssに追加する
      $("#modal-main").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
      });
    }
  });
});

$(function(){
  $('.single-item').slick({
    accessibility: true,//タブとナビゲーションの有効化
    autoplay: true,//自動再生のON or OFF
    autoplaySpeed: 3500,//一枚あたりの表示時間
    speed: 2000,//フェードの速さ
    dots: true,//ドットナビの有無
    fade: true,//フェードの有無
  });
});

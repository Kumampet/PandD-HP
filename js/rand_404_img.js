$(function(){
  //----404エラーで使用する画像の一覧です----
  //----./image/404/[file_name]でパスを配列に入れていってください----
  //----区切り文字はカンマです----
  //----------------------------------------------------------------
  var images = [
    './image/404/404_juen.jpg',
    './image/404/404_oyu.png',
    './image/404/404_nacht.jpg'
  ];
  //----------------------------------------------------------------
  var randimg = images[Math.floor(Math.random() * images.length)];
  $('#error').attr('src', randimg);
});

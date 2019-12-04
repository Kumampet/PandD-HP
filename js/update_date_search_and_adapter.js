$(function(){
  var update = document.lastModified;//更新日時を引っ張る
  var part = update.split(" ");//日付と時刻に分割
  var day = part[0].split("/");//日付を分割
  $(".update").text("Last update - "+day[2]+"/"+day[0]+"/"+day[1]);//分割した日付を順番通りに並べ替えて表示させる
});

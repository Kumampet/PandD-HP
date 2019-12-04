//ニュースページに書かれた情報をトップページにも表示させます。
//news.htmlだけ編集することにより、メンテナンス性を上げました。
//だってそっち方が楽でしょ？

//ただし、ローカル環境での動作チェックはIE,FireFoxを使ってください。正しく表示されません
//どうしてもChromeを使う場合は　chrome --allow-file-access-from-files　で起動したブラウザにローカルパスを入力してファイルを開いてください。
$(function(){
  $("#news-feed .content").load("./news.html #news-source");
});

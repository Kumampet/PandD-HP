//ヘッダーを読み込みます。
//header.htmlを編集することでメニューを追加削除、アイコンの編集、ロゴマークの編集が一括して行えます。
//すべてのページのHTMLファイルをいじらなくても、メニューバーの編集が楽になります。

//ただし、ローカル環境での動作チェックはIE,FireFoxを使ってください。正しく表示されません
//どうしてもChromeを使う場合は　chrome --allow-file-access-from-files　で起動したブラウザにローカルパスを入力してファイルを開いてください。
$(function(){
  $("#layout .group1").load("./common_html/header.html #site_header");
});

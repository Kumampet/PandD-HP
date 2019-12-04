$(function(){
    $('input').on('keypress', function(e) {
        if ((e.which && e.which == 13) || (e.keycode && e.keycode == 13)) {
            return false;
        } else {
            return true;
        }
    });
});

function deleteGame() {
    if (window.confirm('このゲームを削除しますか？')) {
    } else {
        window.alert('削除処理をキャンセルしました。');
        return false;
    }
    $.ajax({
        url: "/game/delete",
        type: "post",
        data: { url : null },
        dataType: "text",
        success: function(response) {
            alert("削除が完了しました。");
            location.href = response;
        },
        error: function() {
            alert("通信に失敗しました。");
            return false;
        }
    });
}

function sendComment() {
    if (!$('#comment').val()) {
        alert('コメントが入力されていません。');
        return;
    }

    $.ajax({
        url: "/game/comment",
        type: "post",
        data: { comment : $('#comment').val() },
        dataType: "text",
        success: function(response) {
            alert(response);
            $('#comment').val('');
        },
        error: function() {
            alert("通信に失敗しました.");
            return false;
        }
    });
}

function modal_close() {
    $("modal").animate({
        opacity: 0,
    }, 2000, 'swing', function () {
        $(this).css('display','none');
    });
} 
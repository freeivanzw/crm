var $black = $('.shadow');
$black.on('click', function () {
    $(this).addClass('hidden');
})

$('.open-site_panel').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('btn_contrast');
    $('.site_panel').toggleClass('active');
})

$('.notification_btn').on('click', function (e) {
    e.preventDefault();

    $black.toggleClass('hidden');
    $('.notification_list').toggleClass('active');

    $black.on('click', function () {
        $('.notification_list').removeClass('active');
    })
})
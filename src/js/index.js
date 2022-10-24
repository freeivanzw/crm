$('.open-site_panel').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('btn_contrast');
    $('.site_panel').toggleClass('active');
})

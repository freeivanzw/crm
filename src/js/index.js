$(function () {
    var $black = $('.shadow');

    jQuery.fn.dropdown = function (options) {

        var settings = $.extend({
            arrow: '',
            prevent: true,
            onChange: ''
        }, options);

        return this.each(function () {
            var $this = $(this);

            if ($this.find('.selected').length > 0) {
                if ($(this).find('.overflow input').length > 0) {
                    $this.find('input:eq(0)')
                        .val($this.find('.selected').text())
                        .end()
                        .find('input').eq(1).val($this.find('.selected a').data('value'))
                        .end()
                        .find('.selected').closest('li').hide();
                } else {
                    $this.find('span:eq(0)')
                        .html($this.find('.selected').text() + settings.arrow)
                        .end()
                        .find('input').val($this.find('.selected a').data('value'))
                        .end()
                        .find('.selected').closest('li').hide();
                }
            }

            $this.on('click', '.overflow', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (!$(this).closest('.dropdown').hasClass('dropdown-open') || e.target.tagName === 'INPUT') {
                    $this.addClass('dropdown-open').find('ul:eq(0)').stop().slideDown(function () {
                        var h = parseInt($(this).outerHeight(true, true)),
                            top = parseInt($(this).offset()['top']) - parseInt($(document).scrollTop()),
                            wh = parseInt($(window).height());

                        if (top + h > wh) {
                            var dwh = wh - top - 10;

                            if (dwh < 200) {
                                dwh = 200;
                            }

                            $(this).css({
                                'max-height': dwh
                            });
                        } else {
                            $(this).css({
                                'max-height': 'auto'
                            });
                        }
                    });
                } else {
                    $this.removeClass('dropdown-open').find('ul:eq(0)').stop().slideUp();
                }
            });

            $this.on('keyup paste', '.overflow input', function () {
                var val = $.trim($(this).val()).toLowerCase();

                if (val === '') {
                    $this.find('.search_hidden').removeClass('search_hidden').removeClass('hidden');
                } else {
                    $this.find('li').map(function () {
                        if ($(this).find('a').text().toLowerCase().search(val) > -1) {
                            $(this).removeClass('search_hidden').removeClass('hidden');
                        } else {
                            $(this).addClass('search_hidden').addClass('hidden');
                        }
                    });
                }
            });

            $this.find('ul').eq(0).on('click', 'a', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('disabled')) {
                    if (settings.prevent === false) {
                        window.location.href = $(this).attr('href');
                    } else {
                        $(this).closest('ul').find('.selected').removeClass('selected').show().end().end().closest('li').addClass('selected').hide();

                        if ($(this).find('.overflow input').length > 0) {
                            $this.find('input:eq(0)').val($(this).text()).end().find('input:eq(1)').val($(this).data('value'));
                        } else {
                            $this.find('span:eq(0)').html($(this).text() + settings.arrow).end().find('input').val($(this).data('value'));
                        }

                        $this.removeClass('dropdown-open').find('ul:eq(0)').slideUp();
                        if ($.isFunction(settings.onChange)) settings.onChange($(this));
                    }
                }
            });
        });
    };

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

    var spark4 = {
        chart: {
            id: 'sparkline4',
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        series: [{
            name: 'teal',
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        colors: ['#ffffff'],
        xaxis: {
            crosshairs: {
                width: 1
            },
        }
    }

    new ApexCharts(document.querySelector("#spark4"), spark4).render();

    $('.comment-area-responsive').focus(function () {
        let $currentBox = $(this).closest('.col-3')
        $currentBox.addClass('active')

        $(document).on('click', function(e) {
            if (!$(e.target).closest($currentBox).length) {
                $currentBox.removeClass('active')
            }
            e.stopPropagation();
        });
    })

    $('.comment-area-responsive').each(function () {
        $(this).css('height', ($(this)[0].scrollHeight + 2 ) + 'px')
        $(this).on('input', TextInput)
    })

    function TextInput() {
        $(this).css('height', ($(this)[0].scrollHeight + 2 ) + 'px')
    }


    var $input_tagator1 = $('#input_tagator');
    if ($input_tagator1.data('tagator') === undefined) {
        $input_tagator1.tagator({
            autocomplete: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'],
            useDimmer: true
        });
    } else {
        $input_tagator1.tagator('destroy');
    }


    $('.choose_department').dropdown()
    $('.money_month').dropdown()
    $('.money_year').dropdown()


    $(".demo-x").mCustomScrollbar({
        axis:"x",
    });


})
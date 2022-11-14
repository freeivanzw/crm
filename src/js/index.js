$(function () {
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
            $activate_tagator1.val('destroy tagator');
        } else {
            $input_tagator1.tagator('destroy');
            $activate_tagator1.val('activate tagator');
        }
})
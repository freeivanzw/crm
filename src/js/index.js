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

    new ApexCharts(document.querySelector("#spark4"), spark4).render();
})
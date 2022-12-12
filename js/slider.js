$(document).ready(function () {
    $('.brands-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,

        arrows: false,
        dots: false,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    })

    $('.trust__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,

        arrows: true,
        dots: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 782,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    })
})
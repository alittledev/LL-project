$(document).ready(function(){
    $('.slider-container').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: true,
        appendArrows: $('.nav-arrows'),
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
  });

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

function initMap() {
 // The location of Lifted Logic
 const liftedLogic = { lat: 38.9872497, lng: -94.6684171};
 // The map, centered at Lifted Logic
 const map = new google.maps.Map(document.getElementById("map"), {
     mapId: "d4122c77b5410b5b",
   zoom: 12,
   center: liftedLogic,
 });
 // The marker, positioned at Lifted Logic
 const marker = new google.maps.Marker({
   position: liftedLogic,
   map: map,
 });
}

window.initMap = initMap;



  
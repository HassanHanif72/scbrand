// portfolio Slick Slider
$('.portfolio-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '80px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]
});

// Team Slick Slider
$('.team-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]
});

// Get Quote Form validation

(function() {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


$(document).ready(function() {
  $('.navdesktop').hover(
    function() {
      $(this).addClass('show');
      $(this).find('.dropdown-navdesktop').first().addClass('show');
    },
    function() {
      $(this).removeClass('show');
      $(this).find('.dropdown-navdesktop').first().removeClass('show');
    }
  );
});
// Sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// end Sticky header

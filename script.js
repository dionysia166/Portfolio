// Responsive header
let hamburger = document.getElementById('burger-holder');
let close_nav = document.getElementById('close-nav');
let navLinks = document.querySelectorAll('.header-menu a'); // Select all navigation links

hamburger.addEventListener('click', function() {
    document.body.classList.add('nav-is-open');
});

close_nav.addEventListener('click', function() {
    document.body.classList.remove('nav-is-open');
});

// Close the navigation when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.body.classList.remove('nav-is-open');
    });
});

// Accordion effect
$('.timeline-header').on('click', function(){
    $(this).toggleClass('is-open');
    $(this).next('.timeline-content').slideToggle();
});

// Slick slider
$('.slider-holder').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 400,
    ease: 'linear',
    centerPadding: $('.slick').find('.item').outerWidth() / 2,
    responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

//Animate on Scroll initailization
AOS.init({
  once: true,
});


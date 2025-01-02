// Navbar background color is changed.
function handleNavbar() {
    var nav = document.getElementById('navbar');
    var burgerMenu = document.getElementById('navbarSupportedContent');

    // Navbar background color becomes white with scroll OR if the burger menu is opened. Otherwise, it remains transparent.
    function updateNavBackground() {
        if (window.pageYOffset > 90 || burgerMenu.classList.contains('show')) {
            nav.style.backgroundColor = '#F6F9FF';
            nav.style.borderBottom = '4px solid #79CDDA';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.borderBottom = 'none';
        }
    }

    // The updateNavBackground function is assigned to the scroll event so that it can be called on scroll.
    window.onscroll = updateNavBackground;

    // When burger menu is shown, the updateNavBackground function is called.
    burgerMenu.addEventListener('shown.bs.collapse', function() {
        updateNavBackground();
    });

    // When burger menu is hidden, the updateNavBackground function is called.
    burgerMenu.addEventListener('hidden.bs.collapse', function() {
        updateNavBackground();
    });

}

handleNavbar();

// Popup item added to cart.
function popupDisplayed() {
    let popup = document.getElementById('popup');
    let body = document.getElementById('body');

    // Popup opens with 'cart' button click.
    document.getElementById('btn-cart').addEventListener('click', function(){
        document.body.classList.add('popup-is-active');
    });

    // Popup closes with 'x' button click.
    document.getElementById('close.btn').addEventListener('click', function(){
        document.body.classList.remove('popup-is-active');
    });
    
    // Exit popup upon clicking outside.
    popup.addEventListener('click', function(event){
        if(event.target === document.getElementById('popup')){
            document.body.classList.remove('popup-is-active');
        }
    });
}

popupDisplayed();

// Animate on scroll initialization
AOS.init({
    once: true,
    duration: 1000,
});

// Slick Slider
$('.slider-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                autoplay: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 2000,
                
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,               
            }
        }
    ]
});


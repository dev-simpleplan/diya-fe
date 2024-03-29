function myFunction(x) {
    x.classList.toggle("change");
    var menu = document.querySelector('.menu');
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
}

document.addEventListener('DOMContentLoaded', function() {
    const solMenu = document.querySelector('.sol');
    const resMenu = document.querySelector('.res');
    const aboMenu = document.querySelector('.abo');
    const mobileSoldrop = document.querySelector('.mobile-soldrop');
    const mobileRdrop = document.querySelector('.mobile-rdrop');
    const aDrop = document.querySelector('.adrop');
    const menuList = document.querySelector('.menulist');
    const mobileDropTop = document.querySelectorAll('.mobiledrop-top');

    solMenu.addEventListener('click', function() {
        mobileSoldrop.style.transform = 'translateX(0)';
        menuList.style.visibility = 'hidden';
        menuList.style.opacity = '0';
    });

    resMenu.addEventListener('click', function() {
        mobileRdrop.style.transform = 'translateX(0)';
        menuList.style.visibility = 'hidden';
        menuList.style.opacity = '0';
    });

    aboMenu.addEventListener('click', function() {
        aDrop.style.transform = 'translateX(0)';
        menuList.style.visibility = 'hidden';
        menuList.style.opacity = '0';
    });

    // Add click event listener to each .mobiledrop-top
    mobileDropTop.forEach(function(dropTop) {
        dropTop.addEventListener('click', function() {
            // Hide all dropdowns and move them off-screen
            mobileSoldrop.style.transform = 'translateX(1100px)';
            mobileRdrop.style.transform = 'translateX(1100px)';
            aDrop.style.transform = 'translateX(1100px)';

            // Show menuList
            menuList.style.visibility = 'visible';
            menuList.style.opacity = '1';
        });
    });
});
// customer strories slider
var splide = new Splide( '#splide1', {
    type   : 'loop',
    padding:"0rem",
    perPage: 1.25, 
  } );
  
  splide.mount();
  // customer strories slider
  // blog slider starts
  var splide2 = new Splide( '#splide3', {
    type   : 'loop',
    padding:"0rem",
    perPage: 2.5, 
 
    breakpoints: {
      767: {
        perPage: 1.5,
      },
      
    }
  } );
  splide2.mount();
  // blog slider ends

//Banner Animation
gsap.registerPlugin(ScrollTrigger);

// add a media query. When it matches, the associated function will run
    // gsap.set(".ban-img img", { scale: "container.offsetWidth / image.offsetWidth" });

//   counter js
    var counted = 0;
      $(window).scroll(function() {

        var oTop = $('.inner-acc').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
          $('span.num-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
          counted = 1;
        }

      });
// counter js ends
//Faq Accordian
$(document).ready(function() {
  // Collapse all accordion items except the one with the 'open' class
  $('.accrodion-container').not('.open').find('.inner').hide();

  // Handle accordion toggle
  $('.toggle').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $accordionItem = $this.closest('.accrodion-container');

    if (!$accordionItem.hasClass('active')) {
      $('.accrodion-container').removeClass('active').find('.inner').slideUp(350);
      $accordionItem.addClass('active').find('.inner').slideDown(350);
    } else {
      $accordionItem.removeClass('active').find('.inner').slideUp(350);
    }
  });
});
// ticker
$('.bxslider').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 170,
  slideMargin: 10,
  ticker: true,
  speed: 9000
});
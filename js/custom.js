// Header Animation
var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navigation");
var sidenav = document.querySelector(".sidenav"); 
var scrollThreshold = 100; // Set the threshold value in pixels

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // Check if the current scroll position is greater than or equal to the threshold
  if (currentScrollPos >= scrollThreshold) {
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
      sidenav.style.top = "0"; 
    } else {
      navbar.style.top = "-100px";
      sidenav.style.top = "-100px"; 
    }
  } else {
    // If the scroll position is less than the threshold, always show the navbar
    navbar.style.top = "0";
    sidenav.style.top = "0"; 
  }

  prevScrollpos = currentScrollPos;
}

//Header Js
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.navigation').addClass('backdrop');
    $('.sidenav').addClass('backdrop'); // Add this line
  } else {
    $('.navigation').removeClass('backdrop');
    $('.sidenav').removeClass('backdrop'); // Add this line
  }
});


$(document).ready(function(){
  $('.ham-menu').click(function(){
    $('body').toggleClass('of-hidden');
  });
  // $('.ham-menu').click(function(){
  //   $('body').removeClass('of-hidden');
  // })
});
// Header Js Ends

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
  slideWidth: 'auto',
  slideMargin: 18,
  ticker: true,
  speed: 20000
});


// Variables to store previous window size
let prevWidth = window.innerWidth;
let resizeTimeout;

// Function to reload the page
function reloadPage() {
    location.reload();
}

// Event listener for window resize
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
        // Current window size
        const currentWidth = window.innerWidth;

        // Check if width change is significant
        const widthDifference = Math.abs(currentWidth - prevWidth);
        const threshold = 50; // Adjust as needed

        // Only reload if the width difference is above the threshold
        if (widthDifference > threshold) {
            reloadPage();
        }

        // Update previous width
        prevWidth = currentWidth;
    }, 200); // Delay before checking for resize, adjust as needed
});

        if (performance.navigation.type === 1) {
      // Reload the page from the top before the DOM is fully loaded
      window.location.replace(window.location.href);
    }
    // customer strories slider
$('.mobile-stories-bottom .owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  items: 1,
})
  // customer strories slider
  // blog slider starts

  $('.mobile-blog-bottom .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items: 1,
  })
  // blog slider ends
  
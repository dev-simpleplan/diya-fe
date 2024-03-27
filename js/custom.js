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
            mobileSoldrop.style.transform = 'translateX(865px)';
            mobileRdrop.style.transform = 'translateX(865px)';
            aDrop.style.transform = 'translateX(865px)';

            // Show menuList
            menuList.style.visibility = 'visible';
            menuList.style.opacity = '1';
        });
    });
});

// gsap.registerPlugin(ScrollTrigger);

// let navigation = document.querySelector(".navigation");
// let images = document.querySelectorAll(".bannerimg img");
// let currentImageIndex = 0; // Track the index of the currently displayed image

// // Hide the navigation initially
// navigation.style.display = "none";

// let t1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".banner",
//         pin: true,
//         start: "top top",
//         end: "+=150%",
//         scrub: 0.1,
//         markers: true,
//         ease: "none",
//     },
// });

// t1.fromTo(
//     ".bannertext",
//     { y: 315, scale: 1 },
//     { y: -95, scale: 0.6 },
//     "abc"
// )
// .fromTo(
//     ".bannertext",
//     { x: "0" },
//     { x: "-240" },
// )
// .fromTo(
//     ".bannerimg",
//     { width: "100vw", height: "100vh", top: 0, left: 0 },
//     { width: 140, height: 70, top: "40%", left: "41%" },
//     "abc"
// )
// .to(".text1 , .text2 ,.bb-left ,.bb-right", { y: 0, x: 0, duration: 0.4 });

// // ScrollTrigger to show/hide navigation
// ScrollTrigger.create({
//     trigger: ".banner",
//     start: "top top",
//     end: "+=150%",
//     onEnter: () => {
//         navigation.style.display = "block";
//     },
//     onLeaveBack: () => {
//         navigation.style.display = "none";
//     }
// });

// // ScrollTrigger to change images
// ScrollTrigger.create({
//     trigger: ".banner",
//     start: "top top",
//     end: "+=150%",
//     onUpdate: (self) => {
//         let progress = self.progress;
//         let index = Math.floor(progress * images.length);
        
//         // Check if index has changed
//         if (index !== currentImageIndex) {
//             // Change the source of the corresponding image
//             images[currentImageIndex].style.opacity = 0; // Hide previous image
//             images[index].style.opacity = 1; // Show current image
//             currentImageIndex = index; // Update current index
//         }
//     }
// });

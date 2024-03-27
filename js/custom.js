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
